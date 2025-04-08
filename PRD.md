# NG Işık Alüminyum Web Sitesi - Ürün Gereksinimleri Dokümanı

## 1. Proje Genel Bakış
- **Proje Adı**: NG Işık Alüminyum Web Sitesi
- **Domain**: ngisikaluminyum.com
- **Sektör**: Üretim - Pencere ve Kapı Sineklikleri
- **Hedef Kitle**: Pencere ve kapı sinekliği arayan konut ve ticari müşteriler

## 2. Teknik Altyapı
- **Framework**: Next.js 14 (App Router)
- **Stil**: Tailwind CSS
- **UI Bileşenleri**: Shadcn UI, Radix UI
- **Animasyon**: Framer Motion
- **Form Yönetimi**: React Hook Form + Zod
- **Görsel Optimizasyonu**: Next.js Image Component
- **Yayınlama**: Vercel

## 3. Temel Özellikler

### 3.1 Ana Sayfa
- Yüksek kaliteli ürün görselleri ile hero bölümü
- Öne çıkan ürünler vitrini
- Şirket tanıtım bölümü
- Harekete geçirici butonlar
- Yumuşak kaydırma animasyonları
- Duyarlı görsel galerisi

### 3.2 Ürün Kataloğu
- Izgara düzeninde ürün görüntüleme
- Filtreleme seçenekleri:
  - Ürün tipi (Pencere Sineklikleri, Kapı Sineklikleri)
  - Malzeme
  - Boyut
- Ürün detay sayfaları:
  - Yüksek çözünürlüklü görseller
  - Teknik özellikler
  - Montaj talimatları
  - İlgili ürünler

### 3.3 İletişim Bölümü
- Doğrulamalı iletişim formu
- Google Haritalar entegrasyonu
- Çalışma saatleri
- İletişim bilgileri
- WhatsApp entegrasyonu
- Sosyal medya bağlantıları

### 3.4 Hakkımızda
- Şirket geçmişi
- Misyon ve vizyon
- Ekip bölümü
- Kalite güvence bilgileri
- Sertifikalar

## 4. Teknik Gereksinimler

### 4.1 Performans
- Core Web Vitals optimizasyonu:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- Görsel optimizasyonu:
  - WebP formatı
  - Lazy loading
  - Duyarlı boyutlar
- Kod bölümleme
- Rota ön yükleme

### 4.2 Duyarlı Tasarım
- Mobil öncelikli yaklaşım
- Kırılma noktaları:
  - Mobil: < 640px
  - Tablet: 640px - 1024px
  - Masaüstü: > 1024px
- Akışkan tipografi
- Esnek ızgara sistemi
- Dokunmatik dostu etkileşimler

### 4.3 Animasyonlar ve Geçişler
- Framer Motion ile sayfa geçişleri
- Etkileşimli öğelerde hover efektleri
- Kaydırmaya dayalı animasyonlar
- Yükleme durumları
- Mikro etkileşimler

### 4.4 Erişilebilirlik
- WCAG 2.1 AA uyumluluğu
- Klavye navigasyonu
- Ekran okuyucu uyumluluğu
- Renk kontrast oranı > 4.5:1
- ARIA etiketleri
- Anlamsal HTML

## 5. İçerik Yapısı

### 5.1 Ana Navigasyon
- Ana Sayfa
- Ürünler
  - Pencere Sineklikleri
  - Kapı Sineklikleri
- Hakkımızda
- İletişim
- Blog (opsiyonel)

### 5.2 Alt Bilgi
- Hızlı bağlantılar
- İletişim bilgileri
- Sosyal medya
- Bülten kaydı
- Gizlilik politikası
- Kullanım koşulları

## 6. SEO Gereksinimleri
- Meta etiketleri optimizasyonu
- Yapılandırılmış veri
- XML site haritası
- Robots.txt
- Kanonik URL'ler
- Open Graph etiketleri
- Twitter kartları

## 7. Güvenlik
- HTTPS uygulaması
- Form doğrulama
- Girdi temizleme
- Hız sınırlama
- Güvenlik başlıkları
- Düzenli güvenlik denetimleri

## 8. Analitik ve İzleme
- Google Analytics 4
- Hata takibi
- Performans izleme
- Kullanıcı davranış analizi
- Dönüşüm takibi

## 9. Bakım
- Düzenli içerik güncellemeleri
- Güvenlik yamaları
- Performans optimizasyonu
- Yedekleme prosedürleri
- Dokümantasyon güncellemeleri

## 10. Zaman Çizelgesi ve Kilometre Taşları
1. Tasarım ve Planlama (2 hafta)
2. Geliştirme (4 hafta)
3. İçerik Oluşturma (2 hafta)
4. Test ve Kalite Kontrol (2 hafta)
5. Lansman ve Optimizasyon (1 hafta)

## 11. Başarı Metrikleri
- Sayfa yükleme süresi < 3s
- Mobil kullanılabilirlik puanı > 90
- Dönüşüm oranı > %2
- Hemen çıkma oranı < %40
- Sitede geçirilen süre > 2 dakika

## 12. Gelecek Geliştirmeler
- E-ticaret entegrasyonu
- Müşteri portalı
- Ürün yapılandırıcı
- Randevu planlama
- Canlı destek
- Çoklu dil desteği 