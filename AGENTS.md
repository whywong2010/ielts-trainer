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
