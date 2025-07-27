// Инициализация Telegram WebApp
if (window.Telegram && Telegram.WebApp) {
    Telegram.WebApp.expand();

    // Получаем данные пользователя
    const user = Telegram.WebApp.initDataUnsafe.user;

    // Устанавливаем данные пользователя
    document.querySelector('.username').textContent = user.first_name || 'Гость';
    document.querySelector('.wallet').textContent = user.username ? `@${user.username}` : 'UIQDSN...Oleo';

    // Можно добавить реальный баланс из вашей системы
}

// Обработчики для кейсов
document.querySelectorAll('.case').forEach(caseItem => {
    caseItem.addEventListener('click', () => {
        const caseName = caseItem.querySelector('.case-name').textContent;
        alert(`Открываем кейс: ${caseName}`);

        // Здесь будет логика открытия кейса
        // Можно добавить анимацию и запрос к серверу
    });
});

// Обработчики для нижнего меню
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.menu-item.active').classList.remove('active');
        this.classList.add('active');

        // Здесь будет переключение между разделами
    });
});