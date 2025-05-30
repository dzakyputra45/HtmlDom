document.getElementById("formPeminatan").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const alamat = document.getElementById("alamat").value;
  const angkatan = document.getElementById("angkatan").value;
  const tanggal = document.getElementById("tanggal").value;

  const peminatan = document.querySelector('input[name="peminatan"]:checked')?.value || "Belum dipilih";

  alert(
    `Nama      : ${nama}\n` +
    `NIM       : ${nim}\n` +
    `Peminatan : ${peminatan}\n` +
    `Angkatan  : ${angkatan}\n` +
    `Tanggal   : ${tanggal}\n` +
    `Alamat    : ${alamat}`
  );
});
