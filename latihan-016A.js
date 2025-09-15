let tugas = JSON.parse(localStorage.getItem("tugas")) || [];
console.log(tugas);
let namaTugas = prompt("Masukkan nama tugas:");
tugas.push({ nama: namaTugas, selesai: false });
localStorage.setItem("tugas", JSON.stringify(tugas));
