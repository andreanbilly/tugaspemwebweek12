function displayImage() {
    var selectImage = document.getElementById('selectImage');
    var selectedImage = document.getElementById('selectedImage');
    var alertBox = document.getElementById('alertBox');

    // Mendapatkan nama file gambar
    var imageName = selectImage.value + ".jpg"; // Ganti ekstensi sesuai dengan format gambar yang digunakan

    // Menampilkan gambar
    selectedImage.src = imageName;

    // Menampilkan kotak alert dengan informasi nama file gambar
    alertBox.innerHTML = "Nama File: " + imageName;
    alertBox.style.display = "block";
}
