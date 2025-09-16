// Contoh kode synchronous
console.log("\nContoh kode synchronous:");
console.log("Mulai tugas sinkron");
for (let i = 1; i <= 3; i++) {
  // Simulasi pekerjaan singkat
  console.log(`Proses sinkron ${i}`);
}
console.log("Selesai tugas sinkron");

// Buat bebera versi asynchronous dari kode synchronous diatas

// 1. Versi Asynchronous (parallel) --> setTimeOut
console.log("\n1. Versi Asynchronous (parallel):");
console.log("Mulai tugas asinkron");
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(`Proses asinkron (parallel) ${i}`);
  }, 2000);
}
console.log("Selesai tugas asinkron parallel");

// 2. Versi Asynchronous Berurutan dengan setTimeout (delay bertahap)
console.log(
  "\n2. Versi Asynchronous Berurutan dengan setTimeout (delay bertahap)"
);
console.log("Mulai tugas asinkron (berurutan)");
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(`Proses asinkron berurutan ${i}`);
  }, i * 1000);
}
console.log("Selesai tugas asinkron berurutan");
