# 🧵 NEUTRL SPACE

**Minimalism meets meaning.**  
A fashion-forward, editorial-grade storefront built in New York for timeless digital expression.

---

## 🚀 Build & Run Instructions

To run the project locally:

```bash
git clone https://github.com/KESNIAABRAHAM/Neutrl-Space.git
cd Neutrl-Space
open index.html


# 🧵 NEUTRL SPACE

**Minimalism meets meaning.**  
A fashion-forward, editorial-grade storefront built in New York for timeless digital expression.

---

## 🚀 Build & Run Instructions

To run the project locally:

```bash
git clone https://github.com/KESNIAABRAHAM/Neutrl-Space.git
cd Neutrl-Space
open index.html


## 🎨 Design Philosophy

NEUTRL SPACE is built with editorial restraint and urban clarity. Every design choice reflects a balance of boldness and subtlety.

### Typography
- **Georgia** for headlines: timeless and refined  
- **System fonts** for body: clean, performant, and modern

### Layout
- **Flexbox & CSS Grid** for responsive structure  
- **Fixed navbar** with centered brand and icon-aligned edges  
- **Hero section** uses full-screen video with layered content for immersive entry

### Visual Hierarchy
- Hover effects on product cards and editorial images create tactile feedback  
- Subtle transitions and shadows add depth without clutter

---

## ♿ Accessibility & Performance

### Accessibility
- Interactive elements use `aria-label` for screen readers  
- Focus states styled with high-contrast outlines (`outline: 2px solid #F2EFEA`)  
- Semantic HTML structure: `<header>`, `<main>`, `<section>`, `<figure>`, `<form>`

### Performance
- Lazy loading on images and video sources  
- `font-display: swap` ensures text renders immediately  
- Responsive grid adapts from 1 to 4 columns based on screen width  
- Minimal DOM footprint via dynamic rendering of product cards

---

## 🧠 Technical Decisions & Architecture

### Why We Used JSON + JavaScript for Product Rendering

Instead of hardcoding product cards in HTML, we store product data in a JSON array and dynamically render it using JavaScript (`app.js`). This decision was made for several key reasons:

- **Scalability**: Easily update or expand product listings without editing HTML  
- **Separation of concerns**: Keeps data logic separate from layout and styling  
- **Performance**: Reduces initial HTML payload and speeds up page load  
- **Shopify compatibility**: Mirrors Shopify’s Liquid loop structure, making it easy to port

This architecture allows us to simulate Shopify’s dynamic product rendering while maintaining full control over layout and interactivity.

---

## 🛍️ Shopify Integration — `product.liquid` Snippet

The following Liquid snippet is designed to slot directly into Shopify’s `collection.liquid` or `product-grid.liquid` templates:

```liquid
{% for product in collection.products %}
  <div class="product-card">
    <div class="product-image">
      <img src="{{ product.featured_image | img_url: '600x' }}" alt="{{ product.title }}" class="primary" />
      {% if product.images.size > 1 %}
        <img src="{{ product.images[1] | img_url: '600x' }}" alt="{{ product.title }}" class="secondary" />
      {% endif %}
      <div class="hover-text">ADD TO CART</div>
    </div>
    <div class="product-info">
      <h3 class="product-title">{{ product.title }}</h3>
      <p class="product-price">{{ product.price | money }}</p>
    </div>
  </div>
{% endfor %}


## ✅ Why It Works

- Matches the structure of our JS-rendered product cards  
- Supports hover-based image swapping (`primary` and `secondary`)  
- Uses Shopify’s built-in filters (`img_url`, `money`) for optimized delivery  
- Easily integrates with Shopify’s cart and product logic

---

## 📫 Email Capture Strategy

- Styled form with accessible input and button  
- Success and error states styled with color-coded feedback  
- Ready to integrate with **Mailchimp**, **Klaviyo**, or **Shopify Forms**  
- Uses semantic `<form>` and `<input>` elements for easy backend integration

---

## ⚡ Performance Optimizations

- **Lazy loading**: All images and video sources use `loading="lazy"` to reduce initial load time  
- **Font-display: swap**: Ensures text renders immediately, even before custom fonts load  
- **CSS transitions**: Used sparingly for hover effects to maintain smooth interactions without jank  
- **Video filters**: `contrast(1.5)` and `brightness(1.05)` applied to hero video for clarity and cinematic feel

---

## 🧩 Modular CSS Strategy

Our CSS is structured for clarity and reusability:

- **Component-based classes**: `.product-card`, `.hero-content`, `.editorial-body`, etc.  
- **Responsive media queries**: Grid layout adapts at `600px`, `900px`, and `1200px` breakpoints  
- **Scoped styling**: Each section has its own visual identity while maintaining brand consistency  
- **Minimal global overrides**: Only `body`, `html`, and typography are globally styled

