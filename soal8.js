const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {

const keuntungan = dataPenjualan.map( e => {
  return ( e.hargaJual - e.hargaBeli ) * e.totalTerjual;
})
const totalKeuntungan = keuntungan.reduce( (previous, current) => previous+current, 0 )

const modal = dataPenjualan.map( e => {
  return ( e.sisaStok + e.totalTerjual ) * e.hargaBeli;
})
const totalModal = modal.reduce( (previous, current) => previous+current, 0)

const persenUntung = ( totalKeuntungan / totalModal ) * 100;

const fixedUntung = persenUntung.toFixed(2);

const penjualanNovel = dataPenjualan.map( e => {
  return e.totalTerjual;
})

const penjualanTerbanyak = Math.max(...penjualanNovel);

const produkBukuTerlaris = dataPenjualan.find ( (value) => value.totalTerjual==penjualanTerbanyak);

const infoPenjualan = {
  'totalKeuntungan' : `Rp.${totalKeuntungan}`,
  'totalModal' : `Rp.${totalModal}`,
  'produkBukuTerlaris' : produkBukuTerlaris.namaProduk,
  'persentaseKeuntungan' : `${fixedUntung}%`,
  'penulisTerlaris' : produkBukuTerlaris.penulis
};

console.log(infoPenjualan);
}

console.log(getInfoPenjualan(dataPenjualanNovel));