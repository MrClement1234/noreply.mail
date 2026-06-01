module.exports = (data) => {
  const { transactionType, amount, currency, toAddress, fromAddress, transactionHash, timestamp, userName } = data;
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bybit Transaction Receipt</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0e27; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background-color: #1b1f3a; border-radius: 12px; border: 1px solid #2d3147; overflow: hidden; }
        .header { background: linear-gradient(135deg, #1b1f3a 0%, #0a0e27 100%); padding: 30px; text-align: center; border-bottom: 1px solid #2d3147; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 600; color: #fff; }
        .header p { margin: 10px 0 0 0; font-size: 14px; color: #a8aec8; }
        .logo { font-size: 40px; margin-bottom: 10px; }
        .content { padding: 30px; }
        .status { background-color: rgba(34, 197, 94, 0.1); border-left: 4px solid #22c55e; padding: 15px; border-radius: 6px; margin-bottom: 20px; }
        .status-text { color: #22c55e; font-weight: 600; font-size: 16px; }
        .detail-row { display: flex; justify-content: space-between; padding: 15px 0; border-bottom: 1px solid #2d3147; font-size: 14px; }
        .detail-label { color: #a8aec8; font-weight: 500; }
        .detail-value { color: #fff; font-weight: 600; word-break: break-all; }
        .amount-box { background: linear-gradient(135deg, #1b1f3a 0%, #2d3147 100%); padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; border: 1px solid #3d4556; }
        .amount-text { font-size: 28px; font-weight: 700; margin: 10px 0; color: #fff; }
        .currency-text { font-size: 14px; color: #a8aec8; }
        .footer { background-color: #0a0e27; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #2d3147; }
        .button { background: linear-gradient(135deg, #1b1f3a 0%, #2d3147 100%); color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-block; margin: 20px 0; border: 1px solid #3d4556; }
        h2 { color: #fff; }
        p { color: #a8aec8; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🚀</div>
          <h1>Bybit</h1>
          <p>Transaction Receipt</p>
        </div>
        
        <div class="content">
          <h2>Hello ${userName || 'User'},</h2>
          <p>Your ${transactionType} transaction has been confirmed on Bybit.</p>
          
          <div class="status">
            <div class="status-text">✓ Transaction Confirmed</div>
          </div>
          
          <div class="amount-box">
            <div class="currency-text">Amount</div>
            <div class="amount-text">${amount} ${currency}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Transaction Type:</div>
            <div class="detail-value">${transactionType === 'send' ? 'Withdrawal' : 'Deposit'}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">From Address:</div>
            <div class="detail-value">${fromAddress.substring(0, 10)}...${fromAddress.substring(fromAddress.length - 10)}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">To Address:</div>
            <div class="detail-value">${toAddress.substring(0, 10)}...${toAddress.substring(toAddress.length - 10)}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Transaction Hash:</div>
            <div class="detail-value">${transactionHash.substring(0, 10)}...${transactionHash.substring(transactionHash.length - 10)}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Time:</div>
            <div class="detail-value">${new Date(timestamp).toLocaleString()}</div>
          </div>
          
          <a href="https://bybit.com" class="button">View on Bybit</a>
        </div>
        
        <div class="footer">
          <p>This is an automated notification. Please do not reply to this email.</p>
          <p>&copy; 2024 Mock Trading Platform.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
