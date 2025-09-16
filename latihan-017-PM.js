// Tantangan Praktik Mandiri

/*
Tema: 🚦 Lampu Lalu Lintas Otomatis
Instruksi:
1. Gunakan setInterval() untuk menampilkan:
○ Merah → Kuning → Hijau.
2. Setiap lampu 2 detik.
3. Ulangi 2 kali.
4. Callback tampilkan: "Siklus lampu selesai."
Output:
🚦 Lampu Merah
🚦 Lampu Kuning
🚦 Lampu Hijau
... (ulang 2 kali)
Siklus lampu selesai.

*/
function lampuLaluLintas(siklus, callback) {
  let warna = ["🚦 Lampu Merah", "🚦 Lampu Kuning", "🚦 Lampu Hijau"];
  let hitung = 0;
  let interval = setInterval(() => {
    console.log(warna[hitung % 3]);
    hitung++;
    if (hitung === warna.length * siklus) {
      clearInterval(interval);
      callback();
    }
  }, 2000);
}

lampuLaluLintas(2, () => {
  console.log("Siklus lampu selesai.");
});
