// versi sederhana
/*
fetch("https://jsonplaceholder.typicode.com/users/2")
  .then((response) => response.json())
  .then((data) => {
    console.log("Nama:", data.name);
    console.log("Email:", data.email);
  })
  .catch((error) => console.error("Error:", error));
*/

//   versi async/await
/*

async function ambilUser() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/10");
    let data = await response.json();
    console.log("Nama:", data.name);
    console.log("Kota:", data.address.city);
  } catch (error) {
    console.error("Terjadi error:", error);
  }
}
ambilUser();
*/

// Menampilkan daftar pengguna
/*
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    console.log("📋 Daftar Pengguna:");
    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.name} -
${user.email}`);
    });
  })
  .catch((error) => console.error("Error:", error));
*/

// Tantangan Praktik Mandiri
// Tema: 🎬 Aplikasi Pencarian Film
async function cariFilm(keyword) {
  const url = `https://www.omdbapi.com/?apikey=268e611c&s=${keyword}`;
  try {
    let response = await fetch(url);
    let data = await response.json();
    if (data.Search) {
      data.Search.forEach((film, i) => {
        console.log(`${i + 1}. ${film.Title} ${film.Year}`);
      });
    } else {
      console.log("Film tidak ditemukan...");
    }
  } catch (error) {
    console.error("Terjadi error:", error);
  }
}

cariFilm("lord of the ring");
