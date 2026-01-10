# TezTecch Buzz - Frontend Deployment Script
# Run this script to deploy frontend to Vercel

Write-Host "🚀 TezTecch Buzz - Frontend Deployment" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js installed: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found! Please install from https://nodejs.org" -ForegroundColor Red
    exit 1
}

# Check if npm is installed
Write-Host "Checking npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✅ npm installed: v$npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm not found!" -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host ""
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Dependencies installed!" -ForegroundColor Green

# Build the project
Write-Host ""
Write-Host "🔨 Building production bundle..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build successful!" -ForegroundColor Green

# Check if Vercel CLI is installed
Write-Host ""
Write-Host "Checking Vercel CLI..." -ForegroundColor Yellow
try {
    $vercelVersion = vercel --version
    Write-Host "✅ Vercel CLI installed: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Vercel CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g vercel
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install Vercel CLI!" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Vercel CLI installed!" -ForegroundColor Green
}

# Deploy to Vercel
Write-Host ""
Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Cyan
Write-Host "Follow the prompts to complete deployment" -ForegroundColor Yellow
Write-Host ""

vercel --prod

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "🎉 Deployment successful!" -ForegroundColor Green
    Write-Host "✅ Your website is now live!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Copy your deployment URL" -ForegroundColor White
    Write-Host "2. Update FRONTEND_URL in backend .env" -ForegroundColor White
    Write-Host "3. Deploy backend using backend deployment script" -ForegroundColor White
} else {
    Write-Host ""
    Write-Host "❌ Deployment failed!" -ForegroundColor Red
    Write-Host "Please check the errors above and try again." -ForegroundColor Yellow
}
