function showImage() {
  const result = document.getElementById('result');
  result.style.display = 'block';
  createHearts();
}

function moveNo(btn) {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}

function createHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerText = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 4 + Math.random() * 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }
}
