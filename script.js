document.querySelectorAll('.menu div').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Открываем раздел: ${button.textContent}`);
    });
});

document.querySelector('.case-card').addEventListener('click', () => {
    const prizes = ["5.55 TON", "10 TON", "NFT"];
    const prize = prizes[Math.floor(Math.random() * prizes.length)];
    alert(`Вы выиграли: ${prize}!`);
});