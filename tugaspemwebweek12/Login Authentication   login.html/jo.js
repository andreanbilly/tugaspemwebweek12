function validateLogin(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Cek username dan password
    if (username === 'ahmad2017' && password === 'integrity') {
        alert('Login sukses');
        window.location.href = 'halaman-baru.html';
    } else {
        alert('Login gagal');
    }
}
