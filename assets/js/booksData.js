const booksData = [
  {
    id: "live1", title: "ISC2 SSCP Official Study Guide - Third Edition", category: "Security & Assurance", cover: "", isFeatured: false,
    fileType: "PDF", size: "9.4 MB (9,410 KB)", pages: 819, language: "English",
    topics: [
      "Business Case for Information Security (Value Chain, Akuntabilitas, Policy & Governance)",
      "Information Security Fundamentals (CIA Triad, CIANA+PS, Privacy vs Security, Etika Profesional)",
      "Integrated Risk Management (Risk Assessment, BIA, Kill Chain, Information Classification)",
      "Operationalizing Risk Mitigation (OODA Loop, Vulnerability Assessment, Continuous Monitoring)",
      "Communications & Network Security (OSI Layer, TCP/IP, VPN, SDN, Wi-Fi, Bluetooth)",
      "Identity & Access Control (IAM, AAA, MFA, SSO, Zero Trust, Kerberos, RADIUS, TACACS+)",
      "Cryptography (Symmetric & Asymmetric, PKI, TLS, Blockchain, Digital Signature)",
      "Post-Quantum & Advanced Crypto (Homomorphic Encryption, Quantum Cryptography, AI & ML in Crypto)",
      "Hardware & Systems Security (Firmware, OS Vulnerabilities, Endpoint, MDM, BYOD, Malware)",
      "Applications, Data & Cloud Security (SDLC, DLP, Cloud Deployment, Edge/Fog Security)",
      "Incident Response & Recovery (IR Framework, MITRE ATT&CK, Evidence Gathering, Forensics)",
      "Business Continuity & Disaster Recovery (BC/DR Planning, Backup & Archive, Cloud Recovery)",
      "Cross-Domain Challenges (SOAR, DevSecOps, ICS/SCADA/IoT, Dark Web, AI/ML Security)",
      "OT & IoT Security (SCADA, Industrial Control Systems, Physical Security)",
      "Compliance & Legal (Regulasi, SLA, Legal & Regulatory Issues)"
    ],
    audienceLabel: "Professional | Expert",
    audience: [
      "Kandidat ujian ISC2 SSCP",
      "Security Analyst & Security Administrator",
      "SOC Analyst, Risk Analyst & Compliance Officer",
      "Network Engineer yang beralih ke bidang Security",
      "Profesional yang mempersiapkan diri menuju CISSP"
    ],
    reviewInfo: "Official Study Guide edisi ketiga untuk sertifikasi ISC2 SSCP dari organisasi sertifikasi cybersecurity paling bergengsi di dunia. Pendekatan unik berbasis Decision Assurance dan People Power menjadikan buku ini bukan sekadar panduan teknis, tetapi juga panduan membangun budaya keamanan di seluruh organisasi. Catatan : Disarankan sudah memiliki pengalaman kerja minimal 1 tahun di bidang IT Security",
    whyBuy: [
      "Assessment Test di awal buku",
      "Exam Essentials di setiap chapter",
      "Review Questions + Kunci Jawaban lengkap",
      "Domain Coverage penuh sesuai blueprint SSCP",
      "Framework eksklusif CIANA+PS dari ISC2"
    ],
    price: 240000,
    coverPath: "assets/images/books/isc2-sscp/cover/1775989251010_7700035.webp",
    sampleImages: ["assets/images/books/isc2-sscp/sample/1775989251402_7310970.webp"],
    buyUrl: "https://lynk.id/digitalitlibrary/l0mj1onnkgmz"
  },
  {
    id: "live2", title: "Docker Tutorial for Beginners Build, Ship and Run by Dennis Hutten", category: "Cloud & Virtualization", cover: "", isFeatured: false,
    fileType: "PDF", size: "7.49 MB", pages: 187, language: "English",
    topics: [
      "Docker Overview & Instalasi (Konsep dasar container, instalasi di Linux, Docker Hub)",
      "Images & Containers (Mengelola images, bekerja dengan containers, workflow dasar)",
      "Docker Architecture (Container & Hosts, konfigurasi, arsitektur internal Docker)",
      "Containers & Shells (Interaksi shell, Dockerfile, building images)",
      "Repository & Registry (Public repositories, private registries, managing ports)",
      "Web Server & Networking (Build web server Dockerfile, container linking, Docker networking)",
      "Storage & Volume Management (Docker storage, persistent data, volume binding)",
      "Stack Integration (Setting Node.js, MongoDB, NGINX, ASP.Net di dalam Docker)",
      "Docker Toolbox & Cloud (Toolbox setup, deploy ke cloud, Docker logging)",
      "Docker Compose (Multi-container apps, Compose file, orkestrasi sederhana)",
      "CI/CD & Kubernetes (Continuous Integration, arsitektur Kubernetes, cara kerja Kubernetes)"
    ],
    audienceLabel: "Beginner | Intermediate",
    audience: [
      "Developer yang baru mengenal containerization",
      "DevOps Engineer pemula yang ingin memahami Docker dari dasar",
      "Software Engineer yang ingin belajar deploy aplikasi dengan container",
      "Mahasiswa IT & CS yang mempelajari modern deployment workflow",
      "Sysadmin yang ingin beralih ke ekosistem container"
    ],
    reviewInfo: "Panduan praktis Docker untuk pemula yang membawa pembaca dari nol hingga mampu mem-build, ship, dan run aplikasi menggunakan container. Buku ini mencakup seluruh lifecycle Docker â€” mulai instalasi, manajemen images & containers, networking, storage, hingga orkestrasi dasar dengan Kubernetes dan integrasi CI/CD. Catatan : Tidak diperlukan pengalaman sebelumnya dengan Docker. Pemahaman dasar Linux & command line akan sangat membantu.",
    whyBuy: [
      "Penjelasan step-by-step setiap konsep Docker",
      "Contoh konfigurasi Node.js, MongoDB, NGINX, dan ASP.Net",
      "Panduan Docker Compose untuk multi-container apps",
      "Pengenalan Kubernetes Architecture untuk persiapan scale-up",
      "Materi CI/CD untuk alur kerja modern"
    ],
    price: 120000,
    coverPath: "assets/images/books/docker-tutor/cover/1776051576496_1047407.webp",
    sampleImages: ["assets/images/books/docker-tutor/sample/1776051576710_2061703.webp"],
    buyUrl: "https://lynk.id/digitalitlibrary/vpwov5drlq8v"
  },
  {
    id: "live3", title: "AI and the Future of Banking by Tony Boobier", category: "Data Science & AI", cover: "", isFeatured: false,
    fileType: "PDF", size: "2.43 MB", pages: 305, language: "English",
    topics: [
      "Lanskap Perbankan Modern (Definisi banking, uang digital, cashless society, fungsi bank masa depan)",
      "Imperatives & Strategi Perbankan (Business imperatives, customer centricity, digital transformation, risk reimagining)",
      "Data & Analytics Primer (Data management, hierarchy of analytics, cognitive analytics, location analytics)",
      "Banking Analytics Terapan (Customer insight, credit ratings, fraud detection, regulatory compliance, payments monitoring, portfolio management, derivative markets)",
      "Machine Learning, AI & Apps (Teori ML, data visualisation, voice & facial recognition, biometric systems, wealth management apps)",
      "AI & Brand dalam Perbankan (Brand equity, ekspektasi Millennial/Gen Z/Gen X, human-centred design, AI sebagai lifestyle manager)",
      "AI Leadership & Transformasi SDM (Augmented leadership, analytically infused leadership, evolusi peran karyawan bank, banking employee persona 2050)",
      "Bank of the Future (CafÃ© bank, virtual reality banking, 5 skenario bank masa depan: Full-Service / Digital / Disaggregated / Conversational / Collaborative Bank)",
      "Open Banking & Blockchain (Open banking framework, interlock AI-Blockchain, forex & interbank, blockchain di India & Afrika)",
      "Inovasi & Implementasi (Design thinking, hackathon & innovation labs, fintech ecosystem, blockages to innovation)",
      "Cybercrime & IT Resilience (Cyber risk management, fraud detection AI, anomaly detection, cyber law, safeguarding bank of the future)"
    ],
    audienceLabel: "Professional | Expert",
    audience: [
      "Banking Executive & C-Suite yang memimpin transformasi digital",
      "Manajer & Analis di divisi Risk, Compliance, dan Finance",
      "Fintech Founder & Product Manager yang membangun solusi perbankan",
      "Konsultan Manajemen & Strategi di sektor keuangan",
      "Akademisi, Peneliti, dan Mahasiswa S2/S3 bidang Finance & AI"
    ],
    reviewInfo: "Karya Tony Boobier, pakar AI & analytics industri keuangan global, yang membahas secara menyeluruh bagaimana kecerdasan buatan akan mendefinisikan ulang wajah perbankan â€” dari strategi korporat, pengalaman nasabah, hingga masa depan pekerjaan di sektor ini. Catatan : Buku ini bersifat strategis dan konseptual â€” bukan panduan teknis coding. Cocok dibaca oleh praktisi bisnis maupun teknologi di industri perbankan.",
    whyBuy: [
      "Bagaimana AI mengubah model bisnis bank secara fundamental?",
      "Seperti apa bank yang akan bertahan di era digital?",
      "Kompetensi apa yang dibutuhkan pemimpin dan karyawan bank masa depan?",
      "Bagaimana blockchain dan open banking menciptakan ekosistem baru?",
      "Ancaman cyber apa yang mengintai bank dan bagaimana mengatasinya?"
    ],
    price: 160000,
    coverPath: "assets/images/books/ai-and-future/cover/1776052489169_5509036.webp",
    sampleImages: ["assets/images/books/ai-and-future/sample/1776052489391_8901064.webp"],
    buyUrl: "https://lynk.id/digitalitlibrary/mq96gxjpok1v"
  },
  {
    id: "live4", title: "Data Science Handbook A Practical Approach by Kolla Bhanu Prakash", category: "Data Science & AI", cover: "", isFeatured: false,
    fileType: "PDF", size: "38.9 MB", pages: 472, language: "English",
    topics: [
      "Data Munging & Preprocessing (Filtering & selecting data, missing values, duplicates, concatenation, grouping & aggregation)",
      "Data Visualization (Line, bar & pie charts, plot formatting, annotations, time series viz, histogram, box plot, scatter plot)",
      "Matematika & Statistik untuk Data Science (Linear algebra, calculus, inferential statistics, hypothesis testing, ANOVA, NumPy, Pandas, SciPy)",
      "Machine Learning Fundamentals (Supervised & unsupervised learning, ML algorithm types, Factor Analysis, Principal Component Analysis / PCA)",
      "Outlier & Cluster Analysis (Extreme value analysis, multivariate outlier detection, DBSCAN, K-Means, hierarchical clustering, k-NN)",
      "Network Analysis (Graph objects dengan NetworkX, directed network analysis, simulasi & analisis social network)",
      "Algoritma Prediktif (Linear regression, logistic regression, Naive Bayes, Random Forest & ensemble models)",
      "Web Scraping & Visualisasi Interaktif (BeautifulSoup, data parsing, web scraping, Plotly charts, statistical charts, Plotly maps)",
      "Proyek Data Science Nyata (20 Proyek Lengkap) â€” Healthcare & Medical, Computer Vision, NLP & Audio, Recommender & Business"
    ],
    audienceLabel: "Beginner | Intermediate",
    audience: [
      "Mahasiswa S1/S2 Informatika, Statistik, dan bidang terkait",
      "Fresh Graduate yang ingin membangun portofolio Data Science",
      "Software Developer yang beralih ke bidang Data & ML",
      "Peneliti yang membutuhkan panduan praktis analisis data",
      "Profesional non-teknis yang ingin memahami workflow Data Science"
    ],
    reviewInfo: "Handbook komprehensif yang memadukan teori dan praktik Data Science dalam satu buku â€” mulai dari preprocessing data mentah, visualisasi, machine learning, hingga 20 proyek nyata siap portofolio. Catatan : Pemahaman dasar Python sangat dianjurkan sebelum membaca buku ini. Tidak diperlukan background matematika tingkat lanjut â€” semua konsep dijelaskan dari dasar.",
    whyBuy: [
      "Pendekatan hands-on dengan kode Python di setiap chapter",
      "20 proyek real-world dari domain medis, computer vision, NLP, hingga bisnis",
      "Mencakup seluruh pipeline Data Science end-to-end",
      "Library lengkap : NumPy, Pandas, SciPy, Scikit-learn, Plotly, NetworkX, BeautifulSoup",
      "Cocok sebagai referensi kerja sehari-hari maupun bahan belajar terstruktur"
    ],
    price: 200000,
    coverPath: "assets/images/books/data-science-handbook/cover/1776053309561_8102898.webp",
    sampleImages: ["assets/images/books/data-science-handbook/sample/1776053309857_3768782.webp"],
    buyUrl: "https://lynk.id/digitalitlibrary/oy9w42q2m4j6"
  },
  {
    id: "live5", title: "Cisco CCIE Routing & Switching v5.0 Official Cert Guide Volume 1", category: "Networking & Infrastructure", cover: "", isFeatured: false,
    fileType: "PDF", size: "14.1 MB", pages: 957, language: "English",
    topics: [
      "Ethernet & LAN Switching Fundamentals (RJ-45 wiring, autonegotiation, CSMA/CD, SPAN/RSPAN/ERSPAN, VSS, MEC)",
      "Virtual LAN & VLAN Trunking (VLAN config, Private VLAN, ISL & 802.1Q, VTP, Q-in-Q tunneling, PPPoE)",
      "Spanning Tree Protocol (802.1D STP, RSTP, MST/802.1s, PortFast, Root Guard, BPDU Guard, EtherChannel)",
      "IP Addressing & Subnetting (Classful & classless, VLSM, CIDR, NAT/PAT, IPv6, SLAAC, DHCPv6, dual-stack)",
      "IP Services (ARP, DHCP, HSRP/VRRP/GLBP, NTP, SNMP, Syslog, NetFlow, IP SLA, EEM, SSH)",
      "IP Forwarding & CEF (Process switching, fast switching, CEF, load sharing, Multilayer Switching, policy routing)",
      "RIPv2 & RIPng (Distance-vector basics, loop prevention, triggered updates, authentication, RIPng IPv6)",
      "EIGRP (Classic & wide metrics, DUAL FSM, Named Mode, stub routing, unequal-cost load balancing, authentication)",
      "OSPF (v2 & v3) (LSA types 1â€“5, DR/BDR, NBMA, stubby areas, virtual links, OSPFv3, graceful restart)",
      "IS-IS (OSI addressing, Level 1 & 2 routing, LSP & CSNP/PSNP, area design, authentication, IPv6)",
      "Route Redistribution & Advanced Routing (Route maps, prefix lists, mutual redistribution, route tags, PfR)",
      "Layer 3 Troubleshooting (Systematic L3 troubleshooting process, IP routing diagnosis)"
    ],
    audienceLabel: "Expert",
    audience: [
      "Kandidat ujian CCIE Routing & Switching v5.0 (Lab Exam)",
      "Senior Network Engineer & Network Architect",
      "CCNP yang mempersiapkan diri naik ke level CCIE",
      "Network Consultant di lingkungan enterprise & service provider",
      "NOC/SOC Engineer yang menangani infrastruktur Cisco skala besar"
    ],
    reviewInfo: "Official Certification Guide resmi dari Cisco Press untuk ujian paling bergengsi di dunia jaringan â€” CCIE Routing & Switching v5.0. Volume 1 ini mencakup fondasi terdalam LAN switching dan IP routing, dengan kedalaman teknis yang jauh melampaui level CCNP. Catatan: Buku ini diasumsikan pembaca sudah menguasai materi setara CCNP. Disarankan memiliki pengalaman kerja minimal 3â€“5 tahun di bidang networking.",
    whyBuy: [
      "\"Do I Know This Already?\" Quiz di awal setiap chapter",
      "Foundation Summary & Memory Builders di akhir chapter",
      "Fill-In Key Tables dari memori untuk latihan recall",
      "Practice exam via Pearson Cert Practice Test Engine",
      "Appendix B: CCIE Exam Updates untuk materi update ujian"
    ],
    price: 240000,
    coverPath: "assets/images/books/cisco-ccie-1/cover/1776059333247_5520275.webp",
    sampleImages: ["assets/images/books/cisco-ccie-1/sample/1776059333555_1605100.webp"],
    buyUrl: "https://lynk.id/digitalitlibrary/o3n47jl1v04w"
  },
  {
    id: "live6", title: "Cisco CCIE Routing & Switching v5.0 Official Cert Guide Volume 2", category: "Networking & Infrastructure", cover: "", isFeatured: false,
    fileType: "PDF", size: "7.94 MB", pages: 846, language: "English",
    topics: [
      "BGP Fundamentals (iBGP & eBGP neighbor relationships, BGP messages & states, route injection, route reflectors, MP-BGP)",
      "BGP Routing Policies & Path Selection (NLRI filtering, BGP decision process 11 langkah, Weight, LOCAL_PREF, MED, communities)",
      "QoS â€” Classification & Marking (IP Precedence, DSCP, AF/EF/CS PHB, MQC framework, NBAR, CB Marking, AutoQoS)",
      "QoS â€” Congestion Management & Avoidance (CBWFQ, LLQ, WRED, MDRR, LAN switch queuing)",
      "QoS â€” Shaping, Policing & LFI (GTS, CB Shaping, CB Policing single/dual-rate, CAR, HQF)",
      "Wide-Area Networks (HDLC, PPP & LCP, Multilink PPP, LFI, PPPoE, Metro-Ethernet, VPLS)",
      "IP Multicast â€” Fundamentals (IGMP v1/v2/v3, CGMP, IGMP snooping, RGMP, IGMP filtering & proxy)",
      "IP Multicast â€” Routing (PIM-DM, PIM-SM, Auto-RP, BSR, Anycast RP, MSDP, SSM, IPv6 multicast)",
      "Device & Network Security (AAA, port security, DAI, DHCP snooping, 802.1X/EAP, Zone-Based Firewall, DMVPN)",
      "Tunneling Technologies (GRE tunnels, DMVPN hub-and-spoke & spoke-to-spoke, L2TPv3, AToM, VPLS, GET VPN, NAT64)",
      "MPLS & MPLS VPN (MPLS forwarding, FIB & LFIB, LDP, MPLS VPN control & data plane, VRF, MP-BGP, route distinguisher)"
    ],
    audienceLabel: "Expert",
    audience: [
      "Kandidat ujian CCIE Routing & Switching v5.0 (Lab Exam)",
      "Senior Network / WAN Engineer & Network Architect",
      "CCNP yang melanjutkan studi ke level CCIE",
      "Network Engineer yang menangani BGP, MPLS, atau QoS di ISP / enterprise",
      "Network Consultant yang membutuhkan referensi mendalam topik advanced"
    ],
    reviewInfo: "Official Certification Guide Volume 2 dari Cisco Press untuk CCIE R&S v5.0 â€” melengkapi Volume 1 dengan topik-topik advanced yang menjadi pembeda antara engineer biasa dan kandidat CCIE: BGP end-to-end, QoS enterprise, IP Multicast, keamanan jaringan, tunneling, dan MPLS VPN. Catatan: Volume 2 adalah kelanjutan langsung dari Volume 1. Sangat disarankan membaca keduanya untuk persiapan CCIE Lab Exam yang komprehensif.",
    whyBuy: [
      "\"Do I Know This Already?\" Quiz di awal setiap chapter",
      "Foundation Summary & Memory Builders di akhir chapter",
      "Fill-In Key Tables dari memori untuk latihan recall",
      "Practice exam via Pearson Cert Practice Test Engine",
      "Appendix B: CCIE Exam Updates untuk materi update ujian"
    ],
    price: 240000,
    coverPath: "assets/images/books/cisco-ccie-2/cover/1776060137681_3662731.webp",
    sampleImages: ["assets/images/books/cisco-ccie-2/sample/1776060137973_1546368.webp"],
    buyUrl: "https://lynk.id/digitalitlibrary/l6jv0gk0g679"
  },
  {
    id: "live7", title: "Cisco CCNP and CCIE Enterprise Core (ENCOR) 350-401 Official Cert Guide", category: "Networking & Infrastructure", cover: "", isFeatured: false,
    fileType: "PDF", size: "53.6 MB", pages: 1073, language: "English",
    topics: [
      "Packet Forwarding & Switching Fundamentals (Layer 2 & 3 forwarding, CEF, TCAM, distributed forwarding, SSO)",
      "Spanning Tree Protocol STP & RSTP (802.1D STP, RSTP, root bridge election, port states & roles, convergence)",
      "Advanced STP & MST (Root Guard, PortFast, BPDU Guard & Filter, Loop Guard, UDLD, MST/802.1s)",
      "VLAN Trunking, VTP & EtherChannel (DTP, EtherChannel/LACP/PAgP, load balancing)",
      "EIGRP (Autonomous systems, topology table, DUAL, wide metrics, load balancing, route summarization)",
      "OSPF & OSPFv3 (DR/BDR, LSA types 1â€“3, inter-area summarization, route filtering, OSPFv3 IPv4/IPv6)",
      "BGP & Advanced BGP (iBGP/eBGP, path attributes, communities, BGP best path 12 langkah, multihoming)",
      "IP Multicast (IGMP v2/v3, IGMP snooping, PIM-DM & PIM-SM, RPF check, Auto-RP, BSR)",
      "QoS (Classification & marking, DSCP/AF/EF PHB, policing & shaping, CBWFQ, LLQ, WRED)",
      "Overlay & Tunneling (GRE, IPsec IKEv1/IKEv2, site-to-site VPN, DMVPN, FlexVPN, LISP, VXLAN)",
      "Wireless â€” Signals, Infrastructure & Roaming (RF theory, MIMO, autonomous vs lightweight AP, WLC, roaming)",
      "Fabric Technologies (SD-Access architecture, Cisco DNA Center, SD-WAN: vManage/vSmart/vBond/vEdge)",
      "Network Assurance (SNMP, syslog, NetFlow, SPAN/RSPAN/ERSPAN, IP SLA, DNA Center Assurance)",
      "Secure Network Access Control (Cisco ISE, 802.1X, TrustSec, MACsec, NGFW, Umbrella, Stealthwatch)",
      "Network Programmability (REST API, JSON & XML, YANG, NETCONF, RESTCONF, Python, Ansible)"
    ],
    audienceLabel: "Professional | Expert",
    audience: [
      "Kandidat ujian CCNP Enterprise (ujian core ENCOR 350-401)",
      "Kandidat CCIE Enterprise Infrastructure & CCIE Enterprise Wireless",
      "Senior Network Engineer yang ingin upgrade dari CCNA",
      "Network Architect yang membutuhkan referensi modern enterprise networking",
      "Engineer yang ingin memahami SD-Access, SD-WAN, dan network automation"
    ],
    reviewInfo: "Official Certification Guide dari Cisco Press untuk ujian core ENCOR 350-401 â€” satu-satunya ujian yang menjadi syarat wajib untuk semua jalur CCNP Enterprise maupun pintu masuk CCIE Enterprise. Mencakup seluruh domain: routing & switching klasik, wireless, overlay network, keamanan, SD-Access & SD-WAN, hingga programmability dan otomasi jaringan. Catatan: Diasumsikan pembaca sudah menguasai materi setara CCNA. Disarankan memiliki pengalaman kerja minimal 2â€“3 tahun di bidang networking.",
    whyBuy: [
      "\"Do I Know This Already?\" Quiz di awal setiap chapter",
      "Exam Preparation Tasks & Foundation Summary per chapter",
      "Glossary lengkap lebih dari 200 istilah teknis",
      "Practice exam via Pearson Test Prep (online & offline)",
      "Appendix B: ENCOR Exam Updates untuk materi terkini"
    ],
    price: 240000,
    coverPath: "assets/images/books/cisco-ccnp-encor/cover/1776061104217_1263758.webp",
    sampleImages: ["assets/images/books/cisco-ccnp-encor/sample/1776061104498_6587587.webp"],
    buyUrl: "https://lynk.id/digitalitlibrary/e8p2loredn50"
  },
  {
    id: "live8", title: "Cisco CCNP and CCIE Security Core (SCOR) 350-701 Official Cert Guide 2nd Edition", category: "Networking & Infrastructure", cover: "", isFeatured: false,
    fileType: "PDF", size: "78.6 MB", pages: 2216, language: "English",
    topics: [
      "Cybersecurity Fundamentals (NIST Framework, threat actors, OWASP Top 10, CVSS, SSVC, incident response lifecycle)",
      "Kriptografi (Symmetric & asymmetric, hashing, PKI, X.509v3, TLS/SSL, IPsec, post-quantum cryptography)",
      "SDN Security & Network Programmability (Cisco ACI, VXLAN, DNA Center, REST API, YANG, NETCONF, RESTCONF)",
      "AAA & Identity Management (MFA, Duo Security, Zero Trust, SSO, Cisco ISE profiling & posture, TrustSec, pxGrid)",
      "Network Visibility & Segmentation (NetFlow, DDoS mitigation, Cisco Secure Network Analytics, SGT, SXP)",
      "Infrastructure Security (Layer 2 security, NFP: management/control/data plane, CoPP, routing protocol auth)",
      "Cisco Secure Firewall (ASA, FTD, NGIPS, FMC, FDM, Cisco Defense Orchestrator, HA & clustering)",
      "VPN & Tunneling (IPsec IKEv1/IKEv2, SSL VPN, DMVPN, GETVPN, FlexVPN, Cisco Secure Client, SD-WAN)",
      "Cloud Security (DevSecOps, containers, Docker, Kubernetes, Cisco Umbrella, Cisco XDR, Cisco Secure Workload)",
      "Content Security (Cisco Secure Web Appliance, WCCP, Cisco Secure Email/ESA, DLP, DKIM)",
      "Endpoint Protection & Detection (EDR, Cisco Secure Endpoint/AMP, outbreak control, Cisco Threat Response)"
    ],
    audienceLabel: "Professional | Expert",
    audience: [
      "Kandidat ujian CCNP Security (ujian core SCOR 350-701)",
      "Kandidat CCIE Security (qualifying exam)",
      "Network Security Engineer yang ingin upgrade ke level senior",
      "SOC Analyst & Security Architect di lingkungan enterprise",
      "Engineer yang ingin menguasai ekosistem Cisco Security end-to-end"
    ],
    reviewInfo: "Official Certification Guide edisi ke-2 dari Cisco Press untuk ujian core SCOR 350-701 â€” membuka jalur CCNP Security sekaligus menjadi qualifying exam untuk CCIE Security. Edisi terbaru mencakup Cisco XDR, Cisco Secure Firewall generasi terbaru, cloud security modern, serta DevSecOps dan container security. Catatan: Diperlukan pemahaman dasar networking setara CCNA Security atau pengalaman kerja minimal 1â€“2 tahun di bidang keamanan jaringan.",
    whyBuy: [
      "\"Do I Know This Already?\" Quiz di awal setiap chapter",
      "Review Questions + Define Key Terms per chapter",
      "Foundation Topics mendalam dengan contoh konfigurasi nyata",
      "Hands-on activities untuk persiapan lab exam CCIE Security",
      "Glossary komprehensif ratusan istilah cybersecurity & Cisco"
    ],
    price: 280000,
    coverPath: "assets/images/books/cisco-ccnp-scor/cover/1776062136801_6728229.webp",
    sampleImages: ["assets/images/books/cisco-ccnp-scor/sample/1776062137101_9152486.webp"],
    buyUrl: "https://lynk.id/digitalitlibrary/rpvnr4gzgj9l"
  },
  {
    id: "live9", title: "Cisco CCNP Enterprise Advanced Routing (ENARSI) 300-410 Official Cert Guide", category: "Networking & Infrastructure", cover: "", isFeatured: false,
    fileType: "PDF", size: "151 MB", pages: 1100, language: "English",
    topics: [
      "IPv4/IPv6 Addressing & Routing Review (DHCP troubleshooting, IPv6 SLAAC/DHCPv6, static routes IPv4 & IPv6)",
      "EIGRP & Advanced EIGRP (Classic & named mode, neighbor adjacencies, authentication, summarization, route filtering)",
      "Troubleshooting EIGRP IPv4 & IPv6 (Neighbor adjacency failures, autosummarization, EIGRPv6 â€” + 5 Trouble Tickets)",
      "OSPF & Advanced OSPF (DR/BDR, LSA types 1â€“7, stubby areas, NSSA, virtual links, path selection)",
      "Troubleshooting OSPFv2 & OSPFv3 (Neighbor failures, MTU mismatch, OSPFv3 address families â€” + 6 Trouble Tickets)",
      "BGP & Advanced BGP (iBGP/eBGP, route reflectors, confederations, communities, MP-BGP IPv6)",
      "BGP Path Selection (12 langkah: Weight â†’ Local Pref â†’ AIGP â†’ AS_PATH â†’ Origin â†’ MED â†’ eBGP over iBGP)",
      "Troubleshooting BGP (Neighbor adjacency, missing routes, path selection debugging â€” + 4 Trouble Tickets)",
      "Route Maps & Conditional Forwarding (ACL & prefix list, Policy-Based Routing/PBR, local PBR)",
      "Route Redistribution & Troubleshooting (Seed metrics, routing loops, route maps â€” + 4 Trouble Tickets)",
      "VRF, MPLS & MPLS Layer 3 VPN (VRF-Lite, LDP, label switching, MPLS VPN control & data plane)",
      "DMVPN â€” Konfigurasi & Troubleshooting (GRE tunnels, NHRP, Phase 1/2/3, hub redundancy, IPv6 DMVPN)",
      "Securing DMVPN Tunnels (IPsec IKEv2, transform set, tunnel protection, pre-shared key, DPD)",
      "Infrastructure Security (AAA troubleshooting, uRPF, CoPP, IPv6 First-Hop Security: RA Guard, DHCPv6 Guard)",
      "Device Management & Troubleshooting Tools (SNMP, IP SLA, NetFlow, BFD, Cisco DNA Center Assurance)"
    ],
    audienceLabel: "Professional",
    audience: [
      "Kandidat ujian CCNP Enterprise concentration ENARSI 300-410",
      "Network Engineer yang menangani routing & WAN tingkat lanjut",
      "CCNA holder yang mempersiapkan diri naik ke CCNP Enterprise",
      "NOC / Network Support Engineer yang sering troubleshoot routing issues",
      "Senior Network Engineer yang membutuhkan referensi mendalam EIGRP, OSPF, BGP, MPLS, dan DMVPN"
    ],
    reviewInfo: "Official Certification Guide dari Cisco Press untuk ujian ENARSI 300-410 â€” ujian spesialisasi advanced routing yang melengkapi ENCOR 350-401 menuju gelar CCNP Enterprise. Setiap protokol dibahas dalam dua chapter: fondasi + troubleshooting, dengan lebih dari 30 Trouble Tickets skenario nyata dan solusi lengkap. Catatan: Diperlukan penguasaan materi setara CCNA atau lulus ujian ENCOR 350-401. Buku ini sangat kaya materi troubleshooting â€” cocok juga sebagai referensi kerja harian.",
    whyBuy: [
      "\"Do I Know This Already?\" Quiz di awal setiap chapter",
      "Review All Key Topics & Define Key Terms per chapter",
      "Command Reference to Check Your Memory per chapter",
      "30+ Trouble Tickets dengan topologi, analisis, dan solusi lengkap",
      "Appendix B: ENARSI Exam Updates untuk materi terkini"
    ],
    price: 240000,
    coverPath: "assets/images/books/cisco-ccnp-enarsi/cover/1776062913266_8329607.webp",
    sampleImages: ["assets/images/books/cisco-ccnp-enarsi/sample/1776062913541_1352847.webp"],
    buyUrl: "https://lynk.id/digitalitlibrary/goy91wyqp3lw"
  },
  {
    id: "live10", title: "Cisco CCNP Enterprise Design (ENSLD) 300-420 Official Cert Guide", category: "Networking & Infrastructure", cover: "", isFeatured: false,
    fileType: "PDF", size: "38.2 MB", pages: 1227, language: "English",
    topics: [
      "IPv4 Design (VLSM, NAT, hierarchical IP address design, route summarization, DHCP, DNS, ARP)",
      "IPv6 Design (Address types, SLAAC, DHCPv6, IPv4-to-IPv6 migration: dual-stack, 6to4, 6RD, ISATAP, NAT64)",
      "Routing Protocol Design â€” EIGRP & IS-IS (Stub routers, variance, DUAL, EIGRPv6, IS-IS metrics, area design)",
      "OSPF, BGP & Route Manipulation (OSPFv2/v3 area design, BGP route reflectors, confederations, redistribution, VRF)",
      "IP Multicast & Network Management (IGMP, PIM-SM, Auto-RP, BIDIR-PIM, SNMP v1/v2/v3, NetFlow, syslog)",
      "Enterprise LAN Design (Hierarchical model access/distribution/core, VSS, EtherChannel, STP design, PortFast, PoE)",
      "Advanced Enterprise Campus Design (HA redundancy: FHRP, server & link redundancy, large campus QoS)",
      "WAN Design (MPLS L3 VPN, Metro Ethernet, DWDM, SD-WAN edge, IPsec, DMVPN, GETVPN, VPLS)",
      "WAN Availability & QoS (Single/multi-homed MPLS, hybrid WAN, DiffServ, IntServ, LLQ, CBWFQ, link efficiency)",
      "SD-Access Design (Underlay/overlay, fabric roles: access/border/control plane, segmentation, ISE integration)",
      "SD-WAN Design (vManage, vSmart, vBond, OMP, ZTP onboarding, application-aware routing, QoS, VPN segmentation)",
      "Network Automation & Programmability (REST API, YANG, NETCONF, RESTCONF, model-driven telemetry)"
    ],
    audienceLabel: "Professional | Expert",
    audience: [
      "Kandidat ujian CCNP Enterprise concentration ENSLD 300-420",
      "Network Architect & Network Designer di lingkungan enterprise",
      "Senior Network Engineer yang ingin upgrade ke peran desain jaringan",
      "Pre-Sales / Solutions Architect berbasis Cisco",
      "Network Consultant yang merancang solusi LAN, WAN, SD-Access & SD-WAN"
    ],
    reviewInfo: "Official Certification Guide dari Cisco Press untuk ujian ENSLD 300-420 â€” ujian spesialisasi desain jaringan enterprise yang melengkapi ENCOR 350-401 menuju gelar CCNP Enterprise. Buku dengan 1.227 halaman ini adalah referensi desain jaringan enterprise paling komprehensif dari Cisco Press, mencakup addressing, routing, LAN, WAN, SD-Access, SD-WAN, multicast, hingga network automation. Catatan: Buku ini fokus pada DESAIN dan PERENCANAAN â€” bukan troubleshooting operasional. Sangat cocok sebagai referensi arsitek jaringan dalam proyek enterprise skala besar.",
    whyBuy: [
      "\"Do I Know This Already?\" Quiz di awal setiap chapter",
      "Review All Key Topics, Define Key Terms & Q&A per chapter",
      "Memory Tables & Study Planner online untuk persiapan terstruktur",
      "Practice exam via Pearson Test Prep (online & offline)",
      "Chapter 14: Exam Updates untuk materi ujian terkini"
    ],
    price: 240000,
    coverPath: "assets/images/books/cisco-ensld/cover/1776064046901_6031350.webp",
    sampleImages: ["assets/images/books/cisco-ensld/sample/1776064047185_3451827.webp"],
    buyUrl: "https://lynk.id/digitalitlibrary/oqd426re5v4k"
  },
  {
    id: "live11", title: "ITIL 4 Foundation Official Study Guide", category: "Security & Assurance", cover: "", isFeatured: false,
    fileType: "PDF", size: "3.18 MB", pages: 260, language: "English",
    topics: [
      "Key Concepts of Service Management (Value & value co-creation, service providers & consumers, products & services, outcomes, costs, risks, utility & warranty)",
      "The Four Dimensions of Service Management (Organizations & people, information & technology, partners & suppliers, value streams & processes, PESTLE)",
      "The ITIL Service Value System / SVS (SVS overview, opportunity & demand, value output, governance in SVS)",
      "The 7 ITIL Guiding Principles (Focus on value, start where you are, progress iteratively with feedback, collaborate, think holistically, keep it simple, optimize and automate)",
      "Service Value Chain / SVC (Plan, Improve, Engage, Design & Transition, Obtain/Build, Deliver & Support â€” 6 aktivitas inti value stream)",
      "Continual Improvement (7 langkah continual improvement model, kaitan dengan guiding principles & semua praktik ITIL)",
      "General Management Practices â€” 14 Praktik (Architecture management, continual improvement, information security management, knowledge management, project management, risk management, dll.)",
      "Service Management Practices â€” 17 Praktik (Availability management, change control, incident management, problem management, service desk, service level management, dll.)",
      "Technical Management Practices â€” 3 Praktik (Deployment management, infrastructure & platform management, software development & management)"
    ],
    audienceLabel: "Beginner | Intermediate",
    audience: [
      "Kandidat ujian sertifikasi ITIL 4 Foundation",
      "IT Manager & Service Delivery Manager yang ingin memahami framework modern",
      "IT Support & Helpdesk yang ingin naik ke level Service Management",
      "Project Manager & Business Analyst di lingkungan IT",
      "DevOps & Agile practitioner yang ingin memahami konteks ITSM",
      "Profesional non-IT (HR, Finance, Operations) yang bekerja di organisasi berbasis ITIL"
    ],
    reviewInfo: "Publikasi resmi ITIL 4 Foundation dari AXELOS â€” badan standar IT Service Management global yang dipercaya oleh jutaan profesional di lebih dari 180 negara. ITIL 4 mengintegrasikan pendekatan Agile, DevOps, dan Lean ke dalam framework manajemen layanan IT modern, dengan fokus pada value co-creation dan 34 praktik manajemen yang fleksibel. Catatan: Tidak diperlukan pengalaman IT sebelumnya. Buku ini adalah publikasi resmi dari AXELOS â€” cocok sebagai referensi ujian sekaligus panduan implementasi ITIL 4 di organisasi.",
    whyBuy: [
      "Penjelasan resmi semua konsep & terminologi ITIL 4",
      "Deskripsi lengkap 34 praktik manajemen",
      "Model Four Dimensions & Service Value Chain",
      "7 Guiding Principles sebagai panduan keputusan universal",
      "Referensi standar untuk persiapan ujian ITIL 4 Foundation"
    ],
    price: 200000,
    coverPath: "assets/images/books/itil-foundation/cover/1775983771416_9879946.webp",
    sampleImages: ["assets/images/books/itil-foundation/sample/1775983771710_5469076.webp"],
    buyUrl: "https://lynk.id/digitalitlibrary/783lolkoo6op"
  },
  {
    id: "live12", title: "Blockchain Engineering Playbook 2024", category: "Programming & Development", cover: "", isFeatured: false,
    fileType: "PDF", size: "4.02 MB", pages: 203, language: "English",
    topics: [
      "Blockchain Fundamentals (Nodes, mining, types: public/private/consortium, consensus: PoW/PoS/DPoS/BFT, forks, blockchain bridges, merged mining)",
      "Blockchain Addressing, Wallets & Record-keeping (Wallet types: hot/cold/custodial, UTXO vs account-based, asset tokenization: fungible & non-fungible tokens)",
      "Smart Contracts & Use Cases (Smart contract fundamentals, deployment lifecycle, DeFi, supply chain, identity, real estate, healthcare, voting)",
      "Blockchain APIs (API integration patterns, on-chain & off-chain data access, interacting with nodes via RPC & REST)",
      "Network Security & Privacy (51% attack, Sybil, eclipse, double-spend, ZKP, mixing, confidential transactions)",
      "Node Maintenance & Optimization (Data storage & management, performance tuning, backup & disaster recovery)",
      "Platform Deep-Dive â€” Bitcoin (UTXO model, mining, SegWit, Lightning Network, Bitcoin scripting)",
      "Platform Deep-Dive â€” Ethereum (EVM, account model, gas & fee mechanism, Solidity, PoS post-Merge, Layer 2 overview)",
      "Platform Deep-Dive â€” Hyperledger (Fabric: peers, orderers, channels, chaincode, permissioned blockchain, enterprise deployment)",
      "Blockchain & Web3 Tech Stack (Web3.js/Ethers.js, wallet integration, nodes, indexers, IPFS, oracles/Chainlink, full Web3 stack)",
      "ChatGPT Super Prompt Templates (Ready-to-use prompts untuk smart contract development, security audit, tokenomics design, whitepaper drafting)",
      "Interview Questions & Quiz (180+ interview questions untuk blockchain engineer roles, quiz & answer key)"
    ],
    audienceLabel: "Intermediate | Professional",
    audience: [
      "Blockchain Engineer & Smart Contract Developer",
      "Web3 Developer yang ingin memahami infrastruktur blockchain secara mendalam",
      "Backend / Full-Stack Developer yang beralih ke Web3",
      "DevOps / Infrastructure Engineer yang mengelola blockchain nodes",
      "Tech Lead & Solutions Architect yang merancang sistem berbasis blockchain",
      "Kandidat interview posisi Blockchain Engineer di startup Web3 & enterprise"
    ],
    reviewInfo: "Playbook engineering blockchain paling praktis dan terkini untuk tahun 2024, mencakup seluruh spektrum: dari fondasi konseptual, keamanan node, hingga implementasi nyata di Bitcoin, Ethereum, Hyperledger, Multichain, dan HYFI. Edisi 2024 mencakup perkembangan terbaru: post-Merge Ethereum, L2, ZKP, dan dilengkapi ChatGPT Super Prompt Templates siap pakai serta 180+ Interview Questions. Catatan: Pemahaman dasar pemrograman (Python/JavaScript/Solidity) sangat dianjurkan. Konsep teknis dijelaskan dari dasar.",
    whyBuy: [
      "Edisi 2024 â€” mencakup post-Merge Ethereum, Layer 2, dan ZKP terbaru",
      "Mencakup 5 platform blockchain sekaligus dalam satu buku",
      "ChatGPT Super Prompt Templates siap pakai untuk produktivitas engineer",
      "180+ Interview Questions & Quiz untuk persiapan karir Blockchain Engineer",
      "Pendekatan engineering playbook â€” panduan tindakan nyata, bukan teori semata"
    ],
    price: 180000,
    coverPath: "assets/images/books/blockchain-engineering/cover/1776068242849_8693863.webp",
    sampleImages: ["assets/images/books/blockchain-engineering/sample/1776068243119_5386512.webp"],
    buyUrl: "https://lynk.id/digitalitlibrary/mkjqdy9re323"
  },
  {
    id: "live13", title: "CompTIA Security+ Study Guide â€” Exam SY0-701", category: "Security & Assurance", cover: "", isFeatured: false,
    fileType: "PDF", size: "9.32 MB", pages: 993, language: "English",
    topics: [
      "Security Professional & Data Protection (CIA Triad, security controls framework, data classification & protection strategies)",
      "Threat Landscape & Malicious Code (Threat actors, malware types: virus/worm/trojan/ransomware, social engineering: phishing/vishing/pretexting, password attacks)",
      "Security Assessment & Testing (Vulnerability management lifecycle, CVSS scoring, penetration testing: black/white/gray box, vulnerability scanning tools)",
      "Application Security (Secure SDLC, injection vulnerabilities: SQL/command/LDAP, XSS, CSRF, application security controls)",
      "Kriptografi & PKI (Symmetric & asymmetric cryptography, digital signatures, certificate management, quantum-safe crypto)",
      "Identity & Access Management (MFA, biometrics, SSO, federation, OAuth, SAML, access control: MAC/DAC/RBAC/ABAC, privilege management)",
      "Resilience & Physical Security (HA & redundancy, RAID, replication, physical security: badges, locks, surveillance, environmental controls)",
      "Cloud & Virtualization Security (Cloud models IaaS/PaaS/SaaS, container security, cloud hardening, shared responsibility model)",
      "Endpoint Security (OS vulnerabilities, firmware attacks, AV/EDR/HIDS, OS hardening, embedded & specialized systems)",
      "Network Security (Segmentation, DMZ, zero trust, secure protocols: TLS/SSH/SFTP/DNSSEC, DoS/DDoS, ARP spoofing, MITM)",
      "Wireless & Mobile Security (WPA2/WPA3, EAP, rogue AP, evil twin, MDM, MAM, BYOD security controls)",
      "Monitoring & Incident Response (IR lifecycle: preparation/detection/containment/eradication/recovery, SIEM, logs, NetFlow, playbooks)",
      "Digital Forensics (Chain of custody, order of volatility, disk & memory forensics, network forensics, OSINT, CTI)",
      "Security Governance & Compliance (Governance framework, AUP/SOP/BCP, NIST/ISO 27001/CIS, security awareness & training)",
      "Risk Management & Privacy (Qualitative & quantitative risk analysis, risk register, GDPR, PII/PHI, privacy impact assessment)"
    ],
    audienceLabel: "Beginner | Intermediate",
    audience: [
      "Kandidat ujian CompTIA Security+ SY0-701",
      "IT Professional yang baru masuk ke bidang cybersecurity",
      "Network Administrator & Helpdesk yang ingin transisi ke security",
      "Fresh Graduate IT yang ingin sertifikasi keamanan pertama mereka",
      "System Administrator yang ingin memvalidasi pengetahuan security-nya",
      "Profesional non-IT yang berpindah karir ke bidang cybersecurity"
    ],
    reviewInfo: "Official Study Guide dari Sybex/Wiley untuk ujian CompTIA Security+ SY0-701 sertifikasi keamanan IT paling laris di dunia yang diakui oleh ratusan ribu perusahaan dan diwajibkan oleh Departemen Pertahanan AS (DoD Directive 8570). Mencakup seluruh 5 domain ujian SY0-701 secara komprehensif dengan pendekatan yang ramah pemula namun tetap mendalam. Catatan: Disarankan memiliki pemahaman dasar networking setara CompTIA Network+ atau pengalaman kerja IT minimal 2 tahun.",
    whyBuy: [
      "Assessment Test di awal buku untuk mengukur kesiapan awal",
      "Exam Essentials di akhir setiap chapter untuk review cepat",
      "Review Questions per chapter + Kunci Jawaban lengkap di Appendix",
      "Full coverage semua domain & objective blueprint SY0-701",
      "Practical examples & scenario-based questions sesuai format ujian"
    ],
    price: 240000,
    coverPath: "assets/images/books/security+/cover/1776068759289_6839439.webp",
    sampleImages: ["assets/images/books/security+/sample/1776068759509_1747589.webp"],
    buyUrl: "https://lynk.id/digitalitlibrary/1dkqrzo2r5rq"
  }
];

