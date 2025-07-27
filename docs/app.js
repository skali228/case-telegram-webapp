// Инициализация TonConnect
const connector = new TonConnect.TonConnect({
    manifestUrl: 'https://skali228.github.io/case-telegram-webapp/docs/tonconnect-manifest.json'
});

// Элементы интерфейса
const connectBtn = document.getElementById('connect-wallet-btn');
const tgUsername = document.getElementById('tg-username');
const walletInfo = document.getElementById('wallet-info');

// Инициализация Telegram WebApp
if (window.Telegram && Telegram.WebApp) {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();

    const tgUser = Telegram.WebApp.initDataUnsafe.user;
    if (tgUser) {
        tgUsername.textContent = tgUser.first_name || 'Пользователь';
    }
}

// Обработчик кнопки
connectBtn.addEventListener('click', async () => {
    try {
        connectBtn.disabled = true;
        connectBtn.textContent = 'Подключаемся...';

        const wallets = await connector.getWallets();
        if (wallets.length === 0) {
            throw new Error('Не найдены кошельки');
        }

        await connector.connect({ jsBridgeKey: wallets[0].jsBridgeKey });

        connector.onStatusChange((wallet) => {
            if (wallet) {
                const shortAddress = `${wallet.account.address.slice(0, 4)}...${wallet.account.address.slice(-4)}`;
                walletInfo.textContent = `Кошелек: ${shortAddress}`;
                connectBtn.textContent = '✅ Успешно подключено';
            }
        });
    } catch (error) {
        console.error('Ошибка подключения:', error);
        connectBtn.textContent = 'Ошибка, попробуйте снова';
        setTimeout(() => {
            connectBtn.textContent = '🔗 Подключить кошелек';
            connectBtn.disabled = false;
        }, 2000);
    }
});