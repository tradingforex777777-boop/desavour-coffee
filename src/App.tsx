/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  ArrowRight, 
  Menu, 
  X,
  MessageCircle,
  Quote as QuoteIcon,
  ChevronLeft,
  ChevronRight,
  Clock
} from 'lucide-react';

// --- Types & Data ---

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  category: string;
  description: string;
}

// --- Types & Data ---

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  category: string;
  description: string;
}

const NEWS: NewsItem[] = [
  {
    id: 1,
    title: "Teknologi AI untuk Kualitas Biji Kopi",
    date: "20 April 2026",
    image: "https://i.ibb.co.com/5XdpYjH5/1776845110713-1.png",
    category: "Inovasi",
    description: "Permintaan kopi berkualitas tinggi terus meningkat, terutama di segmen specialty coffee yang menuntut konsistensi rasa dan keaslian produk. Di tengah tren tersebut, kopi peaberry atau kopi lanang yang dikenal lebih langka dan bernilai tinggi masih menghadapi tantangan dalam proses pemisahan yang umumnya dilakukan secara manual. Metode ini bergantung pada pengamatan visual pekerja dan sering kali memakan waktu lama, terutama dalam skala produksi besar. Padahal, ketepatan dalam memilah biji kopi sangat berpengaruh terhadap kualitas akhir dan nilai jual produk. Menjawab persoalan ini, tim peneliti Fakultas Teknologi Pertanian Universitas Gadjah Mada mengembangkan teknologi pemilahan biji kopi berkulitas melalui pendekatan berbasis teknologi artificial intelligence. Riset ini pun sudah dipublikasikan di Journal of Food Measurement and Characterization di Amerika Serikat. Dr. Widiastuti Setyaningsih, S.T.P., M.Sc, selaku ketua tim, mengatakan inovasi teknologi yang dikembangkan ini memanfaatkan kombinasi spektroskopi dan AI. Teknologi ini bekerja dengan cara membaca karakteristik internal biji kopi tanpa perlu merusaknya. Pendekatan ini memungkinkan analisis dilakukan secara cepat sekaligus menjaga kondisi fisik sampel tetap utuh. Dalam praktiknya, teknologi ini mampu mengidentifikasi perbedaan antara peaberry dan non-peaberry secara lebih objektif. Teknologi ini seperti membaca sidik jari kopi dari komposisi kimianya tanpa harus merusak bijinya, tutur Widi. Metode yang digunakan dalam penelitian ini adalah Near Infrared (NIR) Spectroscopy yang dikombinasikan dengan machine learning. Prosesnya dimulai dengan memancarkan cahaya ke biji kopi untuk menghasilkan spektrum yang merepresentasikan kandungan kimia di dalamnya. Spektrum tersebut kemudian dianalisis untuk mengidentifikasi komponen seperti kadar air, lemak, protein, dan senyawa lainnya. Widi berujar data yang dihasilkan menjadi dasar bagi sistem AI untuk mengenali pola khas setiap jenis kopi. “Spektrum itu menyimpan informasi kimia yang menjadi dasar untuk membedakan karakter kopi,” ia menjelaskan. Untuk meningkatkan akurasi, data spektrum yang diperoleh kemudian diolah menggunakan algoritma machine learning seperti Support Vector Machine (SVM), Random Forest, dan Linear Discriminant Analysis. Algoritma ini berfungsi mengenali pola perbedaan antara peaberry dan non-peaberry secara sistematis. Sebelum dianalisis, data terlebih dahulu diproses untuk menghilangkan gangguan dan menonjolkan fitur penting. Langkah ini membantu sistem dalam menghasilkan klasifikasi yang lebih tepat dan konsisten. “AI akan membaca pola dari data tersebut sehingga bisa membedakan dengan akurat antara peaberry dan kopi biasa,” Widi berujar. Keunggulan utama dari metode ini terletak pada kemampuannya melakukan analisis secara cepat, objektif, dan presisi. Proses identifikasi dapat dilakukan tanpa bergantung pada pengamatan visual manusia yang rentan kesalahan. Selain itu, metode ini mampu menjaga kualitas biji kopi karena tidak memerlukan perlakuan yang merusak. Dengan tingkat akurasi yang tinggi, teknologi ini membuka peluang untuk meningkatkan efisiensi dalam proses sortasi. “Dengan pendekatan ini, proses pemisahan bisa dilakukan lebih cepat dan hasilnya lebih konsisten,” katanya. Secara sederhana, perbedaan antara kopi peaberry dan non-peaberry terletak pada jumlah biji dalam satu buah kopi. Pada umumnya, satu buah kopi menghasilkan dua biji yang berbentuk pipih dan saling berhadapan, yang dikenal sebagai kopi reguler atau non-peaberry. Sementara itu, pada kopi peaberry hanya terbentuk satu biji tunggal yang berbentuk bulat akibat proses perkembangan alami di dalam buah. Jumlahnya pun relatif sedikit, hanya sekitar 5–7 persen dari total produksi, sehingga sering dianggap lebih eksklusif. “Peaberry itu kopi lanang, jadi dalam satu buah hanya ada satu biji, bentuknya bulat, berbeda dengan kopi biasa yang keping ganda,” jelasnya. Selama ini, proses pemisahan kopi peaberry masih dilakukan melalui sortir manual yang mengandalkan ketelitian pekerja. Cara ini dinilai kurang efisien ketika harus menangani volume produksi yang besar karena membutuhkan waktu yang panjang. Selain itu, hasil sortir sering kali tidak konsisten karena bergantung pada subjektivitas masing-masing operator. Risiko kesalahan klasifikasi pun cukup tinggi, terutama ketika bentuk biji kopi terlihat mirip satu sama lain. “Selama ini pemisahan masih dilakukan secara manual lewat sortir visual, dan itu sangat bergantung pada subjektivitas pekerja,” ujar Widi. Kesalahan dalam proses sortir dapat berdampak langsung pada kualitas dan nilai ekonomi produk kopi. Menurut Widi, biji kopi non-peaberry yang memiliki bentuk serupa berpotensi masuk ke kelompok peaberry, begitu pula sebaliknya. Kondisi ini menjadi krusial karena jumlah peaberry dalam satu panen relatif sedikit dibandingkan kopi reguler. Dengan proporsi yang hanya sekitar 5–7 persen, peaberry memiliki nilai jual yang lebih tinggi di pasar specialty coffee. Ketidaktepatan dalam pemisahan inilah dapat menyebabkan potensi kerugian bagi produsen. “Kalau proses pemisahannya tidak optimal, nilai premium dari peaberry bisa hilang begitu saja,” jelasnya. Penerapan teknologi ini berpotensi membawa perubahan signifikan dalam industri kopi. Proses sortasi yang sebelumnya dilakukan secara manual dapat beralih menjadi otomatis dengan bantuan sistem berbasis data. Hal ini memungkinkan peningkatan efisiensi produksi sekaligus menjaga standar kualitas yang lebih stabil. Bagi industri specialty coffee, konsistensi kualitas menjadi faktor penting dalam menjaga kepercayaan konsumen. “Kalau kualitasnya konsisten, tentu akan lebih mudah menjaga standar kopi specialty,” ungkap Widi. Selain berdampak pada aspek teknis, teknologi ini juga memiliki implikasi ekonomi yang cukup besar. Peaberry sebagai produk premium memiliki nilai jual lebih tinggi dibandingkan kopi biasa. Dengan proses sortasi yang lebih akurat, potensi peningkatan nilai produk menjadi semakin besar. Hal ini, menurut Widi, dapat memperkuat daya saing kopi Indonesia di pasar global. “Nilai jual kopi bisa meningkat karena kualitasnya lebih terjamin dan terklasifikasi dengan baik,” jelasnya. Ke depan, teknologi ini dinilai memiliki peluang besar untuk diterapkan secara luas di sektor agroindustri. Sistem ini dapat diintegrasikan dengan mesin sortasi otomatis yang digunakan di pabrik maupun di tingkat petani. Bahkan, pengembangan alat yang lebih ringkas dan portabel memungkinkan penggunaannya langsung di lapangan. Inovasi ini mendukung transformasi digital dalam industri kopi yang semakin berbasis data. “Teknologi ini bisa dikembangkan jadi sistem yang terintegrasi, bahkan sampai ke level petani,” kata Widi. Meski demikian, terdapat sejumlah tantangan yang perlu diperhatikan dalam implementasinya. Investasi awal untuk pengadaan alat dan infrastruktur masih menjadi pertimbangan utama bagi pelaku industri. Selain itu, diperlukan pengembangan basis data yang lebih besar agar model yang dihasilkan semakin kuat dan adaptif. Kesenjangan antara hasil riset di perguruan tinggi dan penerapannya di industri juga menjadi tantangan tersendiri. “Harapannya riset ini tidak berhenti di publikasi, tapi benar-benar bisa diadopsi dan dimanfaatkan oleh industri,” pungkasnya. Sumber https://ugm.ac.id/id/berita/peneliti-ugm-kembangkan-metode-pemilahan-kopi-lanang-dalam-hitungan-detik/"
  },
  {
    id: 2,
    title: "Harga Kopi Global Turun, Sinyal Awal Surplus Pasokan 2026",
    date: "20 April 2026",
    image: "https://i.ibb.co.com/vv3jwwFd/1776845510155-1.png",
    category: "Pasar Global",
    description: "Harga kopi global turun akibat surplus pasokan yang diprediksi mencapai puncaknya pada 2026, didorong oleh produksi besar dari Brasil dan Vietnam. Meski konsumsi melambat, tekanan harga berlanjut. Harga kopi global mulai menunjukkan tren pelemahan seiring meredanya gangguan pasokan akibat faktor geopolitik, sekaligus memunculkan kembali risiko kelebihan suplai yang berpotensi menekan harga dalam jangka menengah. Dilansir Barchart, harga kopi arabika kontrak Mei tercatat turun 2,41% pada Jumat, sementara robusta melemah 2,48%. Koreksi ini terjadi setelah Iran membuka kembali Selat Hormuz, sehingga meredakan kekhawatiran gangguan distribusi global dan menurunkan premi risiko pada harga komoditas. Pergerakan tersebut menegaskan bahwa faktor geopolitik masih menjadi pendorong volatilitas jangka pendek. Namun, tekanan yang lebih fundamental kini berasal dari sisi pasokan global yang mulai longgar. Ekspektasi panen besar dari Brasil menjadi faktor utama yang menekan harga. Proyeksi Marex Group memperkirakan produksi kopi Brasil musim 2026/2027 mencapai 75,9 juta karung, sementara StoneX memperkirakan 75,3 juta karung, keduanya mengindikasikan rekor baru produksi. Kondisi ini mendorong proyeksi surplus kopi global 2026 mencapai 10 juta karung, melonjak signifikan dari 1,8 juta karung pada 2025 dan menjadi yang terbesar dalam enam tahun terakhir. Dari sisi lain, Vietnam sebagai produsen robusta terbesar dunia turut memperkuat tekanan suplai. Ekspor kopi Vietnam periode Januari—Maret 2026 meningkat 14% secara tahunan menjadi 585.000 ton, dengan produksi 2025/2026 diproyeksikan mencapai 1,76 juta ton, tertinggi dalam empat tahun. Lonjakan produksi dari dua negara tersebut memperkuat tren pelemahan harga, terutama di tengah pertumbuhan konsumsi global yang mulai melambat. Ketua Kompartemen Industri Hilir Asosiasi Eksportir Kopi Indonesia Moelyono Soesilo menilai tren penurunan harga masih akan berlanjut. “Harga kopi trennya akan menurun karena terjadi oversupply atau surplus produksi kopi dunia di tahun 2026/2027,” ujarnya kepada Bisnis, dikutip Minggu (19/4/2026). Dia menjelaskan, meskipun konsumsi global masih tumbuh, lajunya cenderung melambat akibat harga yang sempat tinggi serta kondisi ekonomi global yang belum stabil. Perubahan ini mendorong pergeseran pola konsumsi, terutama di negara maju. Kondisi tersebut mendorong perubahan pola konsumsi, terutama di negara maju. Data Asosiasi Kopi Nasional AS menunjukkan 85% konsumsi kopi dilakukan di rumah, tertinggi sejak 2012, mencerminkan penurunan konsumsi di luar rumah yang biasanya memiliki margin lebih tinggi. Selain itu, segmen konsumen menengah ke bawah mulai beralih ke minuman alternatif akibat harga kopi yang relatif mahal sebelumnya. Meski demikian, tekanan harga tidak sepenuhnya bersifat linear. Sejumlah faktor masih berpotensi menahan penurunan lebih dalam. Dari sisi pasokan jangka pendek, ekspor kopi Brasil justru mengalami kontraksi. Data Cecafe menunjukkan ekspor kopi hijau Brasil pada Maret turun, sementara laporan Kementerian Perdagangan Brasil mencatat penurunan hingga 31% secara tahunan. Faktor cuaca juga menjadi variabel penting. Curah hujan di wilayah Minas Gerais, sentra produksi arabika Brasil, hanya mencapai sekitar 20% dari rata-rata historis. Kondisi ini berpotensi menekan produktivitas dan menahan pelemahan harga lebih lanjut. Di sisi lain, pasar robusta masih mendapat dukungan dari ketatnya persediaan. Stok robusta ICE tercatat berada di level terendah dalam lebih dari satu tahun, mencerminkan ketidakseimbangan pasokan jangka pendek. Penguatan Dolar AS Turut Tekan Harga Kopi Tekanan tambahan datang dari faktor makro, khususnya penguatan dolar AS yang mendorong aksi jual di pasar berjangka dan mengurangi daya tarik komoditas bagi investor global. Sejumlah analis memperkirakan harga kopi masih memiliki ruang penurunan. Namun, struktur permintaan yang relatif stabil membuat risiko penurunan ekstrem dinilai terbatas dibandingkan komoditas lain. Bagi Indonesia, dinamika ini menghadirkan tantangan sekaligus peluang. Dari sisi pasar, ekspor masih bertumpu pada negara tujuan utama seperti Amerika Serikat, Jerman, Malaysia, Mesir, dan India. Namun, dari sisi daya saing, Indonesia masih tertinggal dalam volume produksi dibanding Brasil dan Vietnam, tetapi tetap kompetitif dari sisi harga. “Secara volume masih jauh tertinggal, tetapi untuk harga masih bisa bersaing,” kata Moelyono. Dengan demikian, penurunan harga kopi saat ini tidak hanya mencerminkan normalisasi pasca-geopolitik, tetapi juga menandai pergeseran siklus pasar menuju fase surplus.  Tanpa gangguan signifikan dari faktor cuaca atau logistik, tekanan harga berpotensi berlanjut meski tidak dalam skala ekstrem. Sumber https://ekonomi.bisnis.com/read/20260420/12/1967785/harga-kopi-global-turun-sinyal-awal-surplus-pasokan-2026"
  },
  {
    id: 3,
    title: "Era Label Kopi Regeneratif",
    date: "20 April 2026",
    image: "https://i.ibb.co.com/qL9q6xc6/1776845764743-1.png",
    category: "Tren Konsumen 2026",
    description: "MULAI tahun 2026, ngopi nggak lagi cuma soal rasa. Produk kopi di rak supermarket bakal punya label baru, Regeneratif. Label ini bukan sekadar tempelan, tapi penanda kalau kopi yang kamu beli berasal dari kebun yang berkomitmen menjaga bumi dan bikin hidup petaninya lebih sejahtera. Krisis iklim sudah bikin banyak kebun kopi megap-megap. Hujan tak menentu, suhu makin panas, panen jadi nggak pasti. Padahal, lebih dari 70 persen kopi dunia ditanam sama petani kecil. Kalau mereka kolaps, dunia bisa krisis kafein beneran. Rainforest Alliance, organisasi internasional yang concern sama keberlanjutan, akhirnya turun tangan. Mereka meluncurkan Standar Pertanian Regeneratif, semacam panduan plus sertifikasi baru buat petani kopi dan perusahaan. Tujuannya? Biar pertanian kopi nggak cuma bertahan, tapi juga memulihkan ekosistem. Ngopi dengan Nilai Tambah Kalau selama ini kita sering dengar kopi fair trade atau organic, sekarang ada level lanjutannya, kopi regeneratif. Bedanya, model ini nggak cuma “nggak merusak”, tapi aktif memperbaiki. Misalnya, memperkaya tanah, menjaga air, melindungi keanekaragaman hayati, sampai bikin kebun lebih tahan sama cuaca ekstrem. Biji kopi hasil panen petani ditata berbentuk hati. Label ‘Regeneratif’ memberi makna baru: ngopi sambil mendukung bumi dan kesejahteraan petani. Foto: Antoni Shkraba Studio/ Pexels. Buat kamu sebagai konsumen, label regeneratif ini artinya lebih simpel. Setiap tegukan kopi ikut menyumbang buat alam dan orang-orang di baliknya. Jadi, ngopi bisa makin enak karena ada rasa peduli di dalamnya. Indonesia Punya Peran Besar Sebagai salah satu produsen kopi terbesar dunia, Indonesia jelas punya peluang besar. Dari Aceh sampai Toraja, kopi Nusantara terkenal punya rasa khas. Dengan sertifikasi regeneratif, kopi lokal bisa makin laku di pasar global yang makin peduli isu lingkungan. Selain itu, gerakan ini juga bisa bikin cerita kopi kita makin kuat. Bayangin aja, minum kopi Gayo atau Toraja sambil tahu kalau itu hasil kebun yang ramah alam sekaligus mendukung kesejahteraan petani. Label regeneratif bukan cuma tren sesaat. Ini arah baru buat industri kopi global. Konsumen makin kritis, perusahaan makin dituntut tanggung jawab, dan bumi makin butuh solusi. Kopi regeneratif hadir di titik pertemuan itu semua. Jadi, siap-siap. Tahun 2026 nanti, ngopi nggak cuma soal gaya hidup, tapi juga soal pilihan masa depan. Sumber https://mulamula.id/mulai-2026-ada-kopi-dengan-label-regeneratif-apa-artinya/"
  }
];

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1920"
];

const GALLERY_IMAGES = [  
  "https://i.ibb.co.com/cVfZ9tM/IMG-20260422-015136-jpg.jpg",
  "https://i.ibb.co.com/SDnr7dSD/IMG-20260422-015202-jpg.jpg",
  "https://i.ibb.co.com/BVdnHwzV/IMG-20260422-015226-jpg.jpg",
  "https://i.ibb.co.com/h00b0Dn/IMG-20260422-015249-jpg.jpg",
  "https://i.ibb.co.com/4nchLqZB/IMG-20260422-015310-jpg.jpg",
  "https://i.ibb.co.com/pr5gyBJK/Whats-App-Image-2026-04-22-at-03-26-54-1.jpg",
  "https://i.ibb.co.com/v4BWcGBL/Whats-App-Image-2026-04-22-at-03-26-54.jpg",
  "https://i.ibb.co.com/tWHmdC6/Whats-App-Image-2026-04-22-at-03-26-55.jpg",
  "https://i.ibb.co.com/W4JCMnfW/Whats-App-Image-2026-04-22-at-03-26-56-1.jpg",
  "https://i.ibb.co.com/B5v6X1c3/Whats-App-Image-2026-04-22-at-03-26-56-2.jpg",
  "https://i.ibb.co.com/nGpGz0q/Whats-App-Image-2026-04-22-at-03-26-56-3.jpg",
  "https://i.ibb.co.com/hRzQm7JX/Whats-App-Image-2026-04-22-at-03-26-56-4.jpg",
  "https://i.ibb.co.com/V0C7Yv1s/Whats-App-Image-2026-04-22-at-03-26-56.jpg",
  "https://i.ibb.co.com/zTdJ57Zq/Whats-App-Image-2026-04-22-at-03-26-57-1.jpg",
  "https://i.ibb.co.com/spMVqhSq/Whats-App-Image-2026-04-22-at-03-26-57.jpg"
]; 

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-coffee-dark/95 backdrop-blur-md border-b border-coffee-tan/10 shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <img 
            src="https://iili.io/BSHHbMx.png" 
            alt="De' Savour Coffee Logo" 
            className="h-8 w-auto"
            referrerPolicy="no-referrer"
          />
          <span className="font-display font-bold text-xl tracking-tight text-coffee-cream">
            DE' SAVOUR COFFEE
          </span>
        </a>
        
        {/* Simple Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-coffee-cream/80">
          <a href="#about" className="hover:text-coffee-tan transition-colors">Tentang</a>          
          <a href="#gallery" className="hover:text-coffee-tan transition-colors">Galeri</a>
          <a href="#news" className="hover:text-coffee-tan transition-colors">Berita</a>
          <a href="#contact" className="hover:text-coffee-tan transition-colors">Kontak</a>          
        </div>
        
        {/* Mobile Menu Button icon */}
        <button 
          className="md:hidden text-coffee-cream" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Simplified Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-coffee-dark border-b border-coffee-tan/10 flex flex-col items-center py-10 gap-6 md:hidden z-50"
            >
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-coffee-cream hover:text-coffee-tan transition-colors uppercase tracking-widest text-sm font-bold">Tentang</a>
              <a href="#news" onClick={() => setIsMobileMenuOpen(false)} className="text-coffee-cream hover:text-coffee-tan transition-colors uppercase tracking-widest text-sm font-bold">Berita</a>
              <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-coffee-cream hover:text-coffee-tan transition-colors uppercase tracking-widest text-sm font-bold">Galeri</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-coffee-cream hover:text-coffee-tan transition-colors uppercase tracking-widest text-sm font-bold">Kontak</a>              
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};


const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={HERO_IMAGES[currentImage]} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 text-center text-coffee-cream px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="text-xs uppercase tracking-[0.5em] text-coffee-tan mb-6 block font-semibold opacity-80">Tambun, Kota Bekasi</span>
          <h1 className="font-display font-bold text-6xl md:text-9xl mb-4 tracking-tighter uppercase leading-none">
            De' Savour <span className="italic font-normal">Coffee</span>
          </h1>
          <p className="font-serif italic text-2xl md:text-3xl mb-12 text-coffee-tan opacity-90">
            "Unleash Your Time"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#about" className="bg-coffee-tan text-black px-10 py-3 rounded-sm font-sans font-bold uppercase tracking-widest hover:bg-coffee-cream transition-all duration-500 inline-block text-sm">
              Selengkapnya
            </a>
            <a href="#contact" className="bg-transparent border border-coffee-tan/40 text-coffee-cream px-10 py-3 rounded-sm font-sans font-bold uppercase tracking-widest hover:border-coffee-tan transition-all duration-500 inline-block text-sm">
              Hubungi Kami
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-coffee-cream/60"
      >
        <div className="w-[1px] h-12 bg-current mx-auto" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-coffee-dark overflow-hidden border-t border-coffee-tan/10">
      <div className="max-w-7xl mx-auto px-6 text-coffee-cream">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden border border-coffee-tan/20">
              <img 
                src="https://i.ibb.co.com/WWGgYdbC/IMG-20260422-015002-jpg.jpg"
                alt="Cafe history" 
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <span className="text-xs uppercase tracking-widest text-coffee-tan mb-4 block font-semibold border-b border-coffee-tan/20 pb-2 w-fit">Tentang Kami</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-8 leading-tight uppercase">
              Oasis Di Jantung <span className="italic font-normal">Bekasi</span>
            </h2>
            
            <div className="space-y-8 text-coffee-cream opacity-80 font-sans leading-relaxed text-lg">
              <p>
                Lahir di jantung Tambun Bekasi pada tanggal 17 Agustus 2024, De' Savour Coffee adalah manifesto bagi pecinta kopi yang menghargai waktu dan rasa. Kami hadir bukan sekadar kafe, melainkan ruang di mana setiap detik Anda dihargai.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-4">
                <div className="glass p-6 rounded-sm">
                  <h3 className="font-display font-bold text-coffee-tan uppercase text-xs tracking-widest mb-3">Visi</h3>
                  <p className="text-sm italic font-serif leading-relaxed">
                    Menjadi destinasi kopi utama yang melampaui sekadar rasa, menginspirasi kenyamanan bagi komunitas modern.
                  </p>
                </div>
                <div className="glass p-6 rounded-sm">
                  <h3 className="font-display font-bold text-coffee-tan uppercase text-xs tracking-widest mb-3">Misi</h3>
                  <ul className="text-xs flex flex-col gap-2">
                    <li className="flex gap-2"><ArrowRight size={14} className="text-coffee-tan shrink-0" /> Dedikasi pada kualitas biji lokal pilihan.</li>
                    <li className="flex gap-2"><ArrowRight size={14} className="text-coffee-tan shrink-0" /> Kenyamanan di setiap detik waktu Anda.</li>
                    <li className="flex gap-2"><ArrowRight size={14} className="text-coffee-tan shrink-0" /> Pelayanan yang personal dan hangat.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Quote = () => (
  <section className="py-32 bg-coffee-medium text-coffee-cream relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-coffee-cream">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <QuoteIcon className="mx-auto mb-10 text-coffee-tan/20" size={50} />
        <p className="font-serif italic text-3xl md:text-5xl leading-tight mb-8">
          "Kopi terbaik adalah yang dinikmati perlahan, saat waktu terasa berhenti sejenak."
        </p>
        <p className="font-serif italic text-2xl md:text-4xl leading-tight mb-7">
          "De' Savour Coffee."
        </p>
        <div className="w-12 h-[1px] bg-coffee-tan/30 mx-auto" />
      </motion.div>
    </div>
  </section>
);

const Description = () => (
  <section className="py-24 bg-coffee-dark text-coffee-cream">
    <div className="max-w-7xl mx-auto px-6 text-coffee-cream">
      <div className="flex flex-col md:flex-row items-center gap-20">
        <div className="md:w-5/12">
          <span className="text-xs uppercase tracking-widest text-coffee-tan mb-4 block font-semibold">Cita Rasa</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 uppercase leading-tight">
            Presisi Dalam <span className="italic font-normal">Setiap Tetes</span>
          </h2>
          <p className="text-coffee-cream/70 text-lg font-sans leading-relaxed">
            Kopi yang sempurna bukanlah sebuah kebetulan. Ia adalah hasil dari perhitungan matematis yang harmonis antara suhu air, ukuran gilingan, dan waktu kontak. Di De' Savour Coffee, kami tidak sekadar menyeduh. Kami percaya bahwa keajaiban rasa tersembunyi dalam kesempurnaan sejati hadir melalui Presisi Dalam Setiap Tetes.
          </p>          
        </div>
        <div className="md:w-7/12 grid grid-cols-12 gap-4">
          <div className="col-span-7 aspect-[4/5] rounded-sm overflow-hidden mt-12 border border-coffee-tan/10">            
            <img src="https://i.ibb.co.com/5WFWfcXC/a-cup-of-hot-coffee-with-latte-art-on-the-surface-with-the-leather-book-on-the-wooden-table-free-pho.jpg" alt="Drip" className="w-full h-full object-cover grayscale-[20%]" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-5 aspect-[4/6] rounded-sm overflow-hidden border border-coffee-tan/10">            
            <img src="https://i.ibb.co.com/dstG1mWq/5f74dd72633eb.jpg" alt="Latte Art" className="w-full h-full object-cover grayscale-[20%]" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const News = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  return (
    <section id="news" className="py-24 bg-coffee-dark text-coffee-cream border-t border-coffee-tan/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-16 px-2">
          <div>
            <span className="text-xs uppercase tracking-widest text-coffee-tan mb-4 block font-semibold">Warta Terkini</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter">
              Jurnal <span className="italic font-normal">Kopi</span>
            </h2>
          </div>
          <button className="hidden sm:block text-coffee-tan font-sans font-bold text-[10px] tracking-[0.2em] uppercase hover:text-coffee-cream transition-colors border-b border-coffee-tan/20 pb-1">
            Lihat Arsip
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {NEWS.map((item, idx) => {
            const isExpanded = expandedItems.includes(item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col group cursor-pointer"
                onClick={() => toggleExpand(item.id)}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 border border-coffee-tan/10 group-hover:border-coffee-tan/30 transition-colors duration-500">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] grayscale-[20%] group-hover:grayscale-0 shadow-2xl" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-coffee-dark/80 backdrop-blur-md px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-coffee-tan border border-coffee-tan/20">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 px-2">
                  <span className="text-[9px] uppercase tracking-[0.2em] opacity-40 font-bold">{item.date}</span>
                  <h3 className="font-display font-bold text-2xl group-hover:text-coffee-tan transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className={`text-coffee-cream/50 font-sans leading-relaxed text-xs transition-all duration-500 ${isExpanded ? '' : 'line-clamp-3'}`}>
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-coffee-tan text-[9px] uppercase font-bold tracking-[0.2em] mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                    {isExpanded ? 'Tutup' : 'Baca Selengkapnya'} 
                    <ArrowRight size={12} className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const GallerySlider = () => {
  return (
    <section id="gallery" className="py-24 bg-coffee-dark overflow-hidden text-coffee-cream border-y border-coffee-tan/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-coffee-tan mb-4 block font-semibold opacity-60">Visual Experience</span>
        <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tight">
          Galeri <span className="italic font-normal">Momen</span>
        </h2>
      </div>
      
      <div className="flex flex-col gap-8 opacity-80">
        {/* Row 1: Right to Left */}
        <div className="flex whitespace-nowrap overflow-hidden group">
          <div className="flex animate-marquee-slow gap-8 group-hover:[animation-play-state:paused]">
            {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
              <div 
                key={i}
                className="w-[300px] md:w-[450px] aspect-[4/3] rounded-sm overflow-hidden border border-coffee-tan/10 grayscale-[40%] hover:grayscale-0 transition-all duration-700"
              >
                <img src={img} alt={`Gallery-A-${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex whitespace-nowrap overflow-hidden group">
          <div className="flex animate-marquee-reverse-slow gap-8 group-hover:[animation-play-state:paused]">
            {[...GALLERY_IMAGES.reverse(), ...GALLERY_IMAGES].map((img, i) => (
              <div 
                key={i}
                className="w-[300px] md:w-[450px] aspect-[16/10] rounded-sm overflow-hidden border border-coffee-tan/10 grayscale-[40%] hover:grayscale-0 transition-all duration-700"
              >
                <img src={img} alt={`Gallery-B-${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-coffee-dark text-coffee-cream border-t border-coffee-tan/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-widest text-coffee-tan mb-4 block font-semibold border-b border-coffee-tan/20 pb-2 w-fit">Hubungi Kami</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase mb-12">
              Kunjungi <span className="italic font-normal">Kami</span>
            </h2>
            
            <div className="space-y-10">
              <div className="flex gap-5">
                <div className="w-12 h-12 shrink-0 rounded-sm glass flex items-center justify-center text-coffee-tan border border-coffee-tan/20">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-display font-bold uppercase text-[10px] tracking-widest opacity-40 mb-1">Alamat</p>
                  <p className="text-lg font-sans font-medium max-w-sm">
                    Perum Papan Mas Indah Blok F28 No.2, Setiamekar, Kec. Tambun Sel., Kabupaten Bekasi, Jawa Barat 17510
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 shrink-0 rounded-sm glass flex items-center justify-center text-coffee-tan border border-coffee-tan/20">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="font-display font-bold uppercase text-[10px] tracking-widest opacity-40 mb-1">Operasional</p>
                  <p className="text-lg font-sans font-medium">16:00 - 01:00 (DAILY)</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-sm glass flex items-center justify-center text-coffee-tan border border-coffee-tan/20">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-display font-bold uppercase text-[10px] tracking-widest opacity-40 mb-1">Telepon</p>
                    <p className="text-sm font-sans font-medium">+6282312451989</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-sm glass flex items-center justify-center text-coffee-tan border border-coffee-tan/20">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-display font-bold uppercase text-[10px] tracking-widest opacity-40 mb-1">Email</p>
                    <p className="text-sm font-sans font-medium">de.savour.official@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href="https://wa.me/6282312451989" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-coffee-tan text-black px-10 py-3 rounded-sm font-sans font-bold uppercase tracking-widest hover:bg-coffee-cream transition-all duration-500 text-sm"
                >
                  <MessageCircle size={20} fill="black" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative min-h-[400px] overflow-hidden rounded-sm shadow-2xl border border-coffee-tan/20 shadow-black/60"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.113263278836!2d107.0510248!3d-6.248803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698fd86119def3%3A0x969f48396dbb5757!2sDe%20Savour%20Coffee!5e0!3m2!1sid!2sid!4v1776706402876!5m2!1sid!2sid"
              className="w-full h-full absolute inset-0 border-0 invert grayscale opacity-80"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 bg-coffee-dark text-coffee-cream border-t border-coffee-tan/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 pb-16 border-b border-coffee-tan/10">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <img 
              src="https://iili.io/BSHHbMx.png" 
              alt="De' Savour Coffee Logo" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="font-display font-bold text-2xl tracking-tighter">DE' SAVOUR COFFEE</span>
          </div>
          <p className="font-serif italic text-lg opacity-60">"Unleash Your Time"</p>
        </div>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/de_savour_coffee/" className="w-10 h-10 rounded-sm border border-coffee-tan/20 flex items-center justify-center hover:bg-coffee-tan hover:text-black transition-all duration-500">
            <Instagram size={18} />
          </a>
          <a href="https://www.facebook.com/desavourcoffee" className="w-10 h-10 rounded-sm border border-coffee-tan/20 flex items-center justify-center hover:bg-coffee-tan hover:text-black transition-all duration-500">
            <Facebook size={18} />
          </a>
          <a href="https://www.tiktok.com/@de_savour_coffee/" className="w-10 h-10 rounded-sm border border-coffee-tan/20 flex items-center justify-center hover:bg-coffee-tan hover:text-black transition-all duration-500">
            <img 
              src="https://i.ibb.co.com/j9T0GLG1/tik-tok.png"
              alt="icon tiktok"               
              size={18} />
          </a>
        </div>
      </div>
      <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] opacity-30 font-sans uppercase tracking-[0.4em] font-semibold">
        <p>&copy; 2026 DE' SAVOUR COFFEE COMPANY. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-10">
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <main className="font-sans bg-coffee-dark text-coffee-cream selection:bg-coffee-tan selection:text-black">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <Quote />
        <Description />        
        <GallerySlider />
        <News />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
