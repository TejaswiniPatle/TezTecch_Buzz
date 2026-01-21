# Start both servers simultaneously
Write-Host "🚀 Starting TezTecch Buzz - Main Website & Admin Panel..." -ForegroundColor Cyan
Write-Host ""

# Start Main Website (Port 5173)
Write-Host "📱 Starting Main Website on Port 5173..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot'; npm run dev"

# Wait a bit
Start-Sleep -Seconds 2

# Start Admin Panel (Port 5174)
Write-Host "🔐 Starting Admin Panel on Port 5174..." -ForegroundColor Magenta
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\admin'; npm run dev"

Write-Host ""
Write-Host "✅ Both servers starting..." -ForegroundColor Yellow
Write-Host ""
Write-Host "URLs:" -ForegroundColor White
Write-Host "  Main Website: http://localhost:5173" -ForegroundColor Cyan
Write-Host "  Admin Panel:  http://localhost:5174" -ForegroundColor Magenta
Write-Host ""
Write-Host "Press Ctrl+C in each terminal to stop servers" -ForegroundColor Gray
