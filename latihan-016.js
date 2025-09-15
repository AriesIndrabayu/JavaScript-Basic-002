// Object -> JSON
let siswa = { nama: "Cecep", usia: 18, hobi: ["ngoding", "membaca", "gaming"] };
let jsonData = JSON.stringify(siswa);

console.log(siswa);
console.log(jsonData);

/*
contoh kirim data dalam bentuk JSON ke server lewat fetch
fetch("/api/siswa"),
  {
    method: "POST",
    Headers: { "Content-Type": "application/json" },
    body: jsonData,
  };
*/

// JSON -> Object
// mendapatkan data siswa dari server
/*
fetch("/api/siswa/1")
    .then(res => res.json()) // otomatis JSON.parse
    .then(data =>{
        console.log(data.nama)
        })
*/
let data = '{"nama":"Cecep","usia":18}';
let obj = JSON.parse(data);
console.log(obj.nama);

// contoh local storage
// 1. Menyimpan data
localStorage.setItem("nama", "Wisesa");
localStorage.setItem("user", JSON.stringify(siswa));
localStorage.setItem("hobi", JSON.stringify(siswa.hobi));

// 2. Mengambil data
// const nama = localStorage.getItem("nama");
console.log(localStorage.getItem("nama"));
console.log(localStorage.getItem("user"));
console.log(localStorage.getItem("hobi"));

// 3. Menghapus data
localStorage.removeItem("nama"); // menghapus 1 item
localStorage.clear(); // menghapus semua data

// 4 Mendapatkan key berdasarkan index
console.log(localStorage.key(0));
