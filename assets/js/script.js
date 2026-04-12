const lynkUrl = "https://lynk.id/toko-buku";
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

function init() {
  if(featuredContainer && booksContainer) {
    renderBooks();
    setupFilters();
    setupSearchAndLoadMore();
  }
  setupModalEvents();
  setupMobileMenu();
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

function setupSearchAndLoadMore() {
  if(searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.toLowerCase();
      currentLimit = 12; // Reset limit saat mencari
      renderBooks();
    });
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

  return `
    <div class="book-card">
      <div class="book-cover">
        <span class="book-tag">${book.category.split(' ')[0]}</span>
        <img src="${imageSrc}" alt="${book.title}" loading="lazy" onerror="${coverFallback}">
      </div>
      <h3 class="book-title">${book.title}</h3>
      ${priceFormatted ? `<p class="book-price">${priceFormatted}</p>` : ''}
      <div class="book-actions">
        <button class="btn-outline" onclick="openModal('${book.id}')">Details</button>
        <a href="${lynkUrl}" target="_blank" class="btn-buy">Beli</a>
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
  
  const mPrice = document.getElementById('m-price');
  if(mPrice) {
    mPrice.innerText = book.price ? formatterIDR.format(book.price) : 'Gratis / TBD';
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
        mSamples.innerHTML = book.sampleImages.map(src => `<img src="${src}" class="sample-img" alt="Sample from ${book.title}" onerror="${sampleFallback}">`).join('');
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

  document.getElementById('m-buy-btn').href = lynkUrl;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; 
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
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

document.addEventListener('DOMContentLoaded', init);
