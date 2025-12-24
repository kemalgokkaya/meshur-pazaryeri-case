# 🛒 Meşhur Pazaryeri - Frontend Case Study

Bu proje, **Next.js 15+** kullanılarak geliştirilmiş, ölçeklenebilir ve yüksek performanslı bir pazaryeri uygulaması prototipidir. Modern frontend mimarileri ve en iyi uygulama (best practice) prensipleri üzerine inşa edilmiştir.

---

## 🚀 Öne Çıkan Özellikler

- **Rendering Mimarisi:** SEO ve performans öncelikli **Server Side Rendering (SSR)** ve **Server Components** kullanımı.
- **Modern Tech Stack:** Next.js 15 (App Router), TypeScript (Strict Mode), Tailwind CSS v4.
- **State Management:** Veri akışını yönetmek için **Zustand** ile normalize edilmiş state yapısı.
- **Atomic Design:** UI bileşenleri `atoms` ve `molecules` olarak katmanlandırılmıştır.
- **Karanlık Mod (Dark Mode):** `next-themes` entegrasyonu ile sistem uyumlu veya manuel tema seçimi.
- **Performans:** `next/image` ile optimize edilmiş görseller ve bileşen bazlı memoization.

---

## 🛠️ Mimari ve Kararlar

### 📁 Klasör Yapısı
Proje, **Atomic Design** prensiplerine göre organize edilmiştir:
- `src/components/atoms`: En küçük yapı taşları (Button, ThemeToggle).
- `src/components/molecules`: Birden fazla atomun birleşimi (ProductCard).
- `src/services`: API veri dönüşümleri ve mapping işlemleri.
- `src/store`: Global state (Zustand).

### ⚙️ Tercih Sebepleri
- **Next.js 15:** En güncel özellikler ve Turbo motoru sayesinde hız avantajı.
- **Tailwind v4:** Daha küçük CSS çıktısı ve CSS-native yapılandırma.
- **Zustand:** Redux'a göre daha hafif, boiler-plate kod gerektirmeyen ölçeklenebilir yapı.
- **Data Mapping:** API'den gelen verilerin UI katmanına geçmeden önce `mapper` fonksiyonlarından geçirilerek tip güvenliğinin (Type Safety) sağlanması.

---

## 🛠️ Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install