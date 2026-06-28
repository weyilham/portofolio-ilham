"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "id" | "en";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const translations = {
  id: {
    navbar: {
      home: "Beranda",
      tech: "Tech Stack",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak",
      hireMe: "Hire Me"
    },
    hero: {
      available: "Tersedia untuk Proyek Baru & Full-time",
      greeting: "Halo, Saya",
      prefix: "Saya Adalah Seorang",
      bio: "Saya adalah seorang IT Professional yang memiliki pengalaman dalam pengembangan aplikasi web, administrasi sistem rumah sakit, integrasi API, PACS Radiologi dll. Saya senang membangun aplikasi yang cepat, aman, dan mudah digunakan untuk membantu bisnis berkembang melalui teknologi.",
      actionPrimary: "Lihat Karya Terbaik",
      actionSecondary: "Konsultasi Proyek",
      contactDirectly: "Hubungi Langsung:"
    },
    profileCard: {
      verified: "Verified",
      openToWork: "Open to Work",
      role: "Fullstack Developer & IT Professional",
      tagItPro: "IT Pro",
      readyForWork: "Ready for Work"
    },
    valueProp: {
      badge: "Mengapa Bekerja Sama Dengan Saya?",
      title: "Nilai Tambah & Standar Kualitas",
      subtitle: "Komitmen penuh untuk menghadirkan solusi teknologi yang tidak hanya canggih, tetapi juga memberikan dampak nyata bagi operasional Anda.",
      stats: {
        projects: "Proyek Selesai",
        clients: "Klien Puas",
        uptime: "Uptime Rata-rata",
        delivery: "Delivery On Time"
      },
      cards: [
        {
          title: "Aplikasi Kilat & Ultra Responsive",
          desc: "Dibangun dengan Next.js modern dan arsitektur bersih. Menjamin waktu muat di bawah 1 detik dan pengalaman pengguna tanpa hambatan.",
          statLabel: "Load Time"
        },
        {
          title: "Spesialis SIMRS & PACS Radiologi",
          desc: "Pengalaman nyata mengintegrasikan workflow medis, server DICOM/PACS radiologi, dan sistem administrasi rumah sakit skala besar.",
          statLabel: "Uptime"
        },
        {
          title: "Integrasi API Aman & Enkripsi Ketat",
          desc: "Menghubungkan API antar sistem enterprise termasuk SatuSehat & BPJS dengan standar keamanan tinggi.",
          statLabel: "Enkripsi"
        },
        {
          title: "Orientasi Pada Hasil & ROI Bisnis",
          desc: "Setiap baris kode dirancang untuk efisiensi operasional dan hasil nyata bagi pertumbuhan bisnis Anda.",
          statLabel: "Efisiensi"
        },
        {
          title: "Delivery Tepat Waktu & On-Budget",
          desc: "Manajemen proyek terstruktur dengan sprint planning dan milestone yang jelas. Tidak ada keterlambatan atau overbudget.",
          statLabel: "On Time"
        },
        {
          title: "Support & Maintenance 24/7",
          desc: "Dukungan teknis berkelanjutan pasca-deployment. Bug fixing cepat, update rutin, dan monitoring performa real-time.",
          statLabel: "Support"
        },
        {
          title: "Arsitektur Scalable & Clean Code",
          desc: "Kode terstruktur rapi mengikuti best practices industri. Mudah di-maintain, di-scale, dan dikembangkan oleh tim manapun.",
          statLabel: "Code Quality"
        },
        {
          title: "SEO & Performa Web Optimal",
          desc: "Optimasi mesin pencari dan Core Web Vitals untuk peringkat Google terbaik. Aksesibilitas dan performa tanpa kompromi.",
          statLabel: "Lighthouse"
        }
      ]
    },
    techStack: {
      badge: "Arsenal Teknologi Pilihan",
      title: "Senjata Tempur Digital Saya",
      subtitle: "Teknologi yang sudah teruji di medan perang produksi nyata — dari rumah sakit, klinik, hingga enterprise. Bukan sekedar tahu, tapi sudah terbukti di lapangan.",
      ready: "Siap Produksi",
      supporting: "Ekosistem Pendukung:",
      categories: {
        all: "Semua Senjata",
        frontend: "Frontend",
        backend: "Backend",
        styling: "Styling & UI",
        database: "Database"
      },
      items: {
        nextjs: "Server-Side Rendering, App Router & API Routes untuk aplikasi web ultra cepat.",
        react: "Component-based UI, Hooks & State Management untuk antarmuka interaktif.",
        laravel: "Eloquent ORM, Authentication, Queue Jobs & RESTful API untuk backend yang kokoh.",
        codeigniter: "Framework PHP ringan & cepat untuk aplikasi web skala menengah yang efisien.",
        tailwind: "Utility-first CSS framework untuk desain modern, responsif & konsisten.",
        bootstrap: "Component library terpopuler untuk rapid prototyping & responsive grid system.",
        postgres: "Database relasional powerful untuk data kompleks, indexing & query optimization.",
        mysql: "Database andalan untuk aplikasi web, SIMRS & sistem informasi skala produksi."
      }
    },
    projects: {
      badge: "Portofolio Karya Terbaik",
      title: "Proyek Unggulan & Studi Kasus",
      subtitle: "Sistem informasi enterprise dan aplikasi web modern yang saya bangun dengan standar estetika tinggi & performa prima.",
      categories: {
        all: "Semua Proyek",
        webapp: "Web Apps",
        enterprise: "Enterprise Systems"
      },
      btnCaseStudy: "Studi Kasus",
      modal: {
        visitDemo: "Kunjungi Live Demo",
        repository: "Repository",
        highlights: "Keunggulan Utama:",
        techUsed: "Teknologi Terintegrasi:"
      },
      items: {
        simrs: {
          title: "SIMRS Hospital Core",
          desc: "Sistem Informasi Manajemen Rumah Sakit terintegrasi dengan rekam medis elektronik (RME) dan modul billing.",
          longDesc: "Sistem manajemen core rumah sakit yang mengelola registrasi pasien, rekam medis elektronik, billing kasir, instalasi apotek, serta integrasi satu pintu untuk efisiensi workflow medis.",
          highlights: ["Sesuai standar akreditasi RME Indonesia", "Memproses transaksi billing pasien secara real-time", "Arsitektur database handal & aman"]
        },
        pacs: {
          title: "PACS Radiologi DICOM",
          desc: "Server PACS untuk penyimpanan, transmisi, dan tampilan gambar medis standar DICOM radiologi.",
          longDesc: "Picture Archiving and Communication System (PACS) medis yang terintegrasi dengan alat radiologi (CR, CT-Scan, USG) untuk transmisi gambar medis DICOM dan sinkronisasi ke data rekam medis pasien.",
          highlights: ["DICOM viewer integrasi web/mobile", "Proses render gambar medis cepat", "Mendukung protokol HL7 & FHIR"]
        },
        gateway: {
          title: "Gateway API BPJS & SatuSehat",
          desc: "Integrasi API menjembatani sistem lokal dengan layanan kementerian BPJS VClaim & SatuSehat.",
          longDesc: "Middleware integrasi API yang aman untuk sinkronisasi otomatis data rujukan, klaim BPJS VClaim, antrean online, hingga data kesehatan SatuSehat Kemenkes.",
          highlights: ["Kepatuhan enkripsi data SatuSehat", "Auto-retry sync saat API kementerian down", "Dashboard monitoring request log"]
        },
        pos: {
          title: "POS Kasir & Inventory",
          desc: "Sistem kasir penjualan modern dengan pelacakan stok inventaris otomatis dan laporan keuangan.",
          longDesc: "Aplikasi POS (Point of Sale) cloud dengan antarmuka kasir cepat, scan barcode, cetak struk otomatis, laporan laba rugi, dan manajemen multi-cabang toko.",
          highlights: ["Desain UI/UX kasir responsif & ringkas", "Sinkronisasi stok barang real-time", "Laporan omset harian otomatis"]
        },
        crypto: {
          title: "AI Market Analytics",
          desc: "Dashboard visualisasi tren pasar keuangan dengan estimasi harga real-time berbasis data WebSocket.",
          longDesc: "Platform analitik finansial dengan visualisasi grafik interaktif, notifikasi tren harga cryptocurrency, serta pengolahan sentimen pasar global secara otomatis.",
          highlights: ["Koneksi WebSocket stabil tanpa lag", "Chart visualisasi harga yang presisi", "Dukungan mode gelap bawaan"]
        },
        nexus: {
          title: "Nexus UI Library",
          desc: "Kumpulan library komponen UI modern, accessible, dan modular untuk mempercepat pembuatan proyek web.",
          longDesc: "Paket reusable design system siap pakai dengan dukungan penuh navigasi keyboard, standar WAI-ARIA, serta optimasi performa rendering CSS tinggi.",
          highlights: ["100+ komponen UI interaktif", "Konfigurasi tema instan & fleksibel", "Mendukung SSR & Next.js kompatibilitas"]
        }
      }
    },
    experience: {
      badge: "Jejak Langkah & Pengalaman",
      title: "Perjalanan Karier & Pengalaman",
      subtitle: "Pengalaman profesional dalam administrasi sistem rumah sakit, integrasi API, dan pengembangan web.",
      items: [
        {
          role: "IT Professional & Web Specialist",
          org: "Healthcare & Tech Enterprise",
          period: "2022 - Sekarang",
          desc: "Mengelola administrasi Sistem Informasi Rumah Sakit (SIMRS), membangun integrasi API terpusat, serta melakukan konfigurasi dan pemeliharaan server PACS Radiologi untuk memastikan operasional medis dan bisnis berjalan cepat serta aman."
        },
        {
          role: "Full-Stack Web Developer",
          org: "Digital Solution Lab",
          period: "2020 - 2022",
          desc: "Mengembangkan aplikasi web modern, sistem kasir POS, serta membangun arsitektur RESTful API scalable untuk berbagai kebutuhan industri bisnis."
        },
        {
          role: "Sarjana Komputer (S.Kom) - Teknik Informatika",
          org: "Universitas Teknologi",
          period: "2016 - 2020",
          desc: "Lulus dengan fokus studi pada Rekayasa Perangkat Lunak, Jaringan Komputer, Algoritma Pemrograman, dan Sistem Basis Data."
        }
      ]
    },
    testimonials: {
      badge: "Testimoni & Kepuasan Klien",
      title: "Apa Kata Mitra & Klien?",
      subtitle: "Reputasi dibangun di atas kepercayaan, kualitas kerja tinggi, dan kepuasan hasil akhir bagi setiap klien.",
      items: [
        {
          name: "Dr. Hendra Wijaya, Sp.Rad",
          role: "Kepala Instalasi Radiologi",
          company: "Rumah Sakit Utama Medika",
          content: "Pak Ilham Maulana sangat profesional dalam melakukan integrasi PACS Radiologi dan SIMRS kami. Pengiriman file DICOM menjadi sangat cepat dan stabil tanpa kompromi pada keamanan data pasien.",
          highlight: "Integrasi PACS & SIMRS Sempurna"
        },
        {
          name: "Rian Pratama, S.Kom",
          role: "Chief Technology Officer",
          company: "Nusa Digital Enterprise",
          content: "Bekerja sama dengan Pak Ilham untuk pengembangan web aplikasi dan RESTful API adalah pengalaman luar biasa. Kode yang bersih, arsitektur scalable, dan aplikasi berjalan sangat responsif.",
          highlight: "Arsitektur Scalable & Kilat"
        },
        {
          name: "Budi Santoso",
          role: "Managing Director",
          company: "Retail POS System Group",
          content: "Sistem aplikasi kasir dan inventory yang dibangun oleh Mas Ilham membantu meningkatkan kecepatan transaksi bisnis kami hingga 2.5 kali lipat. Sangat direkomendasikan!",
          highlight: "Meningkatkan Kecepatan Bisnis"
        }
      ]
    },
    contact: {
      badge: "Mari Berdiskusi & Bekerja Sama",
      title: "Hubungi Saya",
      subtitle: "Punya ide proyek menarik atau ingin mendiskusikan peluang kolaborasi? Jangan ragu untuk mengirimkan pesan!",
      cardTitle: "Informasi Kontak",
      copied: "Berhasil Disalin!",
      copyBtn: "Salin Alamat Email",
      location: "Lokasi",
      locationValue: "Serang, Banten, Indonesia",
      responseTime: "Biasanya membalas pesan dalam waktu kurang dari 24 jam.",
      formTitle: "Kirim Pesan Langsung",
      successMsg: "Terima kasih! Pesan Anda telah berhasil diproses. Saya akan segera menghubungi Anda kembali.",
      errorMsg: "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau gunakan kontak langsung di sebelah kiri.",
      fieldName: "Nama Lengkap",
      fieldNamePlaceholder: "Contoh: Budi Santoso",
      fieldEmail: "Alamat Email",
      fieldMessage: "Pesan / Detail Proyek",
      fieldMessagePlaceholder: "Ceritakan tentang proyek Anda atau hal yang ingin Anda diskusikan...",
      btnSubmit: "Kirim Pesan Sekarang"
    },
    footer: {
      desc: "Fullstack Developer & IT Professional. Membangun aplikasi web cepat, aman, dan scalable.",
      design: "Didesain dengan untuk UI/UX terbaik"
    }
  },
  en: {
    navbar: {
      home: "Home",
      tech: "Tech Stack",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      hireMe: "Hire Me"
    },
    hero: {
      available: "Available for New Projects & Full-time",
      greeting: "Hello, I am",
      prefix: "I Am A",
      bio: "I am an IT Professional with experience in web application development, hospital management information system (SIMRS) administration, API integration, radiology PACS, etc. I love building fast, secure, and user-friendly applications to help businesses grow through technology.",
      actionPrimary: "View Best Works",
      actionSecondary: "Project Consultation",
      contactDirectly: "Contact Directly:"
    },
    profileCard: {
      verified: "Verified",
      openToWork: "Open to Work",
      role: "Fullstack Developer & IT Professional",
      tagItPro: "IT Pro",
      readyForWork: "Ready for Work"
    },
    valueProp: {
      badge: "Why Work With Me?",
      title: "Added Value & Quality Standards",
      subtitle: "Full commitment to delivering technology solutions that are not only advanced, but also provide real impact for your operations.",
      stats: {
        projects: "Projects Completed",
        clients: "Satisfied Clients",
        uptime: "Average Uptime",
        delivery: "On-Time Delivery"
      },
      cards: [
        {
          title: "Lightning Fast & Ultra Responsive Apps",
          desc: "Built with modern Next.js and clean architecture. Guarantees sub-1 second load times and a seamless user experience.",
          statLabel: "Load Time"
        },
        {
          title: "SIMRS & Radiology PACS Specialist",
          desc: "Real-world experience integrating medical workflows, DICOM/Radiology PACS servers, and large-scale hospital management systems.",
          statLabel: "Uptime"
        },
        {
          title: "Secure API Integration & Strict Encryption",
          desc: "Connecting enterprise APIs, including Ministry of Health SatuSehat & BPJS VClaim, using high-security standards.",
          statLabel: "Encryption"
        },
        {
          title: "Result-Oriented & Business ROI",
          desc: "Every line of code is designed for operational efficiency and tangible results for your business growth.",
          statLabel: "Efficiency"
        },
        {
          title: "On-Time & On-Budget Delivery",
          desc: "Structured project management with clear sprint planning and milestones. No delays or overbudgeting.",
          statLabel: "On Time"
        },
        {
          title: "24/7 Support & Maintenance",
          desc: "Ongoing post-deployment technical support. Quick bug fixes, regular updates, and real-time performance monitoring.",
          statLabel: "Support"
        },
        {
          title: "Scalable Architecture & Clean Code",
          desc: "Neatly structured code following industry best practices. Easy to maintain, scale, and develop by any team.",
          statLabel: "Code Quality"
        },
        {
          title: "Optimal SEO & Web Performance",
          desc: "Search engine and Core Web Vitals optimization for top Google rankings. Uncompromising accessibility and performance.",
          statLabel: "Lighthouse"
        }
      ]
    },
    techStack: {
      badge: "Selected Tech Arsenal",
      title: "My Digital Battle Weapons",
      subtitle: "Technologies battle-tested in real-world production — from hospitals, clinics, to enterprise. Not just knowing, but proven in the field.",
      ready: "Production Ready",
      supporting: "Supporting Ecosystem:",
      categories: {
        all: "All Weapons",
        frontend: "Frontend",
        backend: "Backend",
        styling: "Styling & UI",
        database: "Database"
      },
      items: {
        nextjs: "Server-Side Rendering, App Router & API Routes for ultra-fast web applications.",
        react: "Component-based UI, Hooks & State Management for interactive interfaces.",
        laravel: "Eloquent ORM, Authentication, Queue Jobs & RESTful API for a robust backend.",
        codeigniter: "Lightweight & fast PHP framework for efficient medium-scale web applications.",
        tailwind: "Utility-first CSS framework for modern, responsive & consistent design.",
        bootstrap: "Most popular component library for rapid prototyping & responsive grid system.",
        postgres: "Powerful relational database for complex data, indexing & query optimization.",
        mysql: "Go-to database for web applications, SIMRS & production-scale information systems."
      }
    },
    projects: {
      badge: "Best Works Portfolio",
      title: "Featured Projects & Case Studies",
      subtitle: "Enterprise information systems and modern web applications I built with high aesthetic standards & top performance.",
      categories: {
        all: "All Projects",
        webapp: "Web Apps",
        enterprise: "Enterprise Systems"
      },
      btnCaseStudy: "Case Study",
      modal: {
        visitDemo: "Visit Live Demo",
        repository: "Repository",
        highlights: "Key Highlights:",
        techUsed: "Integrated Technology:"
      },
      items: {
        simrs: {
          title: "SIMRS Hospital Core",
          desc: "Hospital Management Information System integrated with electronic medical records (EMR) and billing modules.",
          longDesc: "Core hospital management system managing patient registration, electronic medical records, cashier billing, pharmacy installation, and one-stop integration for medical workflow efficiency.",
          highlights: ["Complies with Indonesian EMR accreditation standards", "Real-time patient billing transaction processing", "Reliable & secure database architecture"]
        },
        pacs: {
          title: "PACS Radiology DICOM",
          desc: "PACS Server for storage, transmission, and display of standard radiology DICOM medical images.",
          longDesc: "Medical Picture Archiving and Communication System (PACS) integrated with radiology equipment (CR, CT-Scan, USG) for DICOM medical image transmission and patient medical record sync.",
          highlights: ["Web/mobile integrated DICOM viewer", "Fast medical image rendering process", "Supports HL7 & FHIR protocols"]
        },
        gateway: {
          title: "Gateway API BPJS & SatuSehat",
          desc: "API integration bridging local systems with government BPJS VClaim & SatuSehat services.",
          longDesc: "Secure API integration middleware for automatic synchronization of referrals, BPJS VClaim claims, online queues, and Ministry of Health SatuSehat medical data.",
          highlights: ["SatuSehat data encryption compliance", "Auto-retry sync when ministry API is down", "Request log monitoring dashboard"]
        },
        pos: {
          title: "POS Cashier & Inventory",
          desc: "Modern sales cashier system with automatic inventory stock tracking and financial reporting.",
          longDesc: "Cloud POS (Point of Sale) application with fast cashier interface, barcode scanning, auto receipt printing, profit/loss reports, and multi-branch management.",
          highlights: ["Responsive & compact cashier UI/UX design", "Real-time item stock synchronization", "Automatic daily revenue reporting"]
        },
        crypto: {
          title: "AI Market Analytics",
          desc: "Financial market trend visualization dashboard with real-time price estimation based on WebSocket data.",
          longDesc: "Financial analytics platform with interactive chart visualization, cryptocurrency price trend notifications, and automatic global market sentiment processing.",
          highlights: ["Stable WebSocket connection with zero lag", "Precise price visualization charts", "Built-in dark mode support"]
        },
        nexus: {
          title: "Nexus UI Library",
          desc: "Collection of modern, accessible, and modular UI component libraries to speed up web project creation.",
          longDesc: "Ready-to-use reusable design system package with full keyboard navigation support, WAI-ARIA standards, and high CSS rendering performance optimization.",
          highlights: ["100+ interactive UI components", "Instant & flexible theme configuration", "Supports SSR & Next.js compatibility"]
        }
      }
    },
    experience: {
      badge: "Career Path & Experience",
      title: "Career Journey & Experience",
      subtitle: "Professional experience in hospital information systems administration, API integration, and web development.",
      items: [
        {
          role: "IT Professional & Web Specialist",
          org: "Healthcare & Tech Enterprise",
          period: "2022 - Present",
          desc: "Managing Hospital Management Information System (SIMRS) administration, building centralized API integrations, and configuring & maintaining Radiology PACS servers to ensure medical and business operations run fast and securely."
        },
        {
          role: "Full-Stack Web Developer",
          org: "Digital Solution Lab",
          period: "2020 - 2022",
          desc: "Developed modern web applications, POS cashier systems, and built scalable RESTful API architectures for various business industry needs."
        },
        {
          role: "Bachelor of Computer Science (S.Kom) - Informatics Engineering",
          org: "Technology University",
          period: "2016 - 2020",
          desc: "Graduated with a study focus on Software Engineering, Computer Networks, Programming Algorithms, and Database Systems."
        }
      ]
    },
    testimonials: {
      badge: "Testimonials & Client Satisfaction",
      title: "What Partners & Clients Say?",
      subtitle: "Reputation built on trust, high quality work, and satisfaction with the final result for every client.",
      items: [
        {
          name: "Dr. Hendra Wijaya, Sp.Rad",
          role: "Head of Radiology Department",
          company: "Utama Medika General Hospital",
          content: "Mr. Ilham Maulana was highly professional in integrating our Radiology PACS and SIMRS. DICOM file delivery became very fast and stable without compromising patient data security.",
          highlight: "Perfect PACS & SIMRS Integration"
        },
        {
          name: "Rian Pratama, S.Kom",
          role: "Chief Technology Officer",
          company: "Nusa Digital Enterprise",
          content: "Working with Mr. Ilham for web application and RESTful API development was an outstanding experience. Clean code, scalable architecture, and highly responsive applications.",
          highlight: "Scalable & Lightning-Fast Architecture"
        },
        {
          name: "Budi Santoso",
          role: "Managing Director",
          company: "Retail POS System Group",
          content: "The cashier and inventory app system built by Mas Ilham helped speed up our business transactions by up to 2.5 times. Highly recommended!",
          highlight: "Accelerating Business Growth"
        }
      ]
    },
    contact: {
      badge: "Let's Discuss & Collaborate",
      title: "Contact Me",
      subtitle: "Have an exciting project idea or want to discuss collaboration opportunities? Feel free to send a message!",
      cardTitle: "Contact Information",
      copied: "Copied Successfully!",
      copyBtn: "Copy Email Address",
      location: "Location",
      locationValue: "Serang, Banten, Indonesia",
      responseTime: "Usually replies in less than 24 hours.",
      formTitle: "Send a Direct Message",
      successMsg: "Thank you! Your message has been processed successfully. I will get back to you shortly.",
      errorMsg: "An error occurred while sending the message. Please try again or use the direct contact on the left.",
      fieldName: "Full Name",
      fieldNamePlaceholder: "Example: John Doe",
      fieldEmail: "Email Address",
      fieldMessage: "Message / Project Details",
      fieldMessagePlaceholder: "Tell me about your project or what you would like to discuss...",
      btnSubmit: "Send Message Now"
    },
    footer: {
      desc: "Fullstack Developer & IT Professional. Building fast, secure, and scalable web applications.",
      design: "Designed with for the best UI/UX"
    }
  }
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");

  // Load language preference from local storage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferred_language") as Language;
    if (savedLanguage === "id" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("preferred_language", lang);
  };

  // Helper function to resolve dot-notation path in translations
  const t = (keyPath: string) => {
    const keys = keyPath.split(".");
    let current: any = translations[language];

    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        return keyPath; // fallback to key path if translation missing
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
