//Home hero section smooth scroll animation
document.addEventListener('DOMContentLoaded', () => {
  const cta = document.getElementById('cta');
  const nextSection = document.getElementById('editorial');

  cta.addEventListener('click', () => {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  });
});


//Rendering product cards via JSON
document.addEventListener('DOMContentLoaded', () => {
  fetch('data/products.json')
    .then(res => res.json())
    .then(products => {
      const grid = document.getElementById('products-grid');

      products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        card.innerHTML = `
          <div class="product-image">
            <img src="${product.primaryImage}" alt="${product.title}" class="primary" loading="lazy">
            ${product.secondaryImage ? `<img src="${product.secondaryImage}" alt="${product.title} alt" class="secondary" loading="lazy">` : ''}
            <div class ="hover-text">ADD TO CART</div>
            <span class="product-tag">${product.tag}</span>
          </div>    
          <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">${product.price}</p>
          </div>
        `;

        grid.appendChild(card);
      });
    })
    .catch(err => console.error('Error loading products:', err));
});

//Email Signup Logic
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('email-capture');
  const input = document.getElementById('email-input');
  const message = document.getElementById('email-message');

  // Check if already signed up
  if (localStorage.getItem('signedUp') === 'true') {
    form.style.display = 'none';
    message.className = "email-message success"
    message.textContent = 'You’re already signed up. Welcome back!'
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();

    // Simple email validation
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      message.className = "email-message error"
      message.textContent = 'Please enter a valid email address.';
      return;
    }

    // Persist flag and show success
    localStorage.setItem('signedUp', 'true');
    form.style.display = 'none';
    message.textContent = 'Thank you for joining The Reserve!';
    message.className = 'email-message success';
  });
});