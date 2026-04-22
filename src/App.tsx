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

const NEWS: NewsItem[] = [
  {
    id: 1,
    title: "Inovasi Teknologi AI untuk Kualitas Biji Kopi",
    date: "15 Januari 2026",
    image: "https://i.ibb.co.com/LMp20s6/1776845110713.png",
    category: "Teknologi",
    description: "Kalau berencana melancong ke Sumatera Selatan, luangkan waktu untuk berkunjung ke SMKN 1 Jarai untuk melihat proses pengolahan kopi dengan AI. Kalau biasanya hanya minum kopi di kafe, di SMKN 1 Jarai Lahat, Sumatera Selatan, Anda bisa menyaksikan langsung bagaimana biji kopi dijemur dengan kecerdasan buatan. ​Di balik sejuknya lereng Bukit Barisan yang dikenal sebagai penghasil kopi robusta unggulan di Sumatera Selatan, kini hadir inovasi yang menyatukan teknologi mutakhir dan tradisi pertanian rakyat. Salah satunya adalah Smart Solar Dryer, alat penjemur kopi pintar berbasis AI dan IoT yang jadi daya tarik baru bagi wisatawan pencinta kopi.Dikembangkan oleh tim dari Politeknik Negeri Sriwijaya melalui Program Katalis Kemitraan Berdikari yang didanai LPDP, alat ini dirancang oleh Ade Silvia Handayani, dosen elektro yang juga aktif menggandeng sekolah kejuruan di wilayah Jarai. Biasanya, penjemuran kopi dilakukan di halaman rumah atau di pinggir jalan. Sayangnya, cara itu rentan kontaminasi debu, hujan, bahkan dilindas kendaraan. Kini, dengan adanya inovasi Smart Solar Dryer, wisatawan bisa melihat proses penjemuran kopi di dalam greenhouse kecil berukuran 3 x 3 meter yang sepenuhnya tertutup dan dikendalikan oleh sistem digital. Sumber https://www.tempo.co/gaya-hidup/menjemur-kopi-dengan-ai-di-lereng-bukit-barisan-1725454"
  },
  {
    id: 2,
    title: "Harga Kopi Mulai Stabil Setelah Guncangan Pasar Global",
    date: "10 Januari 2026",
    image: "https://i.ibb.co.com/PGP5FQzZ/1776845510155.png",
    category: "Berita",
    description: "Harga kopi global mulai menunjukkan tren pelemahan seiring meredanya gangguan pasokan akibat faktor geopolitik, sekaligus memunculkan kembali risiko kelebihan suplai yang berpotensi menekan harga dalam jangka menengah. Dilansir Barchart, harga kopi arabika kontrak Mei tercatat turun 2,41% pada Jumat, sementara robusta melemah 2,48%. Koreksi ini terjadi setelah Iran membuka kembali Selat Hormuz, sehingga meredakan kekhawatiran gangguan distribusi global dan menurunkan premi risiko pada harga komoditas. Pergerakan tersebut menegaskan bahwa faktor geopolitik masih menjadi pendorong volatilitas jangka pendek. Namun, tekanan yang lebih fundamental kini berasal dari sisi pasokan global yang mulai longgar. Ekspektasi panen besar dari Brasil menjadi faktor utama yang menekan harga. Proyeksi Marex Group memperkirakan produksi kopi Brasil musim 2026/2027 mencapai 75,9 juta karung, sementara StoneX memperkirakan 75,3 juta karung, keduanya mengindikasikan rekor baru produksi. Kondisi ini mendorong proyeksi surplus kopi global 2026 mencapai 10 juta karung, melonjak signifikan dari 1,8 juta karung pada 2025 dan menjadi yang terbesar dalam enam tahun terakhir. Dari sisi lain, Vietnam sebagai produsen robusta terbesar dunia turut memperkuat tekanan suplai. Ekspor kopi Vietnam periode Januari—Maret 2026 meningkat 14% secara tahunan menjadi 585.000 ton, dengan produksi 2025/2026 diproyeksikan mencapai 1,76 juta ton, tertinggi dalam empat tahun. Lonjakan produksi dari dua negara tersebut memperkuat tren pelemahan harga, terutama di tengah pertumbuhan konsumsi global yang mulai melambat. Sumber https://ekonomi.bisnis.com/read/20260420/12/1967785/harga-kopi-global-turun-sinyal-awal-surplus-pasokan-2026#goog_rewarded"
  },
  {
    id: 3,
    title: "Tren Konsumen 2026: Era Label Kopi Regeneratif",
    date: "02 Januari 2024",
    image: "https://i.ibb.co.com/x8snJwB3/1776845764743.png",
    category: "Tren",
    description: "MULAI tahun 2026, ngopi nggak lagi cuma soal rasa. Produk kopi di rak supermarket bakal punya label baru, Regeneratif. Label ini bukan sekadar tempelan, tapi penanda kalau kopi yang kamu beli berasal dari kebun yang berkomitmen menjaga bumi dan bikin hidup petaninya lebih sejahtera. Krisis iklim sudah bikin banyak kebun kopi megap-megap. Hujan tak menentu, suhu makin panas, panen jadi nggak pasti. Padahal, lebih dari 70 persen kopi dunia ditanam sama petani kecil. Kalau mereka kolaps, dunia bisa krisis kafein beneran. Rainforest Alliance, organisasi internasional yang concern sama keberlanjutan, akhirnya turun tangan. Mereka meluncurkan Standar Pertanian Regeneratif, semacam panduan plus sertifikasi baru buat petani kopi dan perusahaan. Biar pertanian kopi nggak cuma bertahan, tapi juga memulihkan ekosistem. Kalau selama ini kita sering dengar kopi fair trade atau organic, sekarang ada level lanjutannya, kopi regeneratif. Bedanya, model ini nggak cuma nggak merusak, tapi aktif memperbaiki. Misalnya, memperkaya tanah, menjaga air, melindungi keanekaragaman hayati, sampai bikin kebun lebih tahan sama cuaca ekstrem. Selain itu, gerakan ini juga bisa bikin cerita kopi kita makin kuat. Bayangin aja, minum kopi Gayo atau Toraja sambil tahu kalau itu hasil kebun yang ramah alam sekaligus mendukung kesejahteraan petani. Rasanya pasti beda. Label regeneratif bukan cuma tren sesaat. Ini arah baru buat industri kopi global. Konsumen makin kritis, perusahaan makin dituntut tanggung jawab, dan bumi makin butuh solusi. Kopi regeneratif hadir di titik pertemuan itu semua. Sumber https://mulamula.id/mulai-2026-ada-kopi-dengan-label-regeneratif-apa-artinya/"
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
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-coffee-dark/95 backdrop-blur-md py-3 md:py-4 border-b border-coffee-tan/10 shadow-lg' : 'bg-transparent py-4 md:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-coffee-cream">
        <div className="flex flex-col">
          <span className={`text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-coffee-tan mb-0.5 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>Est. 2024 — Bekasi</span>
          <div className="flex items-center gap-2 md:gap-3">
            <img 
              src="https://iili.io/BSHHbMx.png" 
              alt="De' Savour Coffee Logo" 
              className="h-8 md:h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="font-display font-bold text-lg md:text-xl tracking-tighter">
              DE' SAVOUR COFFEE
            </span>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center gap-10 font-sans text-xs font-semibold tracking-widest uppercase text-coffee-cream`}>
          <a href="#about" className="hover:text-coffee-tan transition-colors">Tentang</a>
          <a href="#news" className="hover:text-coffee-tan transition-colors">Berita</a>
          <a href="#gallery" className="hover:text-coffee-tan transition-colors">Galeri</a>
          <a href="#contact" className="hover:text-coffee-tan transition-colors">Kontak</a>
          <button className={`px-5 py-1.5 rounded-sm border border-coffee-tan/30 transition-all duration-300 hover:bg-coffee-tan hover:text-black`}>
            Menu
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-coffee-cream" size={28} />
          ) : (
            <Menu className="text-coffee-cream" size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-coffee-dark/98 backdrop-blur-xl flex flex-col items-center py-8 gap-5 font-display font-medium text-lg text-coffee-cream border-t border-coffee-tan/10 shadow-2xl"
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Tentang</a>
            <a href="#news" onClick={() => setIsMobileMenuOpen(false)}>Berita</a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Galeri</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Kontak</a>
          </motion.div>
        )}
      </AnimatePresence>
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
                Lahir di jantung Tambun pada awal tahun 2024, De' Savour Coffee adalah manifesto bagi pecinta kopi yang menghargai waktu dan rasa. Kami hadir bukan sekadar kafe, melainkan ruang di mana setiap detik Anda dihargai.
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
            Kopi yang sempurna bukanlah sebuah kebetulan. Ia adalah hasil dari perhitungan matematis yang harmonis antara suhu air, ukuran gilingan, dan waktu kontak. Di De' Savour Coffee, kami tidak sekadar menyeduh; kami mengalibrasi pengalaman. Kami percaya bahwa keajaiban rasa tersembunyi dalam detail terkecil—karena kesempurnaan sejati hadir melalui Presisi Dalam Setiap Tetes.
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
  return (
    <section id="news" className="py-24 bg-coffee-dark text-coffee-cream border-t border-coffee-tan/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-coffee-tan mb-4 block font-semibold border-b border-coffee-tan/20 pb-2 w-fit">Warta Terkini</span>
            <h2 className="font-display font-bold text-4xl md:text-7xl uppercase leading-none">
              Jurnal <span className="italic font-normal">Kopi</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-coffee-tan font-sans font-bold text-[10px] tracking-[0.3em] uppercase hover:opacity-70 transition-opacity border border-coffee-tan/20 px-6 py-2 rounded-sm">
            Lihat Semua Arsip
          </button>
        </div>

        <div className="space-y-12">
          {NEWS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center group`}
            >
              <div className="w-full md:w-1/2 aspect-[16/10] overflow-hidden rounded-sm border border-coffee-tan/10 shadow-2xl transition-all duration-700">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[30%] group-hover:grayscale-0" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-coffee-tan px-3 py-1 bg-coffee-tan/5 border border-coffee-tan/20 rounded-full">{item.category}</span>
                  <span className="opacity-40">{item.date}</span>
                </div>
                <h3 className="font-display font-bold text-3xl md:text-4xl leading-tight group-hover:text-coffee-tan transition-colors">
                  {item.title}
                </h3>
                <p className="text-coffee-cream/60 font-sans leading-relaxed text-sm max-w-lg">
                  {item.description}
                </p>
                <button className="flex items-center gap-2 text-coffee-tan text-[10px] uppercase font-bold tracking-widest mt-4 group/btn w-fit">
                  Baca Selengkapnya 
                  <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
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
          <a href="#" className="hover:text-coffee-tan transition-colors">Privacy</a>
          <a href="#" className="hover:text-coffee-tan transition-colors">Terms</a>
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
