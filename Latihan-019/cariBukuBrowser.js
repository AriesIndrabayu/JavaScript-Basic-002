async function cariBuku(keyword) {
  try {
    let response = await fetch(
      `https://openlibrary.org/search.json?q=${keyword}`
    );
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
    console.error("Terjadi error:", error);
  }
}

cariBuku("python");
