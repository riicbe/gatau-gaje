const text = "SAYA ROMY MAZAYA MENYATAKAN";
let i = 0;

function showPopup() {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popup-text").innerHTML = "";
  typeWriter();
  showEmoji();
}

function typeWriter() {
  if (i < text.length) {
    document.getElementById("popup-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  i = 0;
}

function showEmoji() {
  const emojiArray = new Array(40).fill('💦');

  emojiArray.forEach((emojiChar, index) => {
    setTimeout(() => {
      const emoji = document.createElement('div');
      emoji.className = 'emoji';
      emoji.innerText = emojiChar;
      emoji.style.left = Math.random() * 100 + 'vw';
      emoji.style.bottom = '0';
      document.body.appendChild(emoji);

      setTimeout(() => emoji.remove(), 4000); // hapus setelah 4 detik
    }, index * 100 + Math.random() * 200); // jeda acak tiap emoji
  });
}

