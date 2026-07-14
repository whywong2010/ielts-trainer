Write-Host "===================================" -ForegroundColor Cyan
Write-Host "  IELTS 雅思訓練 - 手機伺服器" -ForegroundColor Cyan
Write-Host "===================================" -ForegroundColor Cyan
Write-Host ""
$port = 8080
$ip = (Get-NetIPAddress | Where-Object { $_.AddressFamily -eq 'IPv4' -and $_.InterfaceAlias -notlike '*Loopback*' -and $_.PrefixOrigin -ne 'LinkLayer' } | Select-Object -First 1).IPAddress
if (-not $ip) { $ip = "localhost" }
Write-Host "📱 手機連線網址:" -ForegroundColor Yellow
Write-Host "   http://$($ip):$port" -ForegroundColor Green
Write-Host ""
Write-Host "⚠️  請確保手機和電腦連同一個 WiFi" -ForegroundColor Yellow
Write-Host ""
Write-Host "按 Ctrl+C 停止伺服器" -ForegroundColor Gray
Write-Host ""
python -m http.server $port --directory "D:\forchange\IETLSLearning"
