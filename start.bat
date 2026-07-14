@echo off
cd /d D:\forchange\IETLSLearning
echo ===================================
echo  IELTS 雅思訓練 - 手機連線
echo ===================================
echo.
echo 📱 手機瀏覽器輸入:
echo    http://192.168.0.32:8080
echo.
echo ⚠️  手機和電腦需連同一個 WiFi
echo ===================================
python -m http.server 8080
pause
