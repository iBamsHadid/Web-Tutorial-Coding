document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah pengiriman form

  // Ambil nilai dari input
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Tampilkan alert sebagai konfirmasi
  alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.\nEmail: ${email}\nPesan: ${message}`);

  // Reset form
  this.reset();
});
