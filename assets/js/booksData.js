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
