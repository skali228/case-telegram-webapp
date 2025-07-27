document.getElementById("openCase").addEventListener("click", () => {
  const prizes = ["10 TON", "NFT", "Стикеры"];
  const prize = prizes[Math.floor(Math.random() * prizes.length)];
  document.getElementById("result").innerText = `Вы выиграли: ${prize}!`;
});