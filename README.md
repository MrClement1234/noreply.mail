# 🚀 Mock Trading Platform

A complete **educational cryptocurrency trading platform** with **16+ wallet integrations**, professional email notifications, real-time socket.io updates, and multi-blockchain support.

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Version](https://img.shields.io/badge/Version-1.0.0-orange)

## ✨ Features

### 🔐 User Authentication
- User registration with email verification
- Secure login with JWT tokens
- Password hashing with bcryptjs
- Session management
- User preferences (wallet, theme)

### 💰 Wallet Integration (16+ Wallets)
**Centralized Exchanges:**
- Binance
- Bybit
- Kraken
- Coinbase
- Kucoin
- Gate.io
- OKX
- Huobi

**Self-Custody Wallets:**
- MetaMask
- Trust Wallet
- Ledger Live
- Trezor
- Phantom (Solana)
- Exodus
- SafePal
- Atomic Wallet

**DEX & Special:**
- Raydium
- TronLink
- Coindex
- Bitget
- BitPay

### 📧 Professional Email Notifications
- **16+ Wallet-branded email templates**
- Transaction receipts with wallet styling
- Deposit confirmations
- Real-time email notifications
- SMTP support (Gmail, custom servers)
- HTML email templates

### 📊 Portfolio Management
- View crypto assets (BTC, ETH, USDT, USDC, etc.)
- Real-time balance tracking
- 24-hour price change percentage
- Asset allocation overview
- Portfolio value in USD

### 🔄 Transaction Management
- Send crypto transactions
- Deposit funds
- Transaction history with filtering
- Transaction status tracking
- Real-time notifications via Socket.io

### 🔐 Security Features
- JWT authentication
- CORS protection
- Input validation
- Password hashing
- Email verification
- Environment variable protection

### 📱 Real-time Updates
- Socket.io WebSocket connection
- Real-time transaction notifications
- Live price updates
- Wallet room subscriptions

## 🛠️ Tech Stack

### Backend
- **Runtime:** Node.js 16+
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT (jsonwebtoken)
- **Email:** Nodemailer
- **Real-time:** Socket.io
- **Security:** bcryptjs, CORS
- **HTTP Client:** Axios

### Frontend (React - Coming Soon)
- React.js
- Redux/Context API
- Socket.io client
- Axios
- Tailwind CSS

### Mobile (Android - Coming Soon)
- Kotlin
- Retrofit
- Coroutines
- Room Database

## 📋 Prerequisites

Before you start, make sure you have:

```bash
✅ Node.js 16 or higher
✅ npm or yarn
✅ MongoDB (local or Atlas)
✅ Git
✅ Gmail account (for email sending)
✅ Postman or cURL (for testing)
```

**Check versions:**
```bash
node --version    # Should be v16+
npm --version     # Should be 8+
```

## 🚀 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/MrClement1234/mock-trading-platform.git
cd mock-trading-platform
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

```bash
# Copy the example file
cp .env.example .env

# Edit .env with your values
# See docs/SETUP.md for detailed instructions
```

**Key variables to set:**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mock-trading
JWT_SECRET=your_super_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_16_char_app_password
```

### 4️⃣ Start MongoDB

```bash
# Option A: Local MongoDB
mongod

# Option B: MongoDB Atlas (Cloud)
# Update MONGODB_URI in .env
```

### 5️⃣ Start the Server

```bash
npm run dev
```

**Should see:**
```
✅ MongoDB connected
🚀 Mock Trading Platform Server
📍 Running on port 5000
🌍 API: http://localhost:5000/api
📧 Email: Configured ✅
```

### 6️⃣ Test the API

```bash
# Health check
curl http://localhost:5000/api/health

# Response:
# {"status":"OK","message":"Mock Trading Platform is running"}
```

## 📁 Project Structure

```
mock-trading-platform/
├── server/
│   ├── models/
│   │   ├── User.js                 # User schema & methods
│   │   ├── Transaction.js          # Transaction schema
│   │   └── Portfolio.js            # Portfolio schema
│   │
│   ├── routes/
│   │   ├── auth.js                 # Auth endpoints
│   │   ├── transactions.js         # Transaction endpoints
│   │   ├── portfolio.js            # Portfolio endpoints
│   │   └── notifications.js        # Notification endpoints
│   │
│   ├── middleware/
│   │   └── auth.js                 # JWT authentication
│   │
│   ├── services/
│   │   ├── emailService.js         # Email sending logic
│   │   └── walletTemplates/
│   │       ├── index.js            # Template registry
│   │       ├── binanceTemplate.js
│   │       ├── bybitTemplate.js
│   │       ├── krakenTemplate.js
│   │       ├── coinbaseTemplate.js
│   │       ├── metamaskTemplate.js
│   │       ├── trustwalletTemplate.js
│   │       ├── ledgerTemplate.js
│   │       ├── trezorTemplate.js
│   │       ├── phantomTemplate.js
│   │       ├── exodusTemplate.js
│   │       ├── raydiumTemplate.js
│   │       ├── safepalTemplate.js
│   │       ├── tronlinkTemplate.js
│   │       ├── coindexTemplate.js
│   │       ├── bitgetTemplate.js
│   │       └── bitpayTemplate.js
│   │
│   └── index.js                    # Main server file
│
├── .env.example                    # Environment variables template
├── .gitignore                      # Git ignore rules
├── package.json                    # Dependencies & scripts
└── README.md                       # This file
```

## 🔌 API Endpoints

### Authentication Endpoints

```http
POST   /api/auth/register       # Register new user
POST   /api/auth/login          # Login user
GET    /api/auth/me             # Get current user
PUT    /api/auth/preferences    # Update user preferences
```

### Transaction Endpoints

```http
POST   /api/transactions/send       # Send transaction
POST   /api/transactions/deposit    # Deposit funds
GET    /api/transactions/history    # Get transaction history
GET    /api/transactions/:id        # Get transaction details
```

### Portfolio Endpoints

```http
GET    /api/portfolio              # Get user portfolio
GET    /api/portfolio/balance      # Get portfolio balance
PUT    /api/portfolio/update       # Update portfolio
```

### Notification Endpoints

```http
POST   /api/notifications/test-email    # Send test email
GET    /api/notifications/health        # Check email service
```

## 📧 Email Templates

All 16+ wallet templates include:
- ✅ Wallet logo
- ✅ Transaction type indicator
- ✅ Amount display
- ✅ Transaction details
- ✅ Blockchain explorer link
- ✅ Professional styling

**Wallet templates:**
```
binance, bybit, kraken, coinbase,
metamask, trustwallet, ledger, trezor,
phantom, exodus, raydium, safepal,
tronlink, coindex, bitget, bitpay
```

## 🧪 Testing

### Using Postman

1. Download [Postman](https://www.postman.com/downloads/)
2. Import endpoints from `docs/API.md`
3. Set `{{BASE_URL}}` to `http://localhost:5000/api`
4. Test endpoints

### Using cURL

```bash
# Register user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "email": "john@example.com",
    "password": "password123",
    "firstName": "John",
    "lastName": "Doe"
  }'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'

# Send transaction (replace TOKEN)
curl -X POST http://localhost:5000/api/transactions/send \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 0.5,
    "toAddress": "0x742d35Cc6634C0532925a3b844Bc9e7595f42bE",
    "currency": "ETH",
    "description": "Test transaction"
  }'
```

## 📚 Documentation

- **[API Documentation](./docs/API.md)** - Complete API reference
- **[Setup Guide](./docs/SETUP.md)** - Detailed setup instructions
- **[Wallet Templates](./docs/WALLET_TEMPLATES.md)** - Email template reference

## 🔐 Security

### Best Practices Implemented

✅ JWT token authentication
✅ Password hashing (bcryptjs)
✅ CORS protection
✅ Input validation
✅ Environment variable protection
✅ Error handling
✅ Rate limiting ready
✅ HTTPS ready

### Important Security Notes

⚠️ **Never commit `.env` file to GitHub**
⚠️ **Change JWT_SECRET in production**
⚠️ **Use HTTPS in production**
⚠️ **Enable CORS only for trusted domains**
⚠️ **Rotate email passwords regularly**

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Make sure MongoDB is running
mongod

# Or check connection string in .env
MONGODB_URI=mongodb://localhost:27017/mock-trading
```

### Email Not Sending
```bash
# 1. Verify Gmail app password (not regular password)
# 2. Enable 2FA on Gmail
# 3. Check EMAIL_USER and EMAIL_PASSWORD in .env
# 4. Check spam folder for test emails
```

### Port 5000 Already in Use
```bash
# Kill process on port 5000
# Linux/Mac:
lsof -ti:5000 | xargs kill -9

# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### CORS Errors
```bash
# Verify frontend URL in .env
REACT_APP_API_URL=http://localhost:5000/api
```

## 📦 Environment Variables

Create a `.env` file with the following:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/mock-trading

# JWT
JWT_SECRET=your_super_secret_key_here_change_in_production
JWT_EXPIRE=7d

# Email (Gmail)
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_16_character_app_password
SENDER_NAME=Mock Trading Platform
SENDER_EMAIL=your_email@gmail.com

# Frontend
REACT_APP_API_URL=http://localhost:5000/api

# Features
ENABLE_PUSH_NOTIFICATIONS=true
ENABLE_EMAIL_NOTIFICATIONS=true
ENABLE_EMAIL_RECEIPTS=true
```

## 🚀 Deployment

### Deploy Backend

**Option 1: Heroku**
```bash
heroku login
heroku create mock-trading-platform
git push heroku main
```

**Option 2: Railway**
```bash
railway link
railway up
```

**Option 3: DigitalOcean**
```bash
# See docs/SETUP.md for detailed instructions
```

### Deploy Frontend

**Vercel:**
```bash
cd client
vercel
```

**Netlify:**
```bash
cd client
npm run build
# Deploy 'build' folder to Netlify
```

## 📝 API Response Format

### Success Response
```json
{
  "message": "Operation successful",
  "data": {
    "user": { ... }
  }
}
```

### Error Response
```json
{
  "error": "Error message here"
}
```

## 🗂️ Database Models

### User
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "hashed_password",
  "firstName": "John",
  "lastName": "Doe",
  "walletAddress": "0x1234...",
  "preferredWallet": "binance",
  "theme": "dark",
  "emailVerified": false,
  "notificationPreferences": {
    "emailNotifications": true,
    "pushNotifications": true,
    "emailReceipts": true
  },
  "createdAt": "2024-06-01T10:00:00Z"
}
```

### Transaction
```json
{
  "transactionId": "0xabc123...",
  "userId": "user_id",
  "type": "send",
  "status": "confirmed",
  "amount": 0.5,
  "currency": "ETH",
  "fromAddress": "0x1234...",
  "toAddress": "0x5678...",
  "network": "Ethereum",
  "fee": 0.001,
  "confirmations": 12,
  "walletUsed": "binance",
  "emailSent": true,
  "createdAt": "2024-06-01T10:30:00Z"
}
```

### Portfolio
```json
{
  "userId": "user_id",
  "assets": [
    {
      "symbol": "BTC",
      "amount": 0.5,
      "currentPrice": 45000,
      "totalValue": 22500,
      "percentageChange24h": 2.5
    }
  ],
  "totalBalance": 40000,
  "totalInUSD": 40000,
  "percentageChange24h": 2.1,
  "createdAt": "2024-06-01T10:00:00Z"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

## 👨‍💻 Author

**MrClement1234**
- GitHub: [@MrClement1234](https://github.com/MrClement1234)
- Email: your_email@example.com

## 🙏 Acknowledgments

- Express.js community
- MongoDB documentation
- Socket.io real-time framework
- Nodemailer email service
- All crypto wallet teams for inspiration

## 📞 Support

For support, open an issue on GitHub or email at your_email@example.com

## 🗺️ Roadmap

- [ ] React frontend application
- [ ] Android mobile app
- [ ] iOS mobile app
- [ ] Advanced charting
- [ ] Price alerts
- [ ] Automated trading bots
- [ ] Multi-language support
- [ ] Dark/Light theme toggle

## ⭐ Show your support

Give a ⭐ if this project helped you!

---

**Last Updated:** June 2024
**Version:** 1.0.0
**Status:** ✅ Active Development
