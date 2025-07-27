const connector = new TonConnect.TonConnect({
    manifestUrl: 'https://skali228.github.io/case-telegram-webapp/docs/tonconnect-manifest.json'
});

// Инициализация Telegram WebApp
if (window.Telegram && Telegram.WebApp) {
    Telegram.WebApp.expand();
    const user = Telegram.WebApp.initDataUnsafe.user;
    document.getElementById('username').textContent = user.first_name;
}

// Подключение кошелька
document.getElementById('connect-btn').addEventListener('click', async () => {
    const wallets = await connector.getWallets();
    await connector.connect({ jsBridgeKey: wallets[0].jsBridgeKey });

    connector.onStatusChange((wallet) => {
        if (wallet) {
            const address = wallet.account.address;
            document.getElementById('wallet').textContent =
                `${address.slice(0, 4)}...${address.slice(-4)}`;
        }
    });
});

// Загрузка кейсов
const cases = [
    { id: 1, name: "Бесплатный", price: 0 },
    { id: 2, name: "Обычный", price: 5 },
    { id: 3, name: "Редкий", price: 15 },
    { id: 4, name: "Эпический", price: 50 }
];

cases.forEach(item => {
    const caseEl = document.createElement('div');
    caseEl.className = 'case';
    caseEl.innerHTML = `
        <div class="case-name">${item.name}</div>
        <div class="case-price">${item.price} TON</div>
    `;
    document.getElementById('cases-container').appendChild(caseEl);
});