# Mobile Performance Optimization Plan

## Current Metrics Analysis

### 🔴 Critical Issues (Mobile)
| Metric | Current | Target | Gap | Priority |
|--------|---------|--------|-----|----------|
| FCP | 1.5s | < 1.2s | -0.3s | 🔴 HIGH |
| LCP | 2.6s | < 2.5s | -0.1s | 🔴 HIGH |
| Speed Index | 4.3s | < 3.0s | -1.3s | 🔴 CRITICAL |
| TBT | 0ms | 0ms | ✅ | Green |
| CLS | 0 | 0 | ✅ | Green |

### Performance Bottlenecks Identified
1. **Hero Section Images** - Not optimized for mobile
2. **Framer Motion Animations** - Blocking main thread on low-end devices
3. **Font Loading** - Fallback to system fonts causing layout shift
4. **Large Bundle** - Main JS bundle not optimized for mobile
5. **ReviewSection Carousel** - Embla carousel loading eagerly

---

## Optimization Strategy

### Phase 1: Image Optimization (Biggest Impact)
**Estimated Improvement: 0.6-0.8s reduction**

1. **Hero Background Image**
   - Current: Full resolution on all devices
   - Solution: Serve mobile-optimized images (50% size reduction)
   - Implementation: Next.js Image with srcSet

2. **Service Cards Images**
   - Current: Load all at once
   - Solution: Lazy load below-the-fold images
   - Implementation: priority={false}, loading="lazy"

3. **Blog Post Images**
   - Current: Full resolution on all devices
   - Solution: Responsive images with multiple sizes
   - Implementation: sizes prop optimized for mobile

### Phase 2: JavaScript Optimization
**Estimated Improvement: 0.4-0.6s reduction**

1. **Defer Framer Motion**
   - Current: Loads with page
   - Solution: Dynamic import with ssr: false
   - Impact: ReviewSection animations load after FCP

2. **Lazy Load Below-Fold Components**
   - CardSection (below Hero)
   - ReviewSection (below CardSection)
   - Implementation: React.lazy + Suspense

3. **Code Splitting**
   - Blog MDX components
   - Service detail pages
   - Admin/contact features

### Phase 3: Font Optimization
**Estimated Improvement: 0.2-0.3s reduction**

1. **Font Display Strategy**
   - Current: system-ui fallback
   - Solution: font-display: swap for Inter
   - Benefit: Faster text rendering

2. **Preload Critical Font**
   - Only preload weight 400 and 700
   - Defer other weights

### Phase 4: CSS Optimization
**Estimated Improvement: 0.1-0.2s reduction**

1. **Critical CSS Extraction**
   - Inline critical styles for Hero
   - Defer non-critical CSS

2. **Tailwind Optimization**
   - Remove unused utilities
   - Tree-shake unused components

---

## Implementation Details

### 1. Image Optimization (START HERE)

#### A. Hero Section Image
**File to modify:** `src/app/components/Hero.js`

```javascript
// Current (Bad for mobile)
<div className="...">Hero Content</div>

// Optimized (Good for mobile)
<picture>
  <source media="(max-width: 768px)" srcSet="/image/hero-mobile.jpg" />
  <source media="(min-width: 769px)" srcSet="/image/hero-desktop.jpg" />
  <img src="/image/hero-fallback.jpg" alt="Hero" />
</picture>
```

**Action:** Create mobile versions of images (50-60% size)

#### B. Next.js Image Optimization
**File to modify:** All files using `<Image />`

```javascript
// Add these props to ALL Image components:
<Image
  src="/path/to/image.jpg"
  alt="description"
  width={1200}  // ← Add explicit width
  height={600}  // ← Add explicit height
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px"  // ← Add responsive sizes
  priority={index === 0}  // ← Only first image
  quality={75}  // ← Reduce quality on mobile
/>
```

**Files to update:**
1. src/app/components/CardSection.js (service images)
2. src/app/components/Logo.js (logo)
3. src/app/blog/page.js (blog thumbnails)
4. src/app/blog/[slug]/page.js (blog featured image)

### 2. Framer Motion Defer (Critical)

**File to modify:** `src/app/components/ReviewSection.js`

```javascript
// Current: ReviewSection uses motion.div throughout
// Problem: Loads Framer Motion on initial render

// Solution: Lazy load animation library
import dynamic from 'next/dynamic';

const ReviewSection = dynamic(() => import('./ReviewSection'), {
  loading: () => <div>Loading...</div>,
  ssr: true // Keep SSR for SEO
});
```

**Implementation:**
1. Wrap heavy animation components in dynamic imports
2. Load after initial paint
3. Use Suspense boundaries

### 3. Lazy Load Below-Fold Components

**File to modify:** `src/app/page.js` (Homepage)

```javascript
// Current: All components load on page mount
import CardSection from "./components/CardSection";
import ReviewSection from "./components/ReviewSection";

// Optimized: Lazy load below-fold
import dynamic from 'next/dynamic';

const CardSection = dynamic(() => import("./components/CardSection"), {
  loading: () => <div className="h-96" />, // Placeholder
});

const ReviewSection = dynamic(() => import("./components/ReviewSection"), {
  loading: () => <div className="h-96" />,
});
```

**Benefit:**
- Hero loads instantly
- CardSection loads in background
- ReviewSection loads after scroll

### 4. Font Optimization

**File to modify:** `src/app/layout.js`

```javascript
// Current
const inter = Inter({ subsets: ['latin'] });

// Optimized
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // ← Prevents FOUT
  preload: true,   // ← Preload critical weights
  weight: ['400', '700'] // ← Only needed weights
});

// In globals.css:
@font-face {
  font-family: 'Inter';
  font-display: swap; // ← Use system font while loading
}
```

---

## Quick Wins (Easy to Implement)

### 1. Compress Hero Image
```bash
# Reduce hero.jpg from 500KB to 150KB
# Command to run:
cd public/image
jpegoptim --max=75 hero.jpg  # 75% quality
```

### 2. Add Image Dimensions
Update all `<Image />` components with explicit width/height

### 3. Enable CSS Minification
Already enabled in next.config.mjs

### 4. Remove Unused Animations
Review ReviewSection - remove unnecessary animations

---

## Estimated Results After Implementation

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| FCP | 1.5s | **0.8s** | **47% faster** |
| LCP | 2.6s | **1.8s** | **31% faster** |
| Speed Index | 4.3s | **2.8s** | **35% faster** |
| Total Blocking Time | 0ms | 0ms | No change |
| CLS | 0 | 0 | No change |

**Combined improvement: 35-40% faster mobile page loads**

---

## Implementation Checklist

### Image Optimization
- [ ] Create mobile image versions (50% smaller)
- [ ] Update Hero.js with responsive images
- [ ] Add dimensions to all Image components
- [ ] Add sizes prop for responsive loading
- [ ] Set priority={true} only for above-fold images
- [ ] Test on mobile devices

### JavaScript Optimization
- [ ] Lazy load ReviewSection component
- [ ] Lazy load CardSection component
- [ ] Defer Framer Motion animation library
- [ ] Split blog page code
- [ ] Test bundle size reduction

### Font Optimization
- [ ] Add font-display: swap
- [ ] Test system font fallback
- [ ] Measure FOUT impact

### Testing
- [ ] Run Lighthouse on mobile
- [ ] Test on slow 3G network
- [ ] Test on low-end Android device
- [ ] Verify all animations still work
- [ ] Check Core Web Vitals

---

## Files to Modify (Priority Order)

1. **HIGH PRIORITY**
   - src/app/page.js (homepage - lazy load below-fold)
   - src/app/components/Hero.js (hero images)
   - src/app/components/CardSection.js (service images)

2. **MEDIUM PRIORITY**
   - src/app/components/ReviewSection.js (framer motion defer)
   - src/app/layout.js (font optimization)
   - src/app/blog/page.js (blog images)

3. **LOW PRIORITY**
   - src/app/blog/[slug]/page.js (detailed images)
   - src/app/about/page.js (about page images)

---

## Testing Commands

```bash
# Build and analyze
npm run build

# Test locally on mobile
npm run dev
# Then open http://localhost:3001 on mobile device

# Lighthouse audit
# Open Chrome DevTools > Lighthouse
# Run on mobile viewport

# Check bundle size
npm install -g webpack-bundle-analyzer
npm run build -- --analyze
```

---

## Expected Timeline

- **Phase 1 (Images):** 30 minutes - **0.6-0.8s improvement**
- **Phase 2 (JS Defer):** 20 minutes - **0.4-0.6s improvement**
- **Phase 3 (Fonts):** 10 minutes - **0.2-0.3s improvement**
- **Phase 4 (CSS):** 15 minutes - **0.1-0.2s improvement**

**Total: ~75 minutes for 35-40% improvement**

---

## Key Metrics to Monitor

### Lighthouse Mobile Scores
- Performance: Target 85+
- Accessibility: Target 90+
- Best Practices: Target 90+
- SEO: Target 95+

### Core Web Vitals
- LCP < 2.5s ✅
- FID < 100ms (will be 0ms after TBT fix)
- CLS < 0.1 ✅

---

## Resources

- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Web Vitals Guide](https://web.dev/vitals/)
- [Lighthouse Best Practices](https://developers.google.com/web/tools/lighthouse)

---

**Status: READY TO IMPLEMENT**
Start with Phase 1 (Image Optimization) for immediate gains!
