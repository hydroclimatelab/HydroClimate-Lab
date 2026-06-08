document.addEventListener('DOMContentLoaded', () => {
  const gg = document.getElementById('gallery-grid');
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCap = document.getElementById('lb-caption');

  // Load photos from GALLERY_DATA
  if (gg && typeof GALLERY_DATA !== 'undefined') {
    gg.innerHTML = '';
    GALLERY_DATA.forEach(g => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      
      const img = document.createElement('img');
      img.src = g.src; img.alt = g.caption; img.loading = 'lazy';
      img.onerror = () => {
        item.innerHTML = `<div class="gallery-placeholder">📷<span>${g.caption}</span></div>`;
      };
      
      const overlay = document.createElement('div');
      overlay.className = 'gallery-overlay';
      overlay.innerHTML = `<div class="gallery-caption">${g.caption}</div>`;
      
      item.appendChild(img); 
      item.appendChild(overlay);
      
      // Popup logic on click
      item.addEventListener('click', () => {
        if (img.naturalWidth > 0) { 
          lbImg.src = g.src; 
          lbCap.textContent = g.caption; 
          lb.classList.add('open'); 
        }
      });
      gg.appendChild(item);
    });
  }

  // Lightbox Close Functionality
  const lbClose = document.getElementById('lb-close');
  if (lbClose && lb) {
    lbClose.addEventListener('click', () => lb.classList.remove('open'));
    lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
  }

  // Navbar and Mobile Menu Handling
  document.getElementById('hamburger').addEventListener('click', () => document.getElementById('nav-links').classList.toggle('open'));
  window.addEventListener('scroll', () => document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40));
});