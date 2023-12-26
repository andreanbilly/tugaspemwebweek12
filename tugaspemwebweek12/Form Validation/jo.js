function validateForm(event) {
    event.preventDefault();

    var namaPelanggan = document.getElementById('namaPelanggan').value;
    var email = document.getElementById('email').value;
    var jamKeberangkatan = document.getElementById('jamKeberangkatan').value;
    var tujuanKeberangkatan = document.getElementById('tujuanKeberangkatan').value;
    var jumlahTiket = document.getElementById('jumlahTiket').value;

    var errorText = document.getElementById('errorText');
    var output = document.getElementById('output');

    // Validasi Nama Pelanggan
    if (!namaPelanggan || namaPelanggan.length > 30) {
        errorText.innerHTML = "Nama Pelanggan tidak valid (maksimum 30 karakter)";
        return;
    }

    // Validasi Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !email.match(emailRegex)) {
        errorText.innerHTML = "Email tidak valid";
        return;
    }

    // Validasi Jam Keberangkatan
    var jamRegex = /^(?:[01]\d|2[0-3]):(?:[0-5]\d)$/;
    if (!jamKeberangkatan || !jamKeberangkatan.match(jamRegex)) {
        errorText.innerHTML = "Jam Keberangkatan tidak valid (format: HH:mm)";
        return;
    }

    // Validasi Tujuan Keberangkatan
    if (!tujuanKeberangkatan) {
        errorText.innerHTML = "Tujuan Keberangkatan tidak boleh kosong";
        return;
    }

    // Validasi Jumlah Tiket
    if (!jumlahTiket || jumlahTiket < 1 || jumlahTiket > 10) {
        errorText.innerHTML = "Jumlah Tiket tidak valid (harus antara 1 dan 10)";
        return;
    }

    // Reset pesan error
    errorText.innerHTML = "";

    // Tampilkan output
    output.innerHTML = `
        <h2>Output:</h2>
        <p>Nama Pelanggan: ${namaPelanggan}</p>
        <p>Email: ${email}</p>
        <p>Jam Keberangkatan: ${jamKeberangkatan}</p>
        <p>Tujuan Keberangkatan: ${tujuanKeberangkatan}</p>
        <p>Jumlah Tiket: ${jumlahTiket}</p>
    `;
}
