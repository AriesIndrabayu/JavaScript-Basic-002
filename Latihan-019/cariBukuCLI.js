const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function cariBuku(keyword) {
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort(); // hentikan fetch
  }, 5000);

  try {
    let response = await fetch(
      `https://openlibrary.org/search.json?q=${keyword}`,
      { signal: controller.signal }
    );
    clearTimeout(timeout);

    let data = await response.json();

    if (data.docs.length > 0) {
      console.log(`📚 Hasil pencarian: ${keyword}`);
      data.docs.slice(0, 5).forEach((buku, i) => {
        console.log(
          `${i + 1}. ${buku.title} - ${
            buku.author_name ? buku.author_name[0] : "Penulis tidak diketahui"
          }`
        );
      });
    } else {
      console.log("Buku tidak ditemukan");
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

rl.question("Masukkan kata kunci pencarian buku: ", function (keyword) {
  cariBuku(keyword);
});
