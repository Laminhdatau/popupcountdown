// Buat elemen <style> untuk menampung CSS
var styleElement = document.createElement('style');
document.head.appendChild(styleElement);
var styleSheet = styleElement.sheet;

// Definisikan gaya CSS menggunakan JavaScript
styleSheet.insertRule(`
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`, 0);
styleSheet.insertRule(`
  .alert-container {
    text-align: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
`, 1);
styleSheet.insertRule(`
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
`, 2);
styleSheet.insertRule(`
  #countdown {
    font-size: 30px;
    font-weight: bold;
    color: #ff4500;
    margin-bottom: 20px;
  }
`, 3);
styleSheet.insertRule(`
  .warning-text {
    color: #ff4500;
    font-weight: bold;
  }
`, 4);

// Fungsi untuk menampilkan alert
function showPopup() {
          swal(
                    "Pemberitahuan Penting!",
                    "Akun Anda akan dihapus dalam 5 detik.",
                    "warning"
          );
}

// Fungsi untuk countdown
function startCountdown(duration) {
          $("#countdown")
                    .countdown(duration)
                    .on("update.countdown", function (event) {
                              $(this).html(event.strftime("%S"));
                    })
                    .on("finish.countdown", showPopup);
}

// Waktu countdown dalam detik
var currentDate = new Date();
var countdownTime = new Date(currentDate.getTime() + 5000); // 5 detik dari waktu sekarang

// Memulai countdown saat halaman dimuat
$(document).ready(function () {
          startCountdown(countdownTime);
});
