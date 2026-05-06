// Fungsi ini akan berjalan otomatis saat halaman selesai dimuat
window.addEventListener('load', () => {
  const welcomeScreen = document.getElementById('welcome-screen');
  
  // Jika ada welcome screen, tunggu user klik untuk memulai
  if (welcomeScreen) {
    welcomeScreen.addEventListener('click', () => {
      // 1. Memudarkan layar pembuka
      welcomeScreen.classList.add('fade-out');
      
      // 2. Menghapus class 'container' pada body setelah 1 detik (animasi bunga mulai)
      setTimeout(() => {
        document.body.classList.remove('container');
      }, 1000);
    });
  } else {
    // Jika tidak pakai welcome screen, bunga langsung tumbuh otomatis
    document.body.classList.remove('container');
  }
});
