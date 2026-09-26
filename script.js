// ==========================
// PESAN PERMINTAAN MAAF
// ==========================

const messages = [
  "aku mau minta maaf atas apa yang terjadi.",

  "mungkin ada perkataan atau sikap aku yang bikin kamu salah paham atau merasa nggak nyaman.",

  "aku sadar aku seharusnya bisa lebih hati hati dalam berbicara dan memahami perasaan kamu.",

  "aku ngga bermaksud buat nyakitin kamu. kalau aku salah, aku benar-benar minta maaf.",

  "aku cuma berharap kita ngga perlu terus terusan salah paham karena sesuatu yang sebenarnya bisa dibicarakan baik baik.",

  "terima kasih karena sudah mau membaca sampai sini, sayanggg ❤️"
];


// ==========================
// VARIABEL
// ==========================

let current = 0;
let typingInterval = null;


// ==========================
// AMBIL ELEMENT HTML
// ==========================

const opening = document.getElementById("opening");
const letter = document.getElementById("letter");
const ending = document.getElementById("ending");

const text = document.getElementById("text");

const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");


// ==========================
// BUKA SURAT
// ==========================

openBtn.addEventListener("click", () => {

  opening.classList.add("hidden");
  letter.classList.remove("hidden");

  current = 0;

  showMessage();

});


// ==========================
// MENAMPILKAN PESAN
// ==========================

function showMessage() {

  // Hentikan animasi ketikan sebelumnya
  if (typingInterval !== null) {
    clearInterval(typingInterval);
  }

  text.textContent = "";

  const message = messages[current];

  let index = 0;

  typingInterval = setInterval(() => {

    text.textContent += message.charAt(index);

    index++;

    if (index >= message.length) {

      clearInterval(typingInterval);

      typingInterval = null;

    }

  }, 35);

}


// ==========================
// TOMBOL LANJUT
// ==========================

nextBtn.addEventListener("click", () => {

  // Kalau masih sedang mengetik,
  // langsung tampilkan pesan lengkap
  if (typingInterval !== null) {

    clearInterval(typingInterval);

    typingInterval = null;

    text.textContent = messages[current];

    return;
  }


  current++;


  // Kalau semua pesan sudah selesai
  if (current >= messages.length) {

    letter.classList.add("hidden");

    ending.classList.remove("hidden");

    createHearts();

    return;
  }


  // Tampilkan pesan berikutnya
  showMessage();

});


// ==========================
// TOMBOL BACA LAGI
// ==========================

restartBtn.addEventListener("click", () => {

  if (typingInterval !== null) {
    clearInterval(typingInterval);
    typingInterval = null;
  }

  current = 0;

  ending.classList.add("hidden");

  opening.classList.remove("hidden");

});


// ==========================
// ANIMASI HATI
// ==========================

function createHeart() {

  const heart = document.createElement("div");

  heart.className = "heart";

  const heartTypes = [
    "❤️",
    "💗",
    "💕",
    "💖"
  ];

  heart.textContent =
    heartTypes[
      Math.floor(Math.random() * heartTypes.length)
    ];


  // Posisi horizontal random
  heart.style.left =
    Math.random() * 100 + "%";


  // Kecepatan random
  heart.style.animationDuration =
    (4 + Math.random() * 4) + "s";


  // Ukuran random
  heart.style.fontSize =
    (15 + Math.random() * 20) + "px";


  document
    .querySelector(".hearts")
    .appendChild(heart);


  // Hapus setelah animasi selesai
  setTimeout(() => {

    heart.remove();

  }, 8000);

}


// ==========================
// BANYAK HATI
// ==========================

function createHearts() {

  for (let i = 0; i < 25; i++) {

    setTimeout(() => {

      createHeart();

    }, i * 150);

  }

}


// ==========================
// HATI BERJALAN
// ==========================

setInterval(() => {

  createHeart();

}, 1200);