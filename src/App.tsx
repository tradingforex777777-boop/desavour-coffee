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
}

const NEWS: NewsItem[] = [
  {
    id: 1,
    title: "Brewing Workshops: Mastering the V60",
    date: "15 April 2024",
    image: "https://images.unsplash.com/photo-1544787210-2213d84ad960?auto=format&fit=crop&q=80&w=800",
    category: "Event"
  },
  {
    id: 2,
    title: "Season's Special: Organic Gayo Beans",
    date: "10 April 2024",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
    category: "Product"
  },
  {
    id: 3,
    title: "New Outdoor Space is Now Open!",
    date: "02 April 2024",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
    category: "Space"
  }
];

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=1920",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1920"
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1521017432531-fbd92d744264?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=1000"
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
      isScrolled ? 'bg-coffee-dark/80 backdrop-blur-md py-4 border-b border-coffee-tan/10 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-coffee-cream">
        <div className="flex flex-col">
          <span className={`text-[10px] uppercase tracking-[0.3em] text-coffee-tan mb-0.5 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>Est. 2024 — Bekasi</span>
          <div className="flex items-center gap-3">
            <img 
              src="https://iili.io/BSHHbMx.png" 
              alt="De' Savour Coffee Logo" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="font-display font-bold text-xl tracking-tighter">
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass flex flex-col items-center py-10 gap-6 font-display font-medium text-lg text-coffee-cream"
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
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" 
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
                Lahir di jantung Tambun pada awal tahun 2024, De' Savour adalah manifesto bagi pecinta kopi yang menghargai waktu dan rasa. Kami hadir bukan sekadar kafe, melainkan ruang di mana setiap detik Anda dihargai.
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
            Setiap biji kopi kami dikurasi dengan ketat, mulai dari asal-usul tanah hingga metode pasca-panen. Di De' Savour, kami merayakan karakter unik kopi Nusantara dengan teknik seduh yang mengutamakan harmoni rasa.
          </p>
          <button className="mt-8 border-b border-coffee-tan text-coffee-tan text-xs uppercase tracking-widest font-bold pb-2 hover:opacity-100 opacity-60 transition-opacity">
            Jelajahi Karater Biji Kami
          </button>
        </div>
        <div className="md:w-7/12 grid grid-cols-12 gap-4">
          <div className="col-span-7 aspect-[4/5] rounded-sm overflow-hidden mt-12 border border-coffee-tan/10">
            <img src="https://images.unsplash.com/photo-1544787210-2213d84ad960?auto=format&fit=crop&q=80&w=800" alt="Drip" className="w-full h-full object-cover grayscale-[20%]" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-5 aspect-[4/6] rounded-sm overflow-hidden border border-coffee-tan/10">
            <img src="https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80&w=600" alt="Latte Art" className="w-full h-full object-cover grayscale-[20%]" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const News = () => {
  return (
    <section id="news" className="py-24 bg-coffee-dark text-coffee-cream border-t border-coffee-tan/10">
      <div className="max-w-7xl mx-auto px-6 text-coffee-cream">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-coffee-tan mb-4 block font-semibold border-b border-coffee-tan/20 pb-2 w-fit">Warta Terkini</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl uppercase leading-none">
              Berita <span className="italic font-normal">Terbaru</span>
            </h2>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-coffee-tan font-sans font-bold text-xs tracking-widest uppercase hover:opacity-70 transition-opacity">
            Lihat Semua
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {NEWS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass p-4 rounded-sm border border-coffee-tan/5"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-sm mb-6 border border-coffee-tan/10">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[40%] group-hover:grayscale-0" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[9px] font-bold uppercase tracking-widest text-coffee-tan">
                  {item.category}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest opacity-40">
                  {item.date}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl group-hover:text-coffee-tan transition-colors line-clamp-2 leading-tight">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GallerySlider = () => {
  const [index, setIndex] = useState(2);

  const handlePrev = () => setIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));

  return (
    <section id="gallery" className="py-24 bg-coffee-dark overflow-hidden text-coffee-cream">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-center text-coffee-cream">
        <h2 className="font-display font-bold text-4xl uppercase tracking-tight">Galeri <span className="italic font-normal">Momen</span></h2>
        <div className="flex gap-2">
          <button onClick={handlePrev} className="w-10 h-10 rounded-sm border border-coffee-tan/30 flex items-center justify-center hover:bg-coffee-tan hover:text-black transition-all">
            <ChevronLeft size={16} />
          </button>
          <button onClick={handleNext} className="w-10 h-10 rounded-sm border border-coffee-tan/30 flex items-center justify-center hover:bg-coffee-tan hover:text-black transition-all">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      
      <div className="relative h-[450px]">
        <div className="flex gap-6 absolute left-1/2 top-0 transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)" style={{ transform: `translateX(calc(-50% - ${index * (380 + 24)}px))` }}>
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div 
              key={i}
              animate={{ 
                scale: index === i ? 1 : 0.9,
                opacity: index === i ? 1 : 0.3
              }}
              className="w-[380px] md:w-[600px] h-[450px] shrink-0 rounded-sm overflow-hidden border border-coffee-tan/10 shadow-2xl"
            >
              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
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
          <a href="#" className="w-10 h-10 rounded-sm border border-coffee-tan/20 flex items-center justify-center hover:bg-coffee-tan hover:text-black transition-all duration-500">
            <Instagram size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-sm border border-coffee-tan/20 flex items-center justify-center hover:bg-coffee-tan hover:text-black transition-all duration-500">
            <Facebook size={18} />
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
        <News />
        <GallerySlider />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
