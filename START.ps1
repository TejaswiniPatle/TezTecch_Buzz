# TezTecch Buzz - Quick Start Script
# Run this in PowerShell to start everything

Write-Host "🚀 Starting TezTecch Buzz Complete System..." -ForegroundColor Cyan
Write-Host ""

# Check if .env exists in backend
if (-not (Test-Path "backend\.env")) {
    Write-Host "⚠️  Backend .env file not found!" -ForegroundColor Yellow
    Write-Host "📝 Please create backend\.env file with:" -ForegroundColor Yellow
    Write-Host "   MONGODB_URI=your_mongodb_connection_string" -ForegroundColor White
    Write-Host "   JWT_SECRET=your_secure_random_string" -ForegroundColor White
    Write-Host "   PORT=5000" -ForegroundColor White
    Write-Host "   FRONTEND_URL=http://localhost:5173" -ForegroundColor White
    Write-Host ""
    $continue = Read-Host "Do you want to continue anyway? (y/n)"
    if ($continue -ne "y") {
        exit
    }
}

# Check if node_modules exists
if (-not (Test-Path "backend\node_modules")) {
    Write-Host "📦 Installing backend dependencies..." -ForegroundColor Yellow
    Set-Location backend
    npm install
    Set-Location ..
}

if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing frontend dependencies..." -ForegroundColor Yellow
    npm install
}

Write-Host ""
Write-Host "✅ Dependencies ready!" -ForegroundColor Green
Write-Host ""

# Start backend in new PowerShell window
Write-Host "🔧 Starting Backend Server..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\backend'; Write-Host '🔧 Backend Server Starting...' -ForegroundColor Cyan; npm start"

# Wait a bit for backend to start
Write-Host "⏳ Waiting for backend to initialize (5 seconds)..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

# Start frontend in new PowerShell window
Write-Host "🎨 Starting Frontend..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; Write-Host '🎨 Frontend Starting...' -ForegroundColor Cyan; npm run dev"

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
Write-Host "✅ TezTecch Buzz is Starting!" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
Write-Host ""
Write-Host "📍 URLs:" -ForegroundColor Cyan
Write-Host "   🌐 Frontend:       http://localhost:5173" -ForegroundColor White
Write-Host "   🔧 Backend API:    http://localhost:5000" -ForegroundColor White
Write-Host "   🔐 Admin Login:    http://localhost:5173/admin/login" -ForegroundColor White
Write-Host "   📊 Admin Panel:    http://localhost:5173/admin/dashboard" -ForegroundColor White
Write-Host ""
Write-Host "🔑 Default Admin Credentials:" -ForegroundColor Cyan
Write-Host "   Email:    admin@teztecch.com" -ForegroundColor White
Write-Host "   Password: admin123" -ForegroundColor White
Write-Host ""
Write-Host "📝 Next Steps:" -ForegroundColor Cyan
Write-Host "   1. Wait for both servers to start (check new windows)" -ForegroundColor White
Write-Host "   2. Open http://localhost:5173 in your browser" -ForegroundColor White
Write-Host "   3. Create admin user: cd backend && npm run create-admin" -ForegroundColor White
Write-Host "   4. Login to admin panel and start managing content!" -ForegroundColor White
Write-Host ""
Write-Host "📚 Documentation:" -ForegroundColor Cyan
Write-Host "   - COMPLETE_SYSTEM_SUMMARY.md" -ForegroundColor White
Write-Host "   - ADMIN_PANEL_GUIDE.md" -ForegroundColor White
Write-Host "   - TESTING_DEPLOYMENT_CHECKLIST.md" -ForegroundColor White
Write-Host ""
Write-Host "🎉 Happy Creating!" -ForegroundColor Green
Write-Host ""

# Keep this window open
Read-Host "Press Enter to close this window..."
