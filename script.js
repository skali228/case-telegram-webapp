// Получаем ID пользователя из URL
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('user_id');

// Инициализация Telegram WebApp
if (window.Telegram && Telegram.WebApp) {
    Telegram.WebApp.expand();
    const user = Telegram.WebApp.initDataUnsafe.user;
    
    document.getElementById('username').textContent = user.first_name;
    document.getElementById('wallet').textContent = '0.00 TON';
}

function openCase(caseId) {
    const prizes = {
        1: ["5 TON", "10 TON", "NFT"],
        2: ["50 TON", "100 TON", "Редкий NFT"]
    };
    
    const randomPrize = prizes[caseId][Math.floor(Math.random() * prizes[caseId].length)];
    alert(`🎉 Поздравляем! Вы выиграли: ${randomPrize}`);
}

function connectWallet() {
    alert("Функция подключения кошелька будет реализована в следующем обновлении");
}