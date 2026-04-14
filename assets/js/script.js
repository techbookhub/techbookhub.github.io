const lynkUrl = "https://lynk.id/digitalitlibrary";
const formatterIDR = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 });

// Global States
let activeCategory = 'All';
let currentSearchQuery = '';
let currentLimit = 12;

// DOM Elements
const searchInput = document.getElementById('searchInput');
const loadMoreBtn = document.getElementById('load-more-btn');
const loadMoreContainer = document.getElementById('load-more-container');
const featuredContainer = document.getElementById('featured-container');
const booksContainer = document.getElementById('books-container');
const filterBtns = document.querySelectorAll('.filter-btn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModal');
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');
// Note: sharePopupOverlay & shareOptionsGrid are queried lazily inside functions
// to guarantee DOM is fully parsed at time of use.

function init() {
  if(featuredContainer && booksContainer) {
    renderBooks();
    setupFilters();
    setupSearchAndLoadMore();
  }
  setupModalEvents();
  setupMobileMenu();
  checkUrlForBook();
}

function checkUrlForBook() {
  const urlParams = new URLSearchParams(window.location.search);
  const bookId = urlParams.get('book');
  if (bookId) {
    openModal(bookId);
  }
}

function openSharePopup(bookId) {
  const sharePopupOverlay = document.getElementById('sharePopupOverlay');
  const shareOptionsGrid = document.getElementById('shareOptionsGrid');
  const book = booksData.find(b => b.id === bookId);
  if (!book || !sharePopupOverlay || !shareOptionsGrid) return;

  const url = encodeURIComponent(window.location.origin + window.location.pathname + '?book=' + bookId);
  const text = encodeURIComponent('Cek e-book "' + book.title + '" di TechBookHub! ');

  shareOptionsGrid.innerHTML = `
    <a class="share-option" href="https://api.whatsapp.com/send?text=${text}${url}" target="_blank" rel="noopener" aria-label="Bagikan ke WhatsApp">
      <div class="share-option-icon share-icon-wa">
        <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </div>
      <span>WhatsApp</span>
    </a>
    <a class="share-option" href="https://t.me/share/url?url=${url}&text=${text}" target="_blank" rel="noopener" aria-label="Bagikan ke Telegram">
      <div class="share-option-icon share-icon-tg">
        <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
      </div>
      <span>Telegram</span>
    </a>
    <a class="share-option" href="https://www.linkedin.com/sharing/share-offsite/?url=${url}" target="_blank" rel="noopener" aria-label="Bagikan ke LinkedIn">
      <div class="share-option-icon share-icon-li">
        <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </div>
      <span>LinkedIn</span>
    </a>
    <button class="share-option" id="share-ig-btn" aria-label="Bagikan ke Instagram">
      <div class="share-option-icon share-icon-ig">
        <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
      </div>
      <span>Instagram</span>
    </button>
    <button class="share-option" id="share-copy-btn" aria-label="Salin tautan">
      <div class="share-option-icon share-icon-copy">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      </div>
      <span>Salin Link</span>
    </button>
  `;

  // Instagram: copy URL then open Instagram
  const igBtn = document.getElementById('share-ig-btn');
  if (igBtn) {
    igBtn.addEventListener('click', () => {
      const rawUrl = window.location.origin + window.location.pathname + '?book=' + bookId;
      navigator.clipboard.writeText(rawUrl).then(() => {
        showToast('✅ Link disalin! Buka Instagram & bagikan di bio/story.');
        window.open('https://www.instagram.com/', '_blank');
      }).catch(() => showToast('❌ Gagal menyalin link.'));
    });
  }

  // Copy Link button
  const copyBtn = document.getElementById('share-copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const rawUrl = window.location.origin + window.location.pathname + '?book=' + bookId;
      navigator.clipboard.writeText(rawUrl).then(() => showToast('✅ Link berhasil disalin!'))
        .catch(() => showToast('❌ Gagal menyalin link.'));
    });
  }

  sharePopupOverlay.classList.add('active');
}

function closeSharePopup() {
  const sharePopupOverlay = document.getElementById('sharePopupOverlay');
  if (sharePopupOverlay) sharePopupOverlay.classList.remove('active');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = message;
    // Reset to base class first to re-trigger transitions cleanly
    toast.classList.remove('show');
    void toast.offsetWidth; // force reflow to restart animation
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 3000);
  }
}

function setupMobileMenu() {
  if(menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
    const navLinks = navList.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('active');
      });
    });
  }
}

// Utility: Debounce function to prevent render-blocking on typing
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function setupSearchAndLoadMore() {
  if(searchInput) {
    searchInput.addEventListener('input', debounce((e) => {
      currentSearchQuery = e.target.value.toLowerCase();
      currentLimit = 12; // Reset limit saat mencari
      renderBooks();
    }, 300));
  }
  if(loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      currentLimit += 12;
      renderBooks();
    });
  }
}

function createCardHTML(book) {
  // Bug #3 Fix: onerror fallback agar broken image tidak merusak layout grid
  const coverFallback = `this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2))'`;
  const imageSrc = book.coverPath || book.cover;
  const priceFormatted = book.price ? formatterIDR.format(book.price) : '';
  const originalPriceFormatted = book.originalPrice ? formatterIDR.format(book.originalPrice) : '';

  const priceHTML = book.originalPrice 
    ? `<div class="price-container" style="flex-direction: column; align-items: flex-start; margin-bottom:1rem;">
         <span class="original-price" style="margin:0;">${originalPriceFormatted}</span>
         <span class="discount-badge" style="margin-top:4px;">Disc. 75%</span>
         <p class="book-price" style="margin-top:8px; margin-bottom:0;">${priceFormatted}</p>
       </div>`
    : (priceFormatted ? `<p class="book-price">${priceFormatted}</p>` : '');

  return `
    <div class="book-card">
      <div class="book-cover">
        <span class="book-tag">${book.category.split(' ')[0]}</span>
        <img src="${imageSrc}" alt="${book.title}" loading="lazy" decoding="async" onerror="${coverFallback}">
      </div>
      <h3 class="book-title">${book.title}</h3>
      ${priceHTML}
      <div class="book-actions">
        <button class="btn-outline" onclick="openModal('${book.id}')">Details</button>
        <a href="${book.buyUrl || lynkUrl}" target="_blank" class="btn-buy">Beli</a>
      </div>
    </div>
  `;
}

function renderBooks() {
  featuredContainer.innerHTML = '';
  booksContainer.innerHTML = '';
  
  let featuredCount = 0;
  let featuredCards = '';   // Bug #1 Fix: string buffer untuk featured
  let normalBooks = [];

  booksData.forEach(book => {
    // 1. Filter Kategori
    if (activeCategory !== 'All' && book.category !== activeCategory) return;
    
    // 2. Filter Pencarian
    if (currentSearchQuery) {
      const isMatch = book.title.toLowerCase().includes(currentSearchQuery) || book.category.toLowerCase().includes(currentSearchQuery);
      if (!isMatch) return;
    }

    // 3. Pemisahan Featured vs Normal
    if (book.isFeatured && activeCategory === 'All' && !currentSearchQuery) {
      featuredCount++;
      featuredCards += createCardHTML(book); // Bug #1 Fix: akumulasi string dulu
    } else {
      normalBooks.push(book);
    }
  });

  // Bug #1 Fix: inject Featured sekaligus, bukan per iterasi
  featuredContainer.innerHTML = featuredCards;

  // Tampilkan atau sembunyikan section Featured
  const featuredSection = document.getElementById('featured-section');
  if(featuredSection) {
    featuredSection.style.display = (activeCategory === 'All' && !currentSearchQuery && featuredCount > 0) ? 'block' : 'none';
  }
  
  // Bug #1 Fix: Render Normal Books dengan string buffer — inject sekali
  const visibleBooks = normalBooks.slice(0, currentLimit);
  let cardsHTML = '';
  visibleBooks.forEach(b => { cardsHTML += createCardHTML(b); });
  booksContainer.innerHTML = cardsHTML;

  // Pesan Kosong
  if(visibleBooks.length === 0 && featuredCount === 0){
      booksContainer.innerHTML = '<p style="color:var(--text-muted); grid-column: 1/-1; text-align:center;">Buku tidak ditemukan.</p>';
  }

  // Tampilkan Load More jika masih sisa
  if(loadMoreContainer) {
    loadMoreContainer.style.display = (normalBooks.length > currentLimit) ? 'block' : 'none';
  }
}

function setupFilters() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeCategory = e.target.dataset.category;
      currentLimit = 12; // Reset Limit kembali ke 12 jika kategori berubah
      renderBooks();
    });
  });
}

function openModal(bookId) {
  const book = booksData.find(b => b.id === bookId);
  if(!book) return;

  document.getElementById('m-title').innerText = book.title;
  document.getElementById('m-category').innerText = book.category;
  document.getElementById('m-cover').src = book.coverPath || book.cover;
  
  const mPriceWrap = document.getElementById('m-price-wrap');
  if(mPriceWrap) {
    if (book.originalPrice && book.price) {
       mPriceWrap.innerHTML = `
         <div style="display:flex; flex-direction:column; align-items:flex-start;">
           <span class="original-price" style="margin:0;">${formatterIDR.format(book.originalPrice)}</span>
           <span class="discount-badge" style="margin-top:4px;">Disc. 75%</span>
         </div>
         <div class="m-price-tag" style="margin-top:8px;">${formatterIDR.format(book.price)}</div>
       `;
    } else {
       mPriceWrap.innerHTML = book.price ? `<div class="m-price-tag">${formatterIDR.format(book.price)}</div>` : '<div class="m-price-tag">Gratis / TBD</div>';
    }
  }
  
  const fileType = book.fileType || 'N/A';
  document.getElementById('m-file-name').innerText = book.title.replace(/\s+/g, '_') + '.' + fileType.split(' ')[0].toLowerCase();
  document.getElementById('m-type').innerText = fileType;
  document.getElementById('m-size').innerText = book.size;
  document.getElementById('m-pages').innerText = book.pages + " Halaman";
  document.getElementById('m-lang').innerText = book.language;

  // Render Samples Gallery
  const mSamples = document.getElementById('m-samples');
  if (mSamples) {
     if (book.sampleImages && book.sampleImages.length > 0) {
        // Feature: Sample image fallback
        const sampleFallback = `this.style.display='none'`;
        mSamples.innerHTML = book.sampleImages.map(src => `<img src="${src}" class="sample-img" alt="Sample from ${book.title}" loading="lazy" decoding="async" onerror="${sampleFallback}" onclick="openZoomModal('${src}')">`).join('');
     } else {
        mSamples.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem;">Belum ada capture sample untuk produk ini.</p>`;
     }
  }

  // Issue #8 Fix: inject class CSS dinamis berdasarkan audienceLabel
  const audienceDiv = document.getElementById('m-audience-label');
  if (audienceDiv) {
    const label = book.audienceLabel || '';
    let tagClass = '';
    if (label.includes('🟢') || label.toLowerCase().includes('beginner')) {
      tagClass = 'tag-beginner';
    } else if (label.includes('🔵') || label.toLowerCase().includes('professional')) {
      tagClass = 'tag-pro';
    } else if (label.includes('🔴') || label.toLowerCase().includes('expert') || label.toLowerCase().includes('advanced')) {
      tagClass = 'tag-expert';
    }
    audienceDiv.innerHTML = tagClass
      ? `<span class="${tagClass}">${label}</span>`
      : label;
  }
  document.getElementById('m-review').innerText = book.reviewInfo || '';


  const topicsUl = document.getElementById('m-topics');
  if(topicsUl) topicsUl.innerHTML = book.topics.map(t => '<li>' + t + '</li>').join('');
  
  const targetUl = document.getElementById('m-target');
  if(targetUl) targetUl.innerHTML = book.audience.map(a => '<li>' + a + '</li>').join('');

  const whyUl = document.getElementById('m-why');
  if(whyUl) whyUl.innerHTML = book.whyBuy.map(w => '<li>' + w + '</li>').join('');

  document.getElementById('m-buy-btn').href = book.buyUrl || lynkUrl;

  const shareBtn = document.getElementById('m-share-btn');
  if (shareBtn) {
    shareBtn.onclick = function() { openSharePopup(book.id); };
  }

  // Update URL without reloading
  const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?book=' + book.id;
  window.history.pushState({path:newUrl},'',newUrl);

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; 
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
  closeSharePopup(); // Auto-close share popup if open when modal closes
  
  // Clean up URL
  const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
  window.history.replaceState({path:cleanUrl},'',cleanUrl);
}

function setupModalEvents() {
  if(closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }
  if(modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if(e.target === modalOverlay) closeModal();
    });
  }
}

function openZoomModal(src) {
  const zoomModal = document.getElementById('zoomModal');
  const zoomedImage = document.getElementById('zoomedImage');
  if(zoomModal && zoomedImage) {
    zoomedImage.src = src;
    zoomModal.style.display = "block";
  }
}

function closeZoomModal() {
  const zoomModal = document.getElementById('zoomModal');
  if(zoomModal) {
    zoomModal.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  init();
  
  const closeZoomBtn = document.getElementById('closeZoomModal');
  if(closeZoomBtn) closeZoomBtn.addEventListener('click', closeZoomModal);
  
  const zoomModal = document.getElementById('zoomModal');
  if(zoomModal) {
    zoomModal.addEventListener('click', (e) => {
      if(e.target === zoomModal) closeZoomModal();
    });
  }

  // Handle browser 'Back' button to close modal
  window.addEventListener('popstate', (e) => {
    if (modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Close share popup via button or backdrop click
  const closeShareBtn = document.getElementById('closeSharePopup');
  if (closeShareBtn) closeShareBtn.addEventListener('click', closeSharePopup);
  const sharePopupOverlayEl = document.getElementById('sharePopupOverlay');
  if (sharePopupOverlayEl) {
    sharePopupOverlayEl.addEventListener('click', (e) => {
      if (e.target === sharePopupOverlayEl) closeSharePopup();
    });
  }

  // Handle 'Escape' key to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modalOverlay.classList.contains('active')) closeModal();
      if (sharePopupOverlay && sharePopupOverlay.classList.contains('active')) closeSharePopup();
      const zoomModal = document.getElementById('zoomModal');
      if (zoomModal && zoomModal.style.display === "block") closeZoomModal();
    }
  });
});
