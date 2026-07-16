# IELTS 訓練專案 — AI 代理記憶

## 關鍵資訊

### Git 分支
- **`master`**: GitHub Pages 部署分支（不要直接 commit）
- **`main`**: 開發分支
- 修改後需同步到 master: `git push origin main:master`

### 部署
- GitHub Pages: `https://whywong2010.github.io/ielts-trainer`
- 來源分支: `master`
- 推送 `main` → `master` 後等約 30-60 秒生效

### 分支同步命令
```bash
git checkout main
# 開發修改...
git push origin main
git push origin main:master   # 同步到部署分支
```

### 本地工作目錄
- 可寫入: `C:\Users\USER\AppData\Local\Temp\opencode\ielts-trainer\`
- 原始唯讀: `D:\forchange\IETLSLearning\`

### 技術棧
- 純前端 HTML/CSS/JS，無後端
- YouTube IFrame API (影片)
- Web Speech API (TTS)
- MediaRecorder (錄音)
- LocalStorage (資料存儲)

### 常見錯誤
- 在兩個 JS 檔案重複宣告 `const` 變數會導致整份 JS 不執行（如 `SPEAKING_TOPICS`）
- 程式碼合併要檢查 `data.js` 和 `app.js` 之間無重複 const

### 影片功能
- YouTube IFrame API 動態載入（網址：`https://www.youtube.com/iframe_api`）
- 若 YouTube 無法載入（被擋或逾時），5 秒後自動顯示 fallback 訊息
- Fallback 模式提供「全文朗讀」按鈕，使用 Web Speech API (TTS) 逐句播放
- 每句也有獨立的「🔊 聽」按鈕，可單句朗讀
- 影片數據在 `data.js` 的 `VIDEOS` 陣列中
- 語速控制獨立於 TTS（`setVideoSpeed` 同時控制 YT 播放速率和 TTS 速率）
