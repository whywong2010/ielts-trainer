/* ===== STATE ===== */
const STORAGE_KEY = 'ietls_data';
const EBBINGHAUS_INTERVALS = [1, 2, 4, 7, 15, 30];
const DAILY_WORDS = 6;

let state = loadState();
let listenSpeed = 1.0;
let currentListenPassageId = null;
let currentLearnWordIndex = 0;
let learnWordsToday = [];
let reviewWordsToday = [];
let currentSpeakingIndex = 0;
let isRecording = false;
let pageStack = ['home'];
let ytPlayer = null;
let currentVideoId = null;
let videoSpeed = 1.0;
let subtitleTimer = null;

function getDefaultState() {
  const words = {};
  WORD_DATA.forEach(w => {
    words[w.id] = { status: 'new', nextReview: null, reviewCount: 0, learnedAt: null, stage: 0 };
  });
  return {
    words,
    settings: { accent: 'uk', speed: 1.0, fontSize: 'medium' },
    checkedIn: [],
    totalListenTime: 0,
    todaysNewCount: 0,
    todaysReviewCount: 0,
    lastSessionDate: null,
    listenCounter: 0
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      const def = getDefaultState();
      if (!saved.words) saved.words = {};
      WORD_DATA.forEach(w => {
        if (!saved.words[w.id]) saved.words[w.id] = def.words[w.id];
      });
      if (!saved.settings) saved.settings = def.settings;
      if (!saved.checkedIn) saved.checkedIn = def.checkedIn;
      return saved;
    }
  } catch (e) { console.error('Load error', e); }
  return getDefaultState();
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { console.error('Save error', e); }
}

/* ===== UTILITY ===== */
function today() {
  return new Date().toISOString().split('T')[0];
}

function formatDate(d) {
  const date = new Date(d);
  return `${date.getMonth()+1}/${date.getDate()}`;
}

function getDayOfWeek(d) {
  return new Date(d).getDay();
}

/* ===== NAVIGATION ===== */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + pageId);
  if (page) page.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navItem = document.querySelector(`.nav-item[data-page="${pageId}"]`);
  if (navItem) navItem.classList.add('active');
  const simplePages = ['home', 'wordbook', 'listening', 'speaking', 'dashboard', 'video'];
  document.getElementById('backBtn').style.display = (simplePages.includes(pageId) && pageId !== 'home') ? 'inline' : (pageId === 'home') ? 'none' : 'inline';
  const titles = { home: 'IELTS 雅思训练', wordbook: '生词本', listening: '精听训练', speaking: '口语练习', dashboard: '学习数据', review: '到期复习', settings: '设置', 'word-detail': '单词详情', learning: '今日学习', video: '视频学习' };
  document.getElementById('headerTitle').textContent = titles[pageId] || 'IELTS 雅思训练';
  if (pageId !== 'home') {
    if (pageStack[pageStack.length - 1] !== pageId) pageStack.push(pageId);
  } else {
    pageStack = ['home'];
  }
  if (pageId === 'home') renderHome();
  else if (pageId === 'wordbook') renderWordBook();
  else if (pageId === 'listening') renderListening();
  else if (pageId === 'speaking') renderSpeaking();
  else if (pageId === 'dashboard') renderDashboard();
  else if (pageId === 'review') renderReview();
  else if (pageId === 'video') renderVideoPage();
}

function goBack() {
  if (pageStack.length > 1) {
    pageStack.pop();
    const prev = pageStack[pageStack.length - 1] || 'home';
    showPage(prev);
  } else {
    showPage('home');
  }
}

/* ===== SETTINGS ===== */
function saveSettings() {
  const accent = document.getElementById('settingAccent').value;
  const speed = parseFloat(document.getElementById('settingSpeed').value);
  const fontSize = document.getElementById('settingFontSize').value;
  state.settings.accent = accent;
  state.settings.speed = speed;
  state.settings.fontSize = fontSize;
  getTTS().setAccent(accent);
  getTTS().setRate(speed);
  document.documentElement.style.fontSize = fontSize === 'small' ? '14px' : fontSize === 'large' ? '18px' : '16px';
  saveState();
}

function loadSettings() {
  document.getElementById('settingAccent').value = state.settings.accent;
  document.getElementById('settingSpeed').value = String(state.settings.speed);
  document.getElementById('settingFontSize').value = state.settings.fontSize;
  getTTS().setAccent(state.settings.accent);
  getTTS().setRate(state.settings.speed);
  document.documentElement.style.fontSize = state.settings.fontSize === 'small' ? '14px' : state.settings.fontSize === 'large' ? '18px' : '16px';
}

function exportWords() {
  let text = 'IELTS 生词本导出\n';
  text += `导出日期: ${today()}\n\n`;
  WORD_DATA.forEach(w => {
    const st = state.words[w.id];
    text += `${w.word} [${st.status === 'mastered' ? '已掌握' : st.status === 'learning' ? '学习中' : '未学'}]\n`;
    text += `  音标: ${w.ukPhonetic}\n`;
    text += `  词根: ${w.root}\n`;
    w.definitions.forEach(d => { text += `  [${d.context}] ${d.meaning}\n`; });
    text += '\n';
  });
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = `ielts_words_${today()}.txt`;
  a.click(); URL.revokeObjectURL(a.href);
}

function resetAll() {
  if (!confirm('确定重置所有学习数据？此操作不可恢复。')) return;
  localStorage.removeItem(STORAGE_KEY);
  state = getDefaultState();
  saveState();
  showPage('home');
}

/* ===== HOME ===== */
function renderHome() {
  if (state.lastSessionDate !== today()) {
    state.todaysNewCount = 0;
    state.todaysReviewCount = 0;
    state.lastSessionDate = today();
    saveState();
  }
  const newCount = WORD_DATA.filter(w => state.words[w.id].status === 'new').length;
  const reviewDue = getReviewDueWords().length;
  const todayChecked = state.checkedIn.includes(today());

  document.getElementById('newWordsBadge').textContent = Math.min(DAILY_WORDS, newCount);
  document.getElementById('reviewBadge').textContent = reviewDue;
  document.getElementById('totalWordsBadge').textContent = WORD_DATA.length;
  document.getElementById('streakText').textContent = `连续打卡 ${calcStreak()} 天`;

  const newDone = state.todaysNewCount;
  const reviewDone = state.todaysReviewCount;
  document.getElementById('newDone').textContent = newDone;
  document.getElementById('newTotal').textContent = Math.min(DAILY_WORDS, newCount);
  document.getElementById('reviewDone').textContent = reviewDone;
  document.getElementById('reviewTotal').textContent = reviewDue;

  const totalToday = Math.min(DAILY_WORDS, newCount) + reviewDue;
  const doneToday = newDone + reviewDone;
  const pct = totalToday > 0 ? Math.min(100, Math.round(doneToday / totalToday * 100)) : 0;
  document.getElementById('todayProgress').style.width = pct + '%';
  document.getElementById('greetingText').textContent = getGreeting();
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return '🌅 早上好，开始学习吧';
  if (h < 18) return '☀️ 下午好，继续加油';
  return '🌙 晚上好，再学一会儿';
}

function calcStreak() {
  let streak = 0;
  const d = new Date();
  while (true) {
    const ds = d.toISOString().split('T')[0];
    if (state.checkedIn.includes(ds)) { streak++; d.setDate(d.getDate() - 1); }
    else break;
  }
  return streak;
}

function checkIn() {
  const ds = today();
  if (!state.checkedIn.includes(ds)) {
    state.checkedIn.push(ds);
    saveState();
  }
}

/* ===== DAILY LEARNING ===== */
function startDailyLearning() {
  const newWords = WORD_DATA.filter(w => state.words[w.id].status === 'new');
  if (newWords.length === 0) {
    alert('🎉 所有单词已学完！请切换到复习模式。');
    return;
  }
  learnWordsToday = newWords.slice(0, DAILY_WORDS);
  currentLearnWordIndex = 0;
  showPage('learning');
  renderLearnWord();
}

function renderLearnWord() {
  if (currentLearnWordIndex >= learnWordsToday.length) {
    finishLearning();
    return;
  }
  const w = learnWordsToday[currentLearnWordIndex];
  document.getElementById('learnProgress').textContent = `${currentLearnWordIndex + 1} / ${learnWordsToday.length}`;
  document.getElementById('learnBar').style.width = `${((currentLearnWordIndex) / learnWordsToday.length) * 100}%`;
  document.getElementById('learnWord').textContent = w.word;
  document.getElementById('learnPhonetic').textContent = state.settings.accent === 'uk' ? w.ukPhonetic : w.usPhonetic;
  document.getElementById('learnRoot').textContent = w.root;
  document.getElementById('learnDefs').innerHTML = w.definitions.map(d =>
    `<div class="def-item"><span class="def-context">${d.context}</span> ${d.meaning}</div>`
  ).join('');
  document.getElementById('learnExamples').innerHTML = w.examples.map(e =>
    `<div class="ex-item"><div class="ex-en">${e.en}</div><div class="ex-zh">${e.zh}</div></div>`
  ).join('');
}

function playLearnWord() {
  if (!learnWordsToday[currentLearnWordIndex]) return;
  const w = learnWordsToday[currentLearnWordIndex];
  getTTS().speakWord(w.word);
}

function nextLearnWord() {
  const w = learnWordsToday[currentLearnWordIndex];
  if (w) {
    state.words[w.id].status = 'learning';
    state.words[w.id].learnedAt = today();
    state.words[w.id].stage = 0;
    state.words[w.id].nextReview = getNextReviewDate(0);
    state.words[w.id].reviewCount = 0;
    state.todaysNewCount = (state.todaysNewCount || 0) + 1;
    checkIn();
    saveState();
  }
  currentLearnWordIndex++;
  renderLearnWord();
}

function finishLearning() {
  showPage('home');
}

/* ===== REVIEW ===== */
function getReviewDueWords() {
  const ds = today();
  return WORD_DATA.filter(w => {
    const s = state.words[w.id];
    return s.status === 'learning' && s.nextReview && s.nextReview <= ds;
  });
}

function renderReview() {
  reviewWordsToday = getReviewDueWords();
  const container = document.getElementById('reviewList');
  const empty = document.getElementById('reviewEmpty');
  document.getElementById('reviewCount').textContent = reviewWordsToday.length;
  if (reviewWordsToday.length === 0) {
    container.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  container.innerHTML = reviewWordsToday.map(w => {
    const s = state.words[w.id];
    return `<div class="word-list-item" onclick="openReviewWord(${w.id})">
      <div><div class="wl-word">${w.word}</div><div class="wl-mean">${w.definitions[0].meaning}</div></div>
      <span class="wl-status learning">复习中</span>
    </div>`;
  }).join('');
}

function openReviewWord(id) {
  const w = WORD_DATA.find(x => x.id === id);
  if (!w) return;
  showWordDetail(w, () => {
    const s = state.words[w.id];
    s.stage = Math.min(s.stage + 1, EBBINGHAUS_INTERVALS.length - 1);
    s.nextReview = getNextReviewDate(s.stage);
    s.reviewCount = (s.reviewCount || 0) + 1;
    if (s.stage >= EBBINGHAUS_INTERVALS.length - 1) s.status = 'mastered';
    state.todaysReviewCount = (state.todaysReviewCount || 0) + 1;
    checkIn();
    saveState();
    renderReview();
    showPage('review');
  });
}

function getNextReviewDate(stage) {
  const d = new Date();
  d.setDate(d.getDate() + EBBINGHAUS_INTERVALS[Math.min(stage, EBBINGHAUS_INTERVALS.length - 1)]);
  return d.toISOString().split('T')[0];
}

/* ===== WORD BOOK ===== */
function renderWordBook() {
  const query = (document.getElementById('wordSearch').value || '').toLowerCase();
  const filter = document.getElementById('wordFilter').value;
  let list = WORD_DATA.filter(w => {
    if (filter !== 'all' && state.words[w.id] && state.words[w.id].status !== filter) return false;
    if (query && !w.word.toLowerCase().includes(query)) return false;
    return true;
  });
  const container = document.getElementById('wordList');
  container.innerHTML = list.map(w => {
    const status = state.words[w.id] ? state.words[w.id].status : 'new';
    const statusLabels = { new: '未学', learning: '学习中', mastered: '已掌握' };
    return `<div class="word-list-item" onclick="showWordDetail(WORD_DATA.find(x=>x.id===${w.id}), null, true)">
      <div><div class="wl-word">${w.word}</div><div class="wl-mean">${w.definitions[0].context}: ${w.definitions[0].meaning}</div></div>
      <span class="wl-status ${status}">${statusLabels[status]}</span>
    </div>`;
  }).join('');
  if (list.length === 0) container.innerHTML = '<p style="text-align:center;padding:20px;color:var(--text-muted)">无匹配单词</p>';
}

function filterWords() { renderWordBook(); }

/* ===== WORD DETAIL ===== */
function showWordDetail(w, onReviewComplete, fromBook) {
  showPage('word-detail');
  document.getElementById('backBtn').style.display = 'inline';
  document.getElementById('headerTitle').textContent = '单词详情';

  document.getElementById('wdWord').textContent = w.word;
  document.getElementById('wdPhonetic').textContent = state.settings.accent === 'uk' ? w.ukPhonetic : w.usPhonetic;
  document.getElementById('wdRoot').textContent = w.root;
  document.getElementById('wdDefs').innerHTML = w.definitions.map(d =>
    `<div class="def-item"><span class="def-context">${d.context}</span> ${d.meaning}</div>`
  ).join('');
  document.getElementById('wdExamples').innerHTML = w.examples.map(e =>
    `<div class="ex-item">
      <div class="ex-en">${e.en}</div>
      <div class="ex-zh">${e.zh}</div>
      <div class="ex-audio"><button class="btn-icon" onclick="speakExample('${e.en.replace(/'/g, "\\'")}')">🔊 朗读例句</button></div>
    </div>`
  ).join('');

  const s = state.words[w.id];
  const statusBtn = document.getElementById('wdStatusBtn');
  if (s.status === 'mastered') {
    statusBtn.textContent = '✅ 已掌握';
    statusBtn.style.background = '#38A169';
  } else {
    statusBtn.textContent = '标记为已掌握';
    statusBtn.style.background = '#1A365D';
  }
  statusBtn.onclick = function() {
    s.status = s.status === 'mastered' ? 'learning' : 'mastered';
    s.nextReview = null;
    saveState();
    showWordDetail(w, onReviewComplete, fromBook);
  };
}

function playWord() {
  const word = document.getElementById('wdWord').textContent;
  getTTS().speakWord(word);
}

function speakExample(text) {
  getTTS().speakSentence(text);
}

function toggleWordStatus() { /* handled inline */ }

/* ===== LISTENING ===== */
function renderListening() {
  const sel = document.getElementById('passageSelect');
  if (sel.options.length <= 1) {
    PASSAGES.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.id; opt.textContent = p.title;
      sel.appendChild(opt);
    });
  }
  if (!currentListenPassageId && PASSAGES.length > 0) {
    currentListenPassageId = PASSAGES[0].id;
    sel.value = currentListenPassageId;
  }
  loadPassage();

  const w = new Date().getDay();
  const locked = (calcDaysSinceStart() < 7);
  document.querySelectorAll('.btn-speed').forEach(b => {
    b.classList.toggle('active', parseFloat(b.dataset.speed) === listenSpeed);
    b.disabled = false;
  });
  if (locked) {
    document.querySelector('.btn-speed[data-speed="1.25"]').disabled = true;
    document.querySelector('.btn-speed[data-speed="1.25"]').style.opacity = '0.4';
  } else {
    document.querySelector('.btn-speed[data-speed="1.25"]').style.opacity = '1';
  }
}

function calcDaysSinceStart() {
  if (state.checkedIn.length === 0) return 0;
  const first = new Date(Math.min(...state.checkedIn.map(d => new Date(d).getTime())));
  return Math.floor((new Date() - first) / (1000 * 60 * 60 * 24)) + 1;
}

function loadPassage() {
  const sel = document.getElementById('passageSelect');
  const id = parseInt(sel.value);
  if (!id) { document.getElementById('passageContent').innerHTML = '<p>请选择篇章</p>'; return; }
  const p = PASSAGES.find(x => x.id === id);
  if (!p) return;
  currentListenPassageId = id;
  document.getElementById('passageLevel').textContent = p.level;
  const blind = document.getElementById('blindMode').checked;
  const container = document.getElementById('passageContent');
  container.innerHTML = p.content.map((s, i) => {
    const textDisplay = blind
      ? `<span style="color:var(--bg);user-select:none">${s.en}</span>`
      : `<span>${s.en}</span>`;
    return `<div class="sentence-item">
      <div class="sent-text">${textDisplay}<div class="sent-zh">${s.zh}</div></div>
      <div class="sent-actions">
        <button onclick="playSentence(${i})" title="朗读">🔊</button>
        <button onclick="recordSentence(${i})" title="跟读录音">🎤</button>
      </div>
    </div>`;
  }).join('');
}

function setListenSpeed(speed) {
  if (speed > 1.0 && calcDaysSinceStart() < 7) {
    alert('首周默认锁定 1.0x 语速，第2周起可切换 1.25x');
    return;
  }
  listenSpeed = speed;
  getTTS().setRate(speed);
  document.querySelectorAll('.btn-speed').forEach(b => b.classList.toggle('active', parseFloat(b.dataset.speed) === speed));
}

function toggleBlindMode() { loadPassage(); }

function playSentence(index) {
  const p = PASSAGES.find(x => x.id === currentListenPassageId);
  if (!p || !p.content[index]) return;
  getTTS().speakSentence(p.content[index].en);
}

function playFullPassage() {
  const p = PASSAGES.find(x => x.id === currentListenPassageId);
  if (!p) return;
  let i = 0;
  function playNext() {
    if (i < p.content.length) {
      getTTS().speakSentence(p.content[i].en, () => { i++; setTimeout(playNext, 400); });
    }
  }
  playNext();
}

function stopAudio() {
  getTTS().stop();
}

async function recordSentence(index) {
  const p = PASSAGES.find(x => x.id === currentListenPassageId);
  if (!p || !p.content[index]) return;
  const recorder = getRecorder();
  if (recorder.isRecording) {
    await recorder.stop();
    alert('录音已保存');
    return;
  }
  const ok = await recorder.start();
  if (ok) {
    getTTS().speakSentence(p.content[index].en);
    setTimeout(async () => {
      if (recorder.isRecording) {
        await recorder.stop();
        alert('跟读录音已保存，可到口语页收听');
      }
    }, 8000);
  } else {
    alert('无法访问麦克风，请检查权限');
  }
}

/* ===== SPEAKING ===== */
function renderSpeaking() {
  const topic = SPEAKING_TOPICS[currentSpeakingIndex];
  document.getElementById('speakTopic').textContent = topic.question;
  document.getElementById('speakHint').textContent = topic.hint;
  document.getElementById('modelAnswerText').textContent = topic.model;
  renderRecordings();
}

function playModelAnswer() {
  const topic = SPEAKING_TOPICS[currentSpeakingIndex];
  if (!topic) return;
  getTTS().speakSentence(topic.model);
}

async function toggleRecording() {
  const recorder = getRecorder();
  if (!isRecording) {
    const ok = await recorder.start();
    if (ok) {
      isRecording = true;
      document.getElementById('recordBtn').textContent = '⏹ 停止录音';
      document.getElementById('recordBtn').style.background = '#E53E3E';
      document.getElementById('recordingStatus').style.display = 'block';
    } else {
      alert('无法访问麦克风，请检查权限设置');
    }
  } else {
    const result = await recorder.stop();
    isRecording = false;
    document.getElementById('recordBtn').textContent = '🎤 开始录音';
    document.getElementById('recordBtn').style.background = '';
    document.getElementById('recordingStatus').style.display = 'none';
    if (result) {
      renderRecordings();
    }
  }
}

function renderRecordings() {
  const recordings = getRecorder().getRecordings();
  const container = document.getElementById('recordingsList');
  if (recordings.length === 0) {
    container.innerHTML = '';
    return;
  }
  container.innerHTML = recordings.map((r, i) =>
    `<div class="recording-item">
      <audio controls src="${r.url}"></audio>
      <button class="del-btn" onclick="deleteRecording(${i})">🗑</button>
    </div>`
  ).join('');
  state.listenCounter = (state.listenCounter || 0) + 1;
  saveState();
}

function deleteRecording(index) {
  getRecorder().deleteRecording(index);
  renderRecordings();
}

function nextSpeakingTopic() {
  currentSpeakingIndex = (currentSpeakingIndex + 1) % SPEAKING_TOPICS.length;
  renderSpeaking();
}

function prevSpeakingTopic() {
  currentSpeakingIndex = (currentSpeakingIndex - 1 + SPEAKING_TOPICS.length) % SPEAKING_TOPICS.length;
  renderSpeaking();
}

/* ===== DASHBOARD ===== */
function renderDashboard() {
  const total = WORD_DATA.length;
  const mastered = WORD_DATA.filter(w => state.words[w.id].status === 'mastered').length;
  const learning = WORD_DATA.filter(w => state.words[w.id].status === 'learning').length;
  const pct = total > 0 ? Math.round(mastered / total * 100) : 0;

  document.getElementById('dashStreak').textContent = calcStreak();
  document.getElementById('dashMastered').textContent = mastered;
  document.getElementById('dashLearning').textContent = learning;
  document.getElementById('dashProgress').textContent = pct + '%';
  document.getElementById('dashTotalDays').textContent = state.checkedIn.length;
  document.getElementById('dashListenTime').textContent = Math.round((state.listenCounter || 0) * 1.5) + '分钟';
  document.getElementById('dashRecordings').textContent = getRecorder().getRecordings().length;

  const cal = document.getElementById('dashWeekCalendar');
  const todayDate = new Date();
  let html = '';
  for (let i = 6; i >= 0; i--) {
    const d = new Date(todayDate);
    d.setDate(d.getDate() - i);
    const ds = d.toISOString().split('T')[0];
    const isToday = ds === today();
    const isDone = state.checkedIn.includes(ds);
    html += `<div class="week-day${isDone ? ' done' : ''}${isToday ? ' today' : ''}">${d.getDate()}</div>`;
  }
  cal.innerHTML = html;
}

/* ===== VIDEO ===== */
function loadYouTubeAPI() {
  if (window.YT) return;
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const first = document.getElementsByTagName('script')[0];
  first.parentNode.insertBefore(tag, first);
}

function onYouTubeIframeAPIReady() {
  if (!currentVideoId) return;
  const v = VIDEOS.find(x => x.id === currentVideoId);
  if (!v) return;
  if (ytPlayer) { ytPlayer.destroy(); ytPlayer = null; }
  ytPlayer = new YT.Player('youtubePlayer', {
    videoId: v.youtubeId,
    height: '100%', width: '100%',
    playerVars: { rel: 0, modestbranding: 1, playsinline: 1, fs: 0 },
    events: { onStateChange: onPlayerStateChange }
  });
}

function onPlayerStateChange(e) {
  if (e.data === YT.PlayerState.PLAYING) startSubtitleSync();
  else stopSubtitleSync();
  document.querySelectorAll('.btn-speed-sm').forEach(b => b.classList.toggle('active', parseFloat(b.dataset.vspeed) === videoSpeed));
}

function renderVideoPage() {
  const sel = document.getElementById('videoSelect');
  if (sel.options.length <= 1) {
    VIDEOS.forEach(v => {
      const opt = document.createElement('option');
      opt.value = v.id; opt.textContent = v.title;
      sel.appendChild(opt);
    });
  }
  if (!currentVideoId && VIDEOS.length > 0) {
    currentVideoId = VIDEOS[0].id;
    sel.value = currentVideoId;
  }
  loadYouTubeAPI();
  loadVideo();
}

function loadVideo() {
  const sel = document.getElementById('videoSelect');
  const id = parseInt(sel.value);
  if (!id) return;
  currentVideoId = id;
  const v = VIDEOS.find(x => x.id === id);
  if (!v) return;
  if (!window.YT) { loadYouTubeAPI(); return; }
  onYouTubeIframeAPIReady();
  renderTranscript();
}

function renderTranscript() {
  const v = VIDEOS.find(x => x.id === currentVideoId);
  if (!v) return;
  const showTrans = document.getElementById('showTranslation').checked;
  const container = document.getElementById('transcript');
  container.innerHTML = v.segments.map((seg, i) => {
    let enHtml = seg.en;
    if (seg.keywords && seg.keywords.length > 0) {
      seg.keywords.sort((a, b) => b.start - a.start);
      seg.keywords.forEach(kw => {
        const word = seg.en.substring(kw.start, kw.end);
        enHtml = enHtml.substring(0, kw.start) +
          `<span class="seg-keyword">${word}</span>` +
          enHtml.substring(kw.end);
      });
    }
    return `<div class="segment" id="seg-${i}" onclick="seekTo(${seg.start})">
      <div class="seg-en">${enHtml}</div>
      ${showTrans ? `<div class="seg-zh">${seg.zh}</div>` : ''}
      <div class="seg-actions">
        <button onclick="event.stopPropagation();playSegmentAudio(${i})">🔊 听</button>
        <button onclick="event.stopPropagation();recordSegmentAudio(${i})">🎤 跟读</button>
      </div>
    </div>`;
  }).join('');
}

function startSubtitleSync() {
  stopSubtitleSync();
  subtitleTimer = setInterval(() => {
    if (!ytPlayer || !ytPlayer.getCurrentTime) { stopSubtitleSync(); return; }
    const t = ytPlayer.getCurrentTime();
    const v = VIDEOS.find(x => x.id === currentVideoId);
    if (!v) return;
    let activeIdx = -1;
    v.segments.forEach((seg, i) => {
      if (t >= seg.start && t < seg.end) activeIdx = i;
    });
    document.querySelectorAll('.segment').forEach(el => el.classList.remove('active'));
    if (activeIdx >= 0) {
      const el = document.getElementById(`seg-${activeIdx}`);
      if (el) {
        el.classList.add('active');
        el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, 100);
}

function stopSubtitleSync() {
  if (subtitleTimer) { clearInterval(subtitleTimer); subtitleTimer = null; }
}

function togglePlayVideo() {
  if (!ytPlayer) return;
  if (ytPlayer.getPlayerState && ytPlayer.getPlayerState() === YT.PlayerState.PLAYING) {
    ytPlayer.pauseVideo();
  } else {
    ytPlayer.playVideo();
  }
}

function restartVideo() {
  if (!ytPlayer) return;
  ytPlayer.seekTo(0);
  ytPlayer.playVideo();
}

function setVideoSpeed(speed) {
  videoSpeed = speed;
  if (ytPlayer && ytPlayer.setPlaybackRate) ytPlayer.setPlaybackRate(speed);
  document.querySelectorAll('.btn-speed-sm').forEach(b => b.classList.toggle('active', parseFloat(b.dataset.vspeed) === speed));
}

function seekTo(time) {
  if (!ytPlayer) return;
  ytPlayer.seekTo(time);
  if (ytPlayer.getPlayerState && ytPlayer.getPlayerState() !== YT.PlayerState.PLAYING) {
    ytPlayer.playVideo();
  }
}

function playSegmentAudio(index) {
  const v = VIDEOS.find(x => x.id === currentVideoId);
  if (!v || !v.segments[index]) return;
  getTTS().speakSentence(v.segments[index].en);
}

async function recordSegmentAudio(index) {
  const v = VIDEOS.find(x => x.id === currentVideoId);
  if (!v || !v.segments[index]) return;
  const recorder = getRecorder();
  if (recorder.isRecording) { await recorder.stop(); alert('录音已保存'); return; }
  const ok = await recorder.start();
  if (ok) {
    getTTS().speakSentence(v.segments[index].en);
    setTimeout(async () => {
      if (recorder.isRecording) { await recorder.stop(); alert('跟读录音已保存'); }
    }, 8000);
  } else { alert('无法访问麦克风'); }
}

/* ===== INIT ===== */
function init() {
  getTTS();
  loadSettings();
  renderHome();
}

document.addEventListener('DOMContentLoaded', init);
