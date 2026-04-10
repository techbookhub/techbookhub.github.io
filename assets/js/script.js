const booksData = [
  // Featured Books (3)
  {
    id: "f1", title: "Advanced IT Networking & Routing", category: "Networking & Infrastructure", cover: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400", isFeatured: true,
    fileType: "PDF", size: "15 MB", pages: 350, language: "English",
    topics: ["BGP & OSPF Implementation", "Subnetting Masterclass", "Cisco Router Configurations"],
    audienceLabel: "🔵 Professional", audience: ["Network Administrator", "Systems Engineer", "IT Infrastructure Specialist"],
    reviewInfo: "📝 Review Questions di setiap chapter beserta lab scenarios.",
    whyBuy: ["Studi kasus implementasi jaringan enterprise modern.", "Panduan best practice standar sertifikasi CCNA/CCNP."]
  },
  {
    id: "f2", title: "Mastering Python for Automation", category: "Programming & Development", cover: "https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?auto=format&fit=crop&q=80&w=400", isFeatured: true,
    fileType: "EPUB / PDF", size: "8 MB", pages: 280, language: "English",
    topics: ["Scripting Dasar", "REST API Integration", "Automasi Teks dan File", "Web Scraping"],
    audienceLabel: "🔵 Professional", audience: ["DevOps Engineer", "Backend Developer", "System Administrator"],
    reviewInfo: "📝 Review Questions di setiap chapter disertai kode referensi.",
    whyBuy: ["Menghemat waktu pengerjaan tugas server repetitif hingga 80%.", "Sangat relevan untuk cloud deployment modern."]
  },
  {
    id: "f3", title: "Cybersecurity Defense Strategies", category: "Security & Assurance", cover: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400", isFeatured: true,
    fileType: "PDF", size: "12 MB", pages: 420, language: "Bahasa Indonesia",
    topics: ["Information Assurance Framework", "Cryptography Standards", "Cyber Threat Intelligence", "Zero Trust Architecture"],
    audienceLabel: "🔴 Expert", audience: ["Security Analyst", "CISO", "Penetration Tester"],
    reviewInfo: "📝 Review Questions di setiap chapter + Real-World Attack Scenarios.",
    whyBuy: ["Dilengkapi studi kasus serangan siber terkini di Indonesia.", "Strategi preventif yang applicable untuk perusahaan Tbk."]
  },
  
  // Regular / Top 10 Books
  {
    id: "n1", title: "Linux Server Administration Base", category: "Networking & Infrastructure", cover: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=400", isFeatured: false,
    fileType: "PDF", size: "5 MB", pages: 210, language: "Bahasa Indonesia",
    topics: ["Terminal CLI Menengah", "Manajemen User & Hak Akses", "Service & Daemon (systemctl)"],
    audienceLabel: "🔵 Professional", audience: ["IT Support", "Junior SysAdmin"],
    reviewInfo: "📝 Review Questions di setiap chapter.",
    whyBuy: ["Fondasi solid yang sangat diperlukan semua pekerja IT.", "Bahasa penyampaian yang mudah dipahami pemula."]
  },
  {
    id: "p1", title: "Clean API Design", category: "Programming & Development", cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400", isFeatured: false,
    fileType: "PDF", size: "7 MB", pages: 190, language: "English",
    topics: ["RESTful Principles", "GraphQL Basics", "API Security (OAuth2)"],
    audienceLabel: "🔵 Professional", audience: ["Software Engineer", "Frontend Developer"],
    reviewInfo: "📝 Review Questions di setiap chapter.",
    whyBuy: ["Standard industri dari perusahaan FAANG.", "Membantu membuat arsitektur aplikasi yang scalable."]
  },
  {
    id: "s1", title: "Applied Cryptography Fundamentals", category: "Security & Assurance", cover: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=400", isFeatured: false,
    fileType: "EPUB", size: "4 MB", pages: 300, language: "English",
    topics: ["Symmetric & Asymmetric Keys", "Hashing Algorithms", "Digital Signatures"],
    audienceLabel: "🔴 Expert", audience: ["Security Engineer", "Backend Developer"],
    reviewInfo: "📝 Review Questions di setiap chapter.",
    whyBuy: ["Teori mendalam namun dengan implementasi kode matematis yang mudah dipahami."]
  },
  {
    id: "c1", title: "Cloud Native with Kubernetes", category: "Cloud & Virtualization", cover: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=400", isFeatured: false,
    fileType: "PDF", size: "18 MB", pages: 450, language: "English",
    topics: ["Docker Containers", "Kubernetes Pods & Services", "Helm Charts", "CI/CD Integration"],
    audienceLabel: "🔴 Expert", audience: ["DevOps Engineer", "Cloud Architect"],
    reviewInfo: "📝 Review Questions di setiap chapter.",
    whyBuy: ["Buku terlaris No.1 untuk persiapan CKA (Certified Kubernetes Administrator).", "Lebih dari 50+ latihan praktik lab command line."]
  }
];

const lynkUrl = "https://lynk.id/toko-buku";

// DOM Elements
const featuredContainer = document.getElementById('featured-container');
const booksContainer = document.getElementById('books-container');
const filterBtns = document.querySelectorAll('.filter-btn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModal');
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

function init() {
  if(featuredContainer && booksContainer) {
    renderBooks('All');
    setupFilters();
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

function renderBooks(filterCategory) {
  // Clear containers
  featuredContainer.innerHTML = '';
  booksContainer.innerHTML = '';
  
  let featuredCount = 0;
  let normalCount = 0;

  booksData.forEach(book => {
    // If filtering, skip books that don't match (unless 'All')
    if (filterCategory !== 'All' && book.category !== filterCategory) return;
    
    const cardHTML = `
      <div class="book-card">
        <div class="book-cover">
          <span class="book-tag">${book.category.split(' ')[0]}</span>
          <img src="${book.cover}" alt="${book.title}" loading="lazy">
        </div>
        <h3 class="book-title">${book.title}</h3>
        <div class="book-actions">
          <button class="btn-outline" onclick="openModal('${book.id}')">Details</button>
          <a href="${lynkUrl}" target="_blank" class="btn-buy">Beli</a>
        </div>
      </div>
    `;

    // Always place featured in featured section if it's 'All', else just put all in grid
    if (book.isFeatured && filterCategory === 'All') {
      featuredContainer.innerHTML += cardHTML;
      featuredCount++;
    } else {
      booksContainer.innerHTML += cardHTML;
      normalCount++;
    }
  });

  // Hide featured section if filtering
  document.getElementById('featured-section').style.display = filterCategory === 'All' ? 'block' : 'none';
  
  if(normalCount === 0 && (featuredCount === 0 || filterCategory !== 'All')){
      booksContainer.innerHTML = '<p style="color:var(--text-muted); grid-column: 1/-1; text-align:center;">Buku pada kategori ini belum tersedia.</p>';
  }
}

function setupFilters() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove active class
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add to clicked
      e.target.classList.add('active');
      // Render
      renderBooks(e.target.dataset.category);
    });
  });
}

function openModal(bookId) {
  const book = booksData.find(b => b.id === bookId);
  if(!book) return;

  // Populate Modal Fields
  document.getElementById('m-title').innerText = book.title;
  document.getElementById('m-category').innerText = book.category;
  document.getElementById('m-cover').src = book.cover;
  
  document.getElementById('m-file-name').innerText = book.title.replace(/\\s+/g, '_') + '.' + book.fileType.split(' ')[0].toLowerCase();
  document.getElementById('m-type').innerText = book.fileType;
  document.getElementById('m-size').innerText = book.size;
  document.getElementById('m-pages').innerText = book.pages + " Halaman";
  document.getElementById('m-lang').innerText = book.language;

  document.getElementById('m-audience-label').innerText = book.audienceLabel;
  document.getElementById('m-review').innerText = book.reviewInfo;

  // Lists
  const topicsUl = document.getElementById('m-topics');
  topicsUl.innerHTML = book.topics.map(t => '<li>' + t + '</li>').join('');
  
  const targetUl = document.getElementById('m-target');
  targetUl.innerHTML = book.audience.map(a => '<li>' + a + '</li>').join('');

  const whyUl = document.getElementById('m-why');
  whyUl.innerHTML = book.whyBuy.map(w => '<li>' + w + '</li>').join('');

  // Update Buy Link
  document.getElementById('m-buy-btn').href = lynkUrl;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // prevent background scrolling
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

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
