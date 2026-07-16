const WORD_DATA = [
  { id: 1, word: "abandon", difficulty: 1,
    ukPhonetic: "/əˈbændən/", usPhonetic: "/əˈbændən/",
    root: "a- (加强) + bandon (控制) → 放弃控制",
    definitions: [
      { context: "通用", meaning: "放弃，抛弃" },
      { context: "正式", meaning: "中止（计划）" }
    ],
    examples: [
      { en: "They had to abandon the project due to lack of funding.", zh: "由于缺乏资金，他们不得不放弃该项目。" },
      { en: "The driver abandoned his car on the highway.", zh: "司机把车丢弃在高速公路上。" }
    ] },
  { id: 2, word: "benefit", difficulty: 1,
    ukPhonetic: "/ˈbenɪfɪt/", usPhonetic: "/ˈbenəfɪt/",
    root: "bene- (好) + fit (做) → 利益",
    definitions: [
      { context: "通用", meaning: "好处，益处" },
      { context: "职场", meaning: "福利，津贴" }
    ],
    examples: [
      { en: "Regular exercise has many health benefits.", zh: "定期锻炼对健康有很多好处。" },
      { en: "Employees receive excellent benefits including health insurance.", zh: "员工享受包括医疗保险在内的优厚福利。" }
    ] },
  { id: 3, word: "contradict", difficulty: 2,
    ukPhonetic: "/ˌkɒntrəˈdɪkt/", usPhonetic: "/ˌkɑːntrəˈdɪkt/",
    root: "contra- (相反) + dict (说) → 反驳",
    definitions: [
      { context: "通用", meaning: "反驳，驳斥" },
      { context: "学术", meaning: "与…矛盾" }
    ],
    examples: [
      { en: "His actions contradict his words.", zh: "他的言行自相矛盾。" },
      { en: "The new evidence contradicts the earlier findings.", zh: "新证据与早先的发现相矛盾。" }
    ] },
  { id: 4, word: "exclude", difficulty: 1,
    ukPhonetic: "/ɪkˈskluːd/", usPhonetic: "/ɪkˈskluːd/",
    root: "ex- (向外) + clude (关闭) → 排除",
    definitions: [
      { context: "通用", meaning: "排除，不包括" },
      { context: "正式", meaning: "拒绝加入" }
    ],
    examples: [
      { en: "The price excludes tax and delivery fees.", zh: "价格不含税费和运费。" },
      { en: "Children under five are excluded from the competition.", zh: "五岁以下儿童不得参加比赛。" }
    ] },
  { id: 5, word: "inspire", difficulty: 1,
    ukPhonetic: "/ɪnˈspaɪə(r)/", usPhonetic: "/ɪnˈspaɪər/",
    root: "in- (进入) + spire (精神) → 激励",
    definitions: [
      { context: "通用", meaning: "激励，鼓舞" },
      { context: "艺术", meaning: "赋予灵感" }
    ],
    examples: [
      { en: "Her teacher inspired her to pursue a career in science.", zh: "她的老师激励她从事科学事业。" },
      { en: "The beautiful landscape inspired his best painting.", zh: "美丽的风景激发了他最好的画作。" }
    ] },
  { id: 6, word: "predict", difficulty: 1,
    ukPhonetic: "/prɪˈdɪkt/", usPhonetic: "/prɪˈdɪkt/",
    root: "pre- (提前) + dict (说) → 预测",
    definitions: [
      { context: "通用", meaning: "预测，预料" },
      { context: "学术", meaning: "预报" }
    ],
    examples: [
      { en: "Economists predict that inflation will rise next year.", zh: "经济学家预测明年通胀将上升。" },
      { en: "It's hard to predict what will happen in the future.", zh: "很难预测未来会发生什么。" }
    ] },
  { id: 7, word: "transport", difficulty: 1,
    ukPhonetic: "/ˈtrænspɔːt/", usPhonetic: "/ˈtrænspɔːrt/",
    root: "trans- (跨越) + port (搬运) → 运输",
    definitions: [
      { context: "通用", meaning: "交通，运输" },
      { context: "商务", meaning: "运输业" }
    ],
    examples: [
      { en: "Public transport in the city is efficient and affordable.", zh: "这座城市的公共交通高效且实惠。" },
      { en: "The goods were transported by ship to Europe.", zh: "货物通过船舶运输到欧洲。" }
    ] },
  { id: 8, word: "inevitable", difficulty: 2,
    ukPhonetic: "/ɪnˈevɪtəbl/", usPhonetic: "/ɪnˈevɪtəbl/",
    root: "in- (不) + evit- (避免) + -able → 不可避免的",
    definitions: [
      { context: "通用", meaning: "不可避免的" },
      { context: "写作", meaning: "必然的" }
    ],
    examples: [
      { en: "Change is inevitable in any organization.", zh: "变革在任何组织中都是不可避免的。" },
      { en: "It was inevitable that they would eventually disagree.", zh: "他们最终产生分歧是不可避免的。" }
    ] },
  { id: 9, word: "comprehend", difficulty: 2,
    ukPhonetic: "/ˌkɒmprɪˈhend/", usPhonetic: "/ˌkɑːmprɪˈhend/",
    root: "com- (一起) + prehend (抓住) → 理解",
    definitions: [
      { context: "学术", meaning: "理解，领悟" }
    ],
    examples: [
      { en: "The child couldn't comprehend the complexity of the problem.", zh: "孩子无法理解这个问题的复杂性。" },
      { en: "It's difficult to comprehend how such a mistake could happen.", zh: "很难理解这样的错误怎么会发生。" }
    ] },
  { id: 10, word: "distribute", difficulty: 2,
    ukPhonetic: "/dɪˈstrɪbjuːt/", usPhonetic: "/dɪˈstrɪbjuːt/",
    root: "dis- (分开) + tribute (给予) → 分配",
    definitions: [
      { context: "商务", meaning: "分发，分配" },
      { context: "统计", meaning: "分布" }
    ],
    examples: [
      { en: "The company distributes its products to over 50 countries.", zh: "该公司将产品分销到50多个国家。" },
      { en: "Food was distributed among the refugees.", zh: "食物被分发给了难民。" }
    ] }
];

const PASSAGES = [
  { id: 1, title: "Why Exercise Matters", level: "B2",
    embedWords: [2],
    content: [
      { en: "Regular exercise has many health benefits.", zh: "定期锻炼对健康有很多好处。" },
      { en: "It can help prevent heart disease and improve mental health.", zh: "它有助于预防心脏病并改善心理健康。" },
      { en: "Many people benefit greatly from just 30 minutes of daily activity.", zh: "许多人每天只需30分钟的活动就能受益匪浅。" },
      { en: "Scientists predict that regular exercise can extend your lifespan.", zh: "科学家预测定期锻炼可以延长寿命。" },
      { en: "The benefits are inevitable if you stay consistent.", zh: "如果坚持下去，好处是不可避免的。" }
    ] },
  { id: 2, title: "Urban Transport", level: "B2",
    embedWords: [7, 10],
    content: [
      { en: "Public transport in big cities is constantly improving.", zh: "大城市的公共交通在不断改善。" },
      { en: "Efficient transport systems help reduce traffic congestion.", zh: "高效的交通系统有助于减少交通拥堵。" },
      { en: "Many cities distribute free transport maps to tourists.", zh: "许多城市向游客分发免费的交通地图。" },
      { en: "It is inevitable that more people will use public transport.", zh: "越来越多的人使用公共交通是不可避免的。" },
      { en: "Good transport benefits both the economy and the environment.", zh: "良好的交通对经济和环境都有益。" }
    ] }
];

const VIDEOS = [
  {
    id: 1,
    youtubeId: "KhI7Ncl61i0",
    title: "谷爱凌：关于未来与目标",
    source: "Bloomberg Interview",
    embedWords: [],
    segments: [
      { start: 0, end: 6,
        en: "When you think about the future, what's in it for Eileen Gu?",
        zh: "当你想到未来，谷爱凌的未来会是什么？",
        keywords: [{ word: "future", start: 24, end: 30 }] },
      { start: 6, end: 14,
        en: "People talk about movies, business, entrepreneurship.",
        zh: "人们谈到电影、商业和创业。",
        keywords: [{ word: "entrepreneurship", start: 28, end: 43 }] },
      { start: 14, end: 22,
        en: "How do you look at the future for someone who's achieved so much?",
        zh: "你怎么看待一个已经取得这么多成就的人的未来？",
        keywords: [{ word: "achieved", start: 46, end: 54 }] },
      { start: 22, end: 30,
        en: "I'm investing more now and growing interest in that area.",
        zh: "我现在投入更多，对这个领域兴趣渐浓。",
        keywords: [{ word: "investing", start: 4, end: 13 }] },
      { start: 30, end: 37,
        en: "I'd love to start a company and write a book.",
        zh: "我想创办一家公司并写一本书。",
        keywords: [{ word: "company", start: 18, end: 25 }] },
      { start: 37, end: 44,
        en: "I don't really sit still for very long.",
        zh: "我不会长时间闲坐着。",
        keywords: [] },
      { start: 44, end: 52,
        en: "I don't like declaring goals until I meet them.",
        zh: "我不喜欢在实现目标之前就宣告出来。",
        keywords: [{ word: "declaring", start: 13, end: 22 }] },
      { start: 52, end: 60,
        en: "You'll never find an interview of me saying I'm going to win.",
        zh: "你永远不会找到我说"我要赢"的采访。",
        keywords: [{ word: "interview", start: 19, end: 28 }] },
      { start: 60, end: 68,
        en: "I can only say retrospectively, this is what I have done.",
        zh: "我只能回顾性地说出我已经做到了什么。",
        keywords: [{ word: "retrospectively", start: 13, end: 27 }] },
      { start: 68, end: 74,
        en: "My goal is to make the world a better place.",
        zh: "我的目标是让世界变得更美好。",
        keywords: [{ word: "goal", start: 3, end: 7 }] }
    ]
  }
];

const SPEAKING_TOPICS = [
  {
    question: "Do you think exercise is important?",
    hint: "Use PRE structure",
    model: "P: I believe exercise is extremely important for overall health.\nR: Regular physical activity can prevent many diseases and improve mental well-being.\nE: For example, my father started jogging every morning and his blood pressure dropped significantly within three months.",
    keywords: ["benefit", "inevitable", "predict"]
  },
  {
    question: "Should cities invest more in public transport?",
    hint: "Use PRE structure",
    model: "P: Yes, cities should invest more in public transport systems.\nR: Efficient transport can reduce traffic congestion and air pollution significantly.\nE: In my hometown, the new subway line reduced commute time by half and thousands of people benefit from it every day.",
    keywords: ["transport", "benefit", "distribute"]
  },
  {
    question: "Is lifelong learning important?",
    hint: "Use PRE structure",
    model: "P: Lifelong learning is essential in today's rapidly changing world.\nR: New technologies and knowledge emerge constantly, and those who fail to adapt will be left behind.\nE: My aunt learned coding at age 50 and completely changed her career path, which inspired many people around her.",
    keywords: ["inspire", "inevitable", "comprehend"]
  },
  {
    question: "Has technology improved education?",
    hint: "Use PRE structure",
    model: "P: I strongly agree that technology has transformed education for the better.\nR: Online resources and digital tools make learning more accessible and personalized.\nE: During the pandemic, schools distributed tablets to students and distributed learning materials online, which prevented education from being interrupted.",
    keywords: ["distribute", "exclude", "benefit"]
  }
];
