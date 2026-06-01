module.exports = (data) => {
  const { transactionType, amount, currency, toAddress, fromAddress, transactionHash, timestamp, userName } = data;
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MetaMask Transaction Receipt</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #fafbfc; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background-color: #fff; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden; }
        .header { background: linear-gradient(135deg, #f6851b 0%, #f8c14f 100%); padding: 40px 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 700; color: #fff; }
        .header p { margin: 10px 0 0 0; font-size: 14px; color: rgba(255,255,255,0.95); }
        .logo { font-size: 50px; margin-bottom: 10px; }
        .content { padding: 40px; }
        .status { background-color: #d1f4e0; border-left: 4px solid #27ae60; padding: 16px; border-radius: 8px; margin-bottom: 24px; }
        .status-text { color: #27ae60; font-weight: 700; font-size: 16px; }
        .detail-row { display: flex; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; }
        .detail-label { color: #6c7280; font-weight: 500; }
        .detail-value { color: #1f2937; font-weight: 600; word-break: break-all; text-align: right; flex: 1; margin-left: 10px; font-family: 'Monaco', 'Courier', monospace; font-size: 12px; }
        .amount-box { background: linear-gradient(135deg, #f6851b 0%, #f8c14f 100%); padding: 28px; border-radius: 12px; margin: 24px 0; text-align: center; box-shadow: 0 4px 12px rgba(246, 133, 27, 0.2); }
        .amount-text { font-size: 32px; font-weight: 700; margin: 10px 0; color: #fff; }
        .currency-text { font-size: 14px; color: rgba(255,255,255,0.95); font-weight: 500; }
        .footer { background-color: #f8f9fa; padding: 24px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #eee; }
        .button { background: linear-gradient(135deg, #f6851b 0%, #f8c14f 100%); color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 700; display: inline-block; margin: 24px 0; box-shadow: 0 4px 8px rgba(246, 133, 27, 0.3); }
        h2 { color: #1f2937; font-size: 20px; font-weight: 600; }
        p { color: #6c7280; line-height: 1.6; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🦊</div>
          <h1>MetaMask</h1>
          <p>Ethereum Transaction Receipt</p>
        </div>
        
        <div class="content">
          <h2>Hello ${userName || 'User'},</h2>
          <p>Your ${transactionType} transaction on Ethereum has been confirmed.</p>
          
          <div class="status">
            <div class="status-text">✓ Transaction Confirmed on Ethereum</div>
          </div>
          
          <div class="amount-box">
            <div class="currency-text">Amount</div>
            <div class="amount-text">${amount} ${currency}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Type:</div>
            <div class="detail-value">${transactionType}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">From:</div>
            <div class="detail-value">${fromAddress}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">To:</div>
            <div class="detail-value">${toAddress}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Hash:</div>
            <div class="detail-value">${transactionHash}</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Network:</div>
            <div class="detail-value">Ethereum Mainnet</div>
          </div>
          
          <div class="detail-row">
            <div class="detail-label">Timestamp:</div>
            <div class="detail-value">${new Date(timestamp).toLocaleString()}</div>
          </div>
          
          <a href="https://etherscan.io/tx/${transactionHash}" class="button">View on Etherscan</a>
        </div>
        
        <div class="footer">
          <p>This is an automated notification from MetaMask.</p>
          <p>&copy; 2024 Mock Trading Platform.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
