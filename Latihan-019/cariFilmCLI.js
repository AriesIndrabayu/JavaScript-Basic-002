const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function cariFilm(keyword) {
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort(); // hentikan fetch
  }, 5000);

  try {
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=9324ac66&s=${keyword}`,
      { signal: controller.signal }
    );
    clearTimeout(timeout);

    let data = await response.json();

    if (data.Search && data.Search.length > 0) {
      console.log(`📚 Hasil pencarian: ${keyword}`);
      data.Search.slice(0, 5).forEach((film, i) => {
        console.log(`${i + 1}. ${film.Title} - ${film.Year ? film.Year : "-"}`);
      });
    } else {
      console.log("film tidak ditemukan");
    }
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("❌ request terlalu lama, dibatalkan.");
    } else {
      console.error("Terjadi error:", error);
    }
  } finally {
    rl.close();
  }
}

rl.question("Masukkan kata kunci pencarian film: ", function (keyword) {
  cariFilm(keyword);
});
