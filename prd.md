# NG IŞIK Web Sitesi - Ürün Gereksinim Dokümanı (PRD)

## 1. Animasyonlar ve Geçişler

### 1.1 Genel Animasyon Prensipleri
- Tüm animasyonlar performansı etkilemeyecek şekilde optimize edilmeli
- Animasyon süreleri 200-500ms arasında olmalı
- Easing fonksiyonları için `cubic-bezier(0.4, 0, 0.2, 1)` kullanılmalı
- Animasyonlar kullanıcı deneyimini iyileştirmeli, engellememeli

### 1.2 Sayfa Geçişleri
- Sayfa yüklenirken fade-in efekti (opacity: 0 -> 1)
- Sayfa içi geçişlerde smooth scroll
- Hero section'da slide-up animasyonu
- İstatistik kartlarında sayaç animasyonu
- Ürün kartlarında hover efektleri

### 1.3 Menü ve Navigasyon
- Mobil menüde slide-in/out animasyonu
- Dropdown menülerde fade-in/out
- Aktif menü öğelerinde underline animasyonu
- Logo hover efektinde smooth opacity geçişi

### 1.4 İnteraktif Elementler
- Butonlarda hover ve active state animasyonları
- Kartlarda hover scale efekti
- Form elementlerinde focus state animasyonları
- Loading state'lerinde skeleton animasyonları

## 2. Mobil Uyumluluk (Responsive Tasarım)

### 2.1 Breakpoint'ler
```css
/* Mobile First Yaklaşımı */
sm: '640px'   /* Mobil */
md: '768px'   /* Tablet */
lg: '1024px'  /* Laptop */
xl: '1280px'  /* Desktop */
2xl: '1536px' /* Geniş Ekran */
```

### 2.2 Layout Prensipleri
- Flexbox ve CSS Grid kullanımı
- Container max-width: 1400px
- Responsive padding ve margin değerleri
- Mobile-first yaklaşımı

### 2.3 Responsive Typography
```css
/* Başlıklar */
h1: {
  mobile: '2rem',
  tablet: '3rem',
  desktop: '4rem'
}
h2: {
  mobile: '1.5rem',
  tablet: '2rem',
  desktop: '2.5rem'
}
/* Body Text */
body: {
  mobile: '0.875rem',
  tablet: '1rem',
  desktop: '1.125rem'
}
```

### 2.4 Mobil Optimizasyonlar
- Touch target size: minimum 44x44px
- Font size: minimum 16px
- Input field height: minimum 44px
- Button padding: minimum 12px 24px
- Spacing: minimum 16px

### 2.5 Performans Optimizasyonları
- Lazy loading images
- Responsive images
- Conditional loading
- Optimize edilmiş font loading

## 3. Erişilebilirlik (A11Y)

### 3.1 Renk Kontrastı
- Minimum kontrast oranı: 4.5:1 (WCAG AA)
- Text için: #000000 / #FFFFFF
- Primary color: #FB4141
- Secondary colors: #F7374F, #F7374F/90

### 3.2 Semantic HTML
- Doğru heading hiyerarşisi (h1 -> h6)
- ARIA landmarks kullanımı
- Form elementleri için label kullanımı
- Button ve link elementleri için uygun text

### 3.3 Klavye Navigasyonu
- Focus visible state
- Tab order
- Skip links
- Keyboard shortcuts

### 3.4 Screen Reader Uyumluluğu
- ARIA labels
- Alt text for images
- Role attributes
- Live regions

### 3.5 Form Erişilebilirliği
- Input validation
- Error messages
- Success states
- Required field indicators

## 4. Teknik Gereksinimler

### 4.1 CSS Framework
- Tailwind CSS
- Custom animations
- Responsive utilities
- Custom components

### 4.2 JavaScript
- React hooks
- Intersection Observer
- Custom event handlers
- Performance optimizations

### 4.3 Browser Support
- Chrome (son 2 versiyon)
- Firefox (son 2 versiyon)
- Safari (son 2 versiyon)
- Edge (son 2 versiyon)

### 4.4 Performance Metrics
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

## 5. Test Gereksinimleri

### 5.1 Responsive Testing
- Chrome DevTools device toolbar
- BrowserStack
- Real device testing
- Cross-browser testing

### 5.2 Accessibility Testing
- WAVE Web Accessibility Tool
- Lighthouse
- Screen reader testing
- Keyboard navigation testing

### 5.3 Performance Testing
- Lighthouse
- WebPageTest
- Chrome DevTools Performance tab
- Real user monitoring (RUM) 