"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/1b000a8b-3405-4abc-ad3b-e7baf9a427aa.png",
    "/1b000a8b-3405-4aaaabc-ad3b-e7baf9a427aa.png",
    "/illustrations/sineklik.png"
  ];

  useEffect(() => {
    function animateValue(element: HTMLElement | null, start: number, end: number, duration: number) {
      if (!element) return;
      
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start).toString();
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateValue(document.getElementById('count1'), 0, 20, 2000);
          animateValue(document.getElementById('count2'), 0, 1000, 2000);
          animateValue(document.getElementById('count3'), 0, 50, 2000);
          animateValue(document.getElementById('count4'), 0, 100, 2000);
          observer.unobserve(entry.target);
        }
      });
    });

    const gridElement = document.querySelector('.grid');
    if (gridElement) {
      observer.observe(gridElement);
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="max-w-[1400px] h-[80px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="relative w-[120px] md:w-[140px] h-[48px] md:h-[56px] group">
              <Image
                src="/ngisiklogo.png"
                alt="NG IŞIK Logo"
                fill
                className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                priority
              />
              <Image
                src="/nglogo.png"
                alt="NG IŞIK Logo Hover"
                fill
                className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                priority
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
              <Link href="/kurumsal" className="text-sm font-medium text-gray-900 hover:text-[#F7374F] transition-colors">
                Kurumsal
              </Link>
              <Link href="/hizmetler" className="text-sm font-medium text-gray-900 hover:text-[#F7374F] transition-colors">
                Hizmetler
              </Link>
              <Link href="/urunler" className="text-sm font-medium text-gray-900 hover:text-[#F7374F] transition-colors">
                Ürünler
              </Link>
              <Link href="/iletisim" className="text-sm font-medium text-gray-900 hover:text-[#F7374F] transition-colors">
                İletişim
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link 
                href="/iletisim" 
                className="px-6 py-2.5 text-sm font-medium text-white bg-[#F7374F] rounded-md hover:bg-[#F7374F]/90 transition-all duration-300"
              >
                İletişime Geçin
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 hover:bg-gray-50 rounded-md">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#FB4141] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-20">
            <div className="flex flex-col justify-center">
              <div className="flex items-start flex-col mb-16">
                <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white mb-6">
                  MODERN ÇÖZÜMLER
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-space-mono">
                  Görünmez Koruma,<br />
                  Göze Hitap Eden Tasarım
                </h1>
                <p className="text-white/90 text-lg max-w-xl font-space-mono-regular mb-8">
                  Yaşam alanlarınızı yenileyin, enerji tasarrufu sağlayın ve modern mimariye uygun çözümler elde edin.
                </p>
              </div>
              <Link
                href="/iletisim"
                className="inline-block px-8 py-4 bg-white text-[#FB4141] rounded-lg border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 w-fit font-space-mono"
              >
                İletişime Geçin
              </Link>
            </div>
            <div className="relative w-full h-[900px] rounded-2xl overflow-hidden bg-[#FB4141]">
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="Hero Image"
                  fill
                  className={`object-contain transition-opacity duration-2000 ${
                    currentImage === index ? "opacity-100" : "opacity-0"
                  }`}
                  priority={index === 0}
                />
              ))}
              {/* Dots Navigation */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-2000 ${
                      currentImage === index ? "bg-white" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-start flex-col mb-16">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
              İSTATİSTİKLER
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space-mono">
              Başarı Hikayemiz
            </h2>
            <p className="text-gray-600 max-w-xl font-space-mono-regular">
              20 yıllık deneyimimizle müşterilerimize en iyi hizmeti sunuyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm group hover:bg-[#FB4141] transition-all duration-300">
              <div className="relative w-[265px] h-[265px] mx-auto mb-4">
                <svg className="w-[265px] h-[265px] transform -rotate-90">
                  <circle
                    className="text-gray-100 group-hover:text-white/20"
                    strokeWidth="12"
                    stroke="currentColor"
                    fill="transparent"
                    r="120"
                    cx="132.5"
                    cy="132.5"
                  />
                  <circle
                    className="text-[#FB4141] group-hover:text-white"
                    strokeWidth="12"
                    strokeDasharray={753.6}
                    strokeDashoffset={753.6}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="120"
                    cx="132.5"
                    cy="132.5"
                    style={{
                      animation: "progress 2s ease-out forwards",
                    }}
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-5xl font-bold text-gray-600 group-hover:text-white transition-colors duration-300">
                    <span id="count1">0</span>+
                  </div>
                </div>
              </div>
              <div className="text-center text-gray-600 text-sm font-light group-hover:text-white transition-colors duration-300">Yıllık Deneyim</div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm group hover:bg-[#FB4141] transition-all duration-300">
              <div className="relative w-[265px] h-[265px] mx-auto mb-4">
                <svg className="w-[265px] h-[265px] transform -rotate-90">
                  <circle
                    className="text-gray-100 group-hover:text-white/20"
                    strokeWidth="12"
                    stroke="currentColor"
                    fill="transparent"
                    r="120"
                    cx="132.5"
                    cy="132.5"
                  />
                  <circle
                    className="text-[#FB4141] group-hover:text-white"
                    strokeWidth="12"
                    strokeDasharray={753.6}
                    strokeDashoffset={753.6}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="120"
                    cx="132.5"
                    cy="132.5"
                    style={{
                      animation: "progress 2s ease-out forwards",
                    }}
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-5xl font-bold text-gray-600 group-hover:text-white transition-colors duration-300">
                    <span id="count2">0</span>+
                  </div>
                </div>
              </div>
              <div className="text-center text-gray-600 text-sm font-light group-hover:text-white transition-colors duration-300">Tamamlanan Proje</div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm group hover:bg-[#FB4141] transition-all duration-300">
              <div className="relative w-[265px] h-[265px] mx-auto mb-4">
                <svg className="w-[265px] h-[265px] transform -rotate-90">
                  <circle
                    className="text-gray-100 group-hover:text-white/20"
                    strokeWidth="12"
                    stroke="currentColor"
                    fill="transparent"
                    r="120"
                    cx="132.5"
                    cy="132.5"
                  />
                  <circle
                    className="text-[#FB4141] group-hover:text-white"
                    strokeWidth="12"
                    strokeDasharray={753.6}
                    strokeDashoffset={753.6}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="120"
                    cx="132.5"
                    cy="132.5"
                    style={{
                      animation: "progress 2s ease-out forwards",
                    }}
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-5xl font-bold text-gray-600 group-hover:text-white transition-colors duration-300">
                    <span id="count3">0</span>+
                  </div>
                </div>
              </div>
              <div className="text-center text-gray-600 text-sm font-light group-hover:text-white transition-colors duration-300">Uzman Personel</div>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm group hover:bg-[#FB4141] transition-all duration-300">
              <div className="relative w-[265px] h-[265px] mx-auto mb-4">
                <svg className="w-[265px] h-[265px] transform -rotate-90">
                  <circle
                    className="text-gray-100 group-hover:text-white/20"
                    strokeWidth="12"
                    stroke="currentColor"
                    fill="transparent"
                    r="120"
                    cx="132.5"
                    cy="132.5"
                  />
                  <circle
                    className="text-[#FB4141] group-hover:text-white"
                    strokeWidth="12"
                    strokeDasharray={753.6}
                    strokeDashoffset={753.6}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="120"
                    cx="132.5"
                    cy="132.5"
                    style={{
                      animation: "progress 2s ease-out forwards",
                    }}
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-5xl font-bold text-gray-600 group-hover:text-white transition-colors duration-300">
                    <span id="count4">0</span>%
                  </div>
                </div>
              </div>
              <div className="text-center text-gray-600 text-sm font-light group-hover:text-white transition-colors duration-300">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-black">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-start flex-col mb-16">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white mb-6">
              NEDEN BİZ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space-mono">
              Modern Alüminyum Sistemleri<br />
              İçin Doğru Adres
            </h2>
            <p className="text-white/80 max-w-xl font-space-mono-regular">
              Kaliteli ürünler ve profesyonel hizmet anlayışımızla, yaşam alanlarınızı modern ve estetik çözümlerle yeniliyoruz.
            </p>
          </div>

          {/* Scrollable Products */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Product Card 1 */}
              <div className="bg-black border border-white/10 rounded-3xl p-8 group hover:bg-[#FB4141] transition-all duration-500">
                <div className="relative h-[300px] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="/Whatsapp Image 2025-03-24 at 01.41.00.jpeg"
                    alt="Alüminyum Pencere Sistemleri"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-space-mono text-white group-hover:text-white">Alüminyum Pencere Sistemleri</h3>
                <p className="text-white/60 mb-6 font-space-mono-regular group-hover:text-white/90">
                  Modern mimariye uygun, enerji tasarruflu ve dayanıklı alüminyum pencere sistemleri.
                </p>
                <Link
                  href="/urunler/aluminyum-pencere-sistemleri"
                  className="inline-flex items-center text-white font-medium group-hover:text-white transition-colors"
                >
                  Detaylı Bilgi
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Product Card 2 */}
              <div className="bg-black border border-white/10 rounded-3xl p-8 group hover:bg-[#FB4141] transition-all duration-500">
                <div className="relative h-[300px] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="/Whatsapp Image 2025-03-24 at 01.41.01.jpeg"
                    alt="Alüminyum Kapı Sistemleri"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-space-mono text-white group-hover:text-white">Alüminyum Kapı Sistemleri</h3>
                <p className="text-white/60 mb-6 font-space-mono-regular group-hover:text-white/90">
                  Şık ve güvenli alüminyum kapı sistemleri ile mekanlarınızı güçlendirin.
                </p>
                <Link
                  href="/urunler/aluminyum-kapi-sistemleri"
                  className="inline-flex items-center text-white font-medium group-hover:text-white transition-colors"
                >
                  Detaylı Bilgi
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Product Card 3 */}
              <div className="bg-black border border-white/10 rounded-3xl p-8 group hover:bg-[#FB4141] transition-all duration-500">
                <div className="relative h-[300px] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="/Whatsapp Image 2025-03-24 at 01.41.02.jpeg"
                    alt="Cephe Sistemleri"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-space-mono text-white group-hover:text-white">Cephe Sistemleri</h3>
                <p className="text-white/60 mb-6 font-space-mono-regular group-hover:text-white/90">
                  Modern mimariye uygun cephe sistemleri ile binalarınızı yenileyin.
                </p>
                <Link
                  href="/urunler/cephe-sistemleri"
                  className="inline-flex items-center text-white font-medium group-hover:text-white transition-colors"
                >
                  Detaylı Bilgi
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Product Card 4 */}
              <div className="bg-black border border-white/10 rounded-3xl p-8 group hover:bg-[#FB4141] transition-all duration-500">
                <div className="relative h-[300px] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="/illustrations/sineklik.png"
                    alt="Sineklik Sistemleri"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 font-space-mono text-white group-hover:text-white">Sineklik Sistemleri</h3>
                <p className="text-white/60 mb-6 font-space-mono-regular group-hover:text-white/90">
                  Pratik ve estetik sineklik sistemleri ile yaşam alanlarınızı koruyun.
                </p>
                <Link
                  href="/urunler/sineklik-sistemleri"
                  className="inline-flex items-center text-white font-medium group-hover:text-white transition-colors"
                >
                  Detaylı Bilgi
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-start flex-col mb-16">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
              HİZMETLERİMİZ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space-mono">
              Profesyonel Ekip ve<br />
              Modern Ekipmanlar
            </h2>
            <p className="text-gray-600 max-w-xl font-space-mono-regular">
              Profesyonel ekibimiz ve modern ekipmanlarımızla kaliteli hizmet sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 group hover:bg-[#FB4141] transition-all duration-500">
              <div className="w-12 h-12 bg-[#FB4141] rounded-lg flex items-center justify-center mb-6 group-hover:bg-white">
                <svg className="w-6 h-6 text-white group-hover:text-[#FB4141] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-space-mono text-gray-900 group-hover:text-white">Keşif ve Ölçüm</h3>
              <p className="text-gray-600 font-space-mono-regular group-hover:text-white/90">
                Uzman ekibimiz keşif için sizi ziyaret eder ve projeniz için en uygun çözümü sunar.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 group hover:bg-[#FB4141] transition-all duration-500">
              <div className="w-12 h-12 bg-[#FB4141] rounded-lg flex items-center justify-center mb-6 group-hover:bg-white">
                <svg className="w-6 h-6 text-white group-hover:text-[#FB4141] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-space-mono text-gray-900 group-hover:text-white">Montaj</h3>
              <p className="text-gray-600 font-space-mono-regular group-hover:text-white/90">
                Profesyonel ekibimizle hızlı ve kaliteli montaj hizmeti sunuyoruz.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 group hover:bg-[#FB4141] transition-all duration-500">
              <div className="w-12 h-12 bg-[#FB4141] rounded-lg flex items-center justify-center mb-6 group-hover:bg-white">
                <svg className="w-6 h-6 text-white group-hover:text-[#FB4141] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-space-mono text-gray-900 group-hover:text-white">Garanti</h3>
              <p className="text-gray-600 font-space-mono-regular group-hover:text-white/90">
                Tüm ürünlerimiz garantilidir ve teknik destek hizmeti sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-start flex-col mb-16">
                <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white mb-6">
                  HAKKIMIZDA
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space-mono">
                  20 Yıllık Deneyim ve<br />
                  Profesyonel Hizmet
                </h2>
                <p className="text-white/80 max-w-xl font-space-mono-regular mb-8">
                  Modern mimariye uygun alüminyum sistemleri üretiyor ve montajını gerçekleştiriyoruz. Müşteri memnuniyeti ve kalite odaklı çalışma prensibiyle, yaşam alanlarınızı yeniliyoruz.
                </p>
                <Link
                  href="/kurumsal"
                  className="inline-block px-8 py-4 bg-[#FB4141] text-white rounded-lg hover:bg-white hover:text-[#FB4141] border-2 border-[#FB4141] transition-all duration-300"
                >
                  Detaylı Bilgi
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/WhatsApp Image 2025-03-24 at 01.41.02.jpeg"
                  alt="Hakkımızda"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/WhatsApp Image 2025-03-24 at 01.41.02.jpeg"
                  alt="Hakkımızda"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex items-start flex-col mb-16">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
              İLETİŞİM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-space-mono">
              Size Özel Çözümler<br />
              İçin Bizimle İletişime Geçin
            </h2>
            <p className="text-gray-600 max-w-xl font-space-mono-regular">
              Profesyonel ekibimiz size en uygun çözümü sunmak için hazır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Card 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 group hover:bg-[#FB4141] transition-all duration-500">
              <div className="w-12 h-12 bg-[#FB4141] rounded-lg flex items-center justify-center mb-6 group-hover:bg-white">
                <svg className="w-6 h-6 text-white group-hover:text-[#FB4141] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-space-mono text-gray-900 group-hover:text-white">Telefon</h3>
              <p className="text-gray-600 font-space-mono-regular group-hover:text-white/90">
                +90 216 222 22 22
              </p>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 group hover:bg-[#FB4141] transition-all duration-500">
              <div className="w-12 h-12 bg-[#FB4141] rounded-lg flex items-center justify-center mb-6 group-hover:bg-white">
                <svg className="w-6 h-6 text-white group-hover:text-[#FB4141] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-space-mono text-gray-900 group-hover:text-white">E-posta</h3>
              <p className="text-gray-600 font-space-mono-regular group-hover:text-white/90">
                info@ngisik.com
              </p>
            </div>

            {/* Contact Card 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 group hover:bg-[#FB4141] transition-all duration-500">
              <div className="w-12 h-12 bg-[#FB4141] rounded-lg flex items-center justify-center mb-6 group-hover:bg-white">
                <svg className="w-6 h-6 text-white group-hover:text-[#FB4141] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-space-mono text-gray-900 group-hover:text-white">Adres</h3>
              <p className="text-gray-600 font-space-mono-regular group-hover:text-white/90">
                İstanbul, Türkiye
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="flex flex-col">
              <div className="relative w-[120px] h-[48px] mb-6 group">
                <Image
                  src="/ngisiklogo.png"
                  alt="NG IŞIK Logo"
                  fill
                  className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src="/nglogo.png"
                  alt="NG IŞIK Logo Hover"
                  fill
                  className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <p className="text-white/60 font-space-mono-regular mb-8">
                1995'ten beri kaliteli ve güvenilir çözümler sunuyoruz.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FB4141] transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FB4141] transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.018-1.613-.114-2.186-.136-.585-.443-1.033-.829-1.344-.407-.312-.94-.468-1.601-.468-1.586 0-2.665 1.018-2.665 2.997v5.601h-3v-11h3v1.616c.526-.81 1.443-1.219 2.5-1.219 1.866 0 3.5 1.134 3.5 3.566v6.037z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-space-mono">Hızlı Bağlantılar</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/kurumsal" className="text-white/60 hover:text-white transition-colors font-space-mono-regular">
                    Kurumsal
                  </Link>
                </li>
                <li>
                  <Link href="/hizmetler" className="text-white/60 hover:text-white transition-colors font-space-mono-regular">
                    Hizmetler
                  </Link>
                </li>
                <li>
                  <Link href="/urunler" className="text-white/60 hover:text-white transition-colors font-space-mono-regular">
                    Ürünler
                  </Link>
                </li>
                <li>
                  <Link href="/iletisim" className="text-white/60 hover:text-white transition-colors font-space-mono-regular">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-space-mono">İletişim</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-white/60 font-space-mono-regular">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+90 216 222 22 22</span>
                </li>
                <li className="flex items-center space-x-3 text-white/60 font-space-mono-regular">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@ngisik.com</span>
                </li>
                <li className="flex items-center space-x-3 text-white/60 font-space-mono-regular">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>İstanbul, Türkiye</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6 font-space-mono">Bülten</h4>
              <p className="text-white/60 mb-6 font-space-mono-regular">
                Yeni ürünler ve kampanyalardan haberdar olmak için bültenimize abone olun.
              </p>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-2 bg-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FB4141] font-space-mono-regular"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#FB4141] text-white rounded-lg hover:bg-white hover:text-[#FB4141] transition-colors duration-300 font-space-mono"
                >
                  Abone Ol
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-center text-white/40 font-space-mono-regular">
              © 2024 NG IŞIK. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 