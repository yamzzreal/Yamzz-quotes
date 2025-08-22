export default function handler(req, res) {
  try {
    const quotes = [
      { q: "Hidup adalah belajar tanpa henti.", a: "Anonim" },
      { q: "Kegagalan adalah kesempatan untuk memulai lagi dengan lebih bijaksana.", a: "Henry Ford" },
      { q: "Kesuksesan tidak datang kepada kamu. Kamu yang harus mencapainya.", a: "Marva Collins" },
      { q: "Bahagia bukan karena segalanya sempurna, tapi karena kamu memilih bersyukur.", a: "Anonim" },
      { q: "Lakukan yang terbaik, hasil akan mengikuti.", a: "Anonim" },
      { q: "Kesuksesan tak datang tiba-tiba, ia lahir dari kesabaran dan usaha yang tak terlihat", a: "google" },
      { q: "Jadikan setiap kegagalan sebagai batu loncatan menuju keberhasilan", a: "Yamzz" },
      { q: "Kegagalan bukan lah akhir dari perjuangan", a: "yamzz" }
    ];

    const random = quotes[Math.floor(Math.random() * quotes.length)];
    res.status(200).json(random);
  } catch (error) {
    console.error("Error in handler:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
}
