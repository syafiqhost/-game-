let secretNumber;
let attempts;

// Fungsi untuk memulai ulang permainan
function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1; // Angka acak antara 1 dan 100
    attempts = 0; // Reset percobaan
    document.getElementById('result').innerHTML = '';
    document.getElementById('guess').value = ''; // Kosongkan input
    document.getElementById('guess').disabled = false;
    document.querySelector('button').innerText = "Tebak!";
}

// Fungsi untuk mengecek tebakan
function checkGuess() {
    let userGuess = parseInt(document.getElementById('guess').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById('result').innerHTML = 'Tolong masukkan angka antara 1 dan 100!';
        document.getElementById('result').className = 'result error';
        return;
    }

    attempts++; // Increment jumlah percobaan

    if (userGuess === secretNumber) {
        document.getElementById('result').innerHTML = `Yoii! lo menebak angka yang benar: ${secretNumber} dalam ${attempts} percobaan!`;
        document.getElementById('result').className = 'result success';
        document.getElementById('guess').disabled = true; // Nonaktifkan input setelah menebak benar
        document.querySelector('button').innerText = "Permainan Selesai!"; // Ubah teks tombol
    } else if (userGuess < secretNumber) {
        document.getElementById('result').innerHTML = 'LOL Tebakan Lo terlalu rendah. Coba lagi!';
        document.getElementById('result').className = 'result error';
    } else {
        document.getElementById('result').innerHTML = 'LOL Tebakan Lo terlalu tinggi. Coba lagi!';
        document.getElementById('result').className = 'result error';
    }
}

// Mulai permainan pertama kali
restartGame();