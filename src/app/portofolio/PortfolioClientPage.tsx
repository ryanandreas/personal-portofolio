"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Printer, ExternalLink, Mail, MapPin, Sparkles, Filter, Code, CheckCircle, Globe, Download } from 'lucide-react';
import { projectsData } from '@/components/sections/ProjectsSection';

export default function PortfolioClientPage() {
  const [siteUrl, setSiteUrl] = useState("ryanandreas.com");
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const pdfContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSiteUrl(window.location.hostname);
    }
  }, []);

  const categories = ["ALL", "WEB APP", "MOBILE APP", "WEB DESIGN"];

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "WEB APP") return project.category.includes("WEB APP");
    if (activeFilter === "MOBILE APP") return project.category.includes("MOBILE APP");
    if (activeFilter === "WEB DESIGN") return project.category.includes("WEB DESIGN") || project.category.includes("LANDING PAGE");
    return true;
  });

  // SBA Web Project
  const sbaProject = projectsData.find(p => p.id === 1);
  // AC Tiam Web App Project
  const acTiamWebProject = projectsData.find(p => p.id === 2);
  // AC Tiam Customer Mobile App Project
  const acTiamMobileProject = projectsData.find(p => p.id === 3);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      const element = pdfContainerRef.current;
      if (!element) return;

      const html2pdf = (await import('html2pdf.js')).default;
      const opt = {
        margin:       0,
        filename:     'Portofolio_Ryan_Andreas.pdf',
        image:        { type: 'jpeg' as const, quality: 0.98 },
        html2canvas:  { 
          scale: 2, 
          useCORS: true, 
          logging: false,
          letterRendering: true
        },
        jsPDF:        { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const },
        pagebreak:    { mode: ['css', 'legacy'] }
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Gagal mengunduh PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] antialiased flex flex-col relative overflow-hidden font-sans pb-16">
      
      {/* BACKGROUND GRADIENT BLURS (SCREEN ONLY) */}
      <div className="absolute top-0 left-[25%] w-[550px] h-[350px] flex opacity-40 blur-[80px] z-0 pointer-events-none print:hidden">
        <div className="grow shrink basis-0 rounded-full bg-[#00E5FF]" />
        <div className="grow shrink basis-0 -ml-[100px] mt-[80px] rounded-full bg-[#FFE600]" />
        <div className="grow shrink basis-0 -ml-[100px] rounded-full bg-[#FF00EA]" />
      </div>

      {/* FLOATING ACTION BAR (SCREEN ONLY) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xl border border-[#EBEBEB] px-6 py-4 rounded-full shadow-2xl flex items-center gap-6 z-50 print:hidden transition-all duration-300 hover:border-[#111111]/30 hover:shadow-xl">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xs font-bold text-[#555555] hover:text-black transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Kembali</span>
        </Link>
        
        <div className="w-px h-5 bg-[#EBEBEB]" />

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 text-xs font-bold text-[#555555] hover:text-black transition-colors cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>Cetak</span>
        </button>

        <div className="w-px h-5 bg-[#EBEBEB]" />
        
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex items-center gap-2.5 text-xs font-black text-white bg-[#111111] hover:bg-black px-6 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-lg active:scale-95 flex-row disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Download className="w-4 h-4" />
          <span>{isDownloading ? "Memproses PDF..." : "Unduh PDF"}</span>
        </button>
      </div>

      {/* MAIN CONTAINER */}
      <main className="grow w-full max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-20 relative z-10 print:p-0 print:m-0">
        
        {/* INTERACTIVE PRINT TIP BANNER (SCREEN ONLY) */}
        <div className="mb-12 p-5 bg-[#F9F9F9] border border-[#EBEBEB] rounded-2xl flex items-start gap-4 print:hidden max-w-3xl mx-auto shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#111111]" />
          <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="text-xs text-[#555555] leading-[1.7]">
            <span className="font-black text-black block mb-1">💡 Info Unduh Portofolio:</span>
            Tombol <strong>Unduh PDF</strong> akan secara otomatis memproses dan mengunduh dokumen A4 portofolio Anda. Tombol <strong>Cetak</strong> dapat digunakan jika Anda ingin mencetak langsung menggunakan printer fisik.
          </div>
        </div>

        {/* ==================== SCREEN VIEW (DYNAMIC & FILTERABLE) ==================== */}
        <div className="print:hidden">
          
          {/* HERO HEADER SECTION */}
          <header className="w-full flex flex-col md:flex-row md:items-end justify-between pb-8 border-b-2 border-[#111111] mb-12 gap-8">
            <div className="flex flex-col gap-3">
              <span className="bg-[#111111] text-white text-[10px] font-black px-3 py-1 rounded-full tracking-wider uppercase w-fit">
                Available for Projects
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#111111] m-0 leading-none">
                Ryan Andreas
              </h1>
              <p className="text-lg sm:text-xl font-bold text-[#555555] m-0">
                Web & Mobile Developer
              </p>
            </div>

            <div className="flex flex-col gap-2 text-xs text-[#555555] md:items-end">
              <div className="flex items-center gap-2 hover:text-black transition-colors">
                <Mail className="w-4 h-4 text-[#111111]" />
                <span>ryanguansin@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-black transition-colors">
                <MapPin className="w-4 h-4 text-[#111111]" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-2 hover:text-black transition-colors">
                <Globe className="w-4 h-4 text-[#111111]" />
                <span className="font-semibold text-black underline decoration-black">{siteUrl}</span>
              </div>
            </div>
          </header>

          {/* INTRO SUMMARY STATS */}
          <section className="mb-16 grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="md:col-span-3">
              <h2 className="text-xs font-black uppercase tracking-widest text-[#888888] mb-2">
                Ringkasan Profesional
              </h2>
              <p className="text-sm leading-[1.7] text-[#444444] m-0">
                Katalog projek ini merangkum rekayasa perangkat lunak terbaru yang saya kembangkan. Fokus pada arsitektur berkinerja tinggi, manajemen basis data relasional yang andal, pixel-perfect UI/UX, dan implementasi integrasi payment gateway yang aman.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 p-5 bg-[#F8F8F8] border border-[#EBEBEB] rounded-2xl">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-black">3+</span>
                <span className="text-[10px] text-[#555555] font-bold uppercase">Projek Utama</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-black">5+</span>
                <span className="text-[10px] text-[#555555] font-bold uppercase">Tech Stack</span>
              </div>
            </div>
          </section>

          {/* CATEGORY FILTER */}
          <section className="mb-12 flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold text-[#555555] flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5" /> Filter Projek:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-[10px] font-black px-4 py-2 rounded-full cursor-pointer transition-all border ${
                  activeFilter === cat 
                    ? 'bg-[#111111] text-white border-transparent shadow-sm' 
                    : 'bg-[#F8F8F8] text-[#555555] border-[#EBEBEB] hover:text-black hover:border-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </section>

          {/* PROJECTS RENDER */}
          <div className="flex flex-col gap-12">
            {filteredProjects.map((project) => {
              const isHovered = hoveredProject === project.id;

              return (
                <section 
                  key={project.id} 
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={`flex flex-col gap-6 p-6 sm:p-8 bg-[#F8F8F8] border rounded-3xl transition-all duration-300 relative ${
                    isHovered 
                      ? 'border-[#111111] bg-[#F5F5F5] shadow-sm' 
                      : 'border-[#EBEBEB] bg-[#F8F8F8]'
                  }`}
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-[#111111] rounded-t-3xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] tracking-widest font-black text-white bg-[#111111] px-2.5 py-0.5 rounded-md uppercase w-fit">
                        {project.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#111111] mt-2 uppercase tracking-tight">
                        {project.title}
                      </h3>
                    </div>

                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold text-black border-b-2 border-black pb-0.5 hover:border-transparent transition-all w-fit shrink-0"
                      >
                        <span>Kunjungi Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="md:col-span-2 flex flex-col gap-4">
                      <p className="text-sm font-bold text-[#333333] leading-[1.6]">
                        {project.description}
                      </p>
                      <p className="text-xs leading-[1.7] text-[#555555] m-0">
                        {project.longDescription}
                      </p>

                      <div className="mt-2 flex flex-col gap-2">
                        <span className="text-[10px] font-black text-[#888888] uppercase tracking-wider">
                          Fitur Utama & Peran:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#333333]">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-black shrink-0" />
                            <span>Desain Antarmuka Responsif & Cepat</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-black shrink-0" />
                            <span>Optimasi Kinerja Query & Keamanan</span>
                          </div>
                          {project.tech.includes("Midtrans") && (
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-black shrink-0" />
                              <span>Integrasi Midtrans Payment Gateway</span>
                            </div>
                          )}
                          {project.tech.includes("NeonDB") && (
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-black shrink-0" />
                              <span>Integrasi Serverless Database (NeonDB)</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3 p-5 bg-white border border-[#EBEBEB] rounded-2xl h-fit">
                      <span className="font-extrabold text-[9px] uppercase text-[#111111] tracking-wider flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5 text-black" /> Stack Utama:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, idx) => (
                          <span 
                            key={idx} 
                            className="bg-[#F5F5F5] border border-[#EBEBEB] text-[#555555] text-[10px] font-bold px-2.5 py-1 rounded-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-2">
                    <span className="font-extrabold text-[9px] uppercase text-[#888888] tracking-wider">
                      Tangkapan Layar Proyek ({project.images.length})
                    </span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {project.images.map((imgUrl, imgIdx) => (
                        <div 
                          key={imgIdx} 
                          className="aspect-video bg-[#F5F5F5] rounded-xl overflow-hidden border border-[#EBEBEB] relative group shadow-sm transition-all duration-300 hover:border-[#111111]"
                        >
                          <Image
                            src={imgUrl}
                            alt={`${project.title} Screenshot ${imgIdx + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                </section>
              );
            })}
          </div>

        </div>

        {/* ==================== PDF PRINT LAYOUT (A4 STRUCTURED PAGES) ==================== */}
        <div 
          ref={pdfContainerRef}
          className="absolute -top-[99999px] -left-[99999px] opacity-0 pointer-events-none print:static print:opacity-100 print:pointer-events-auto font-sans"
        >
          
          {/* --- PAGE 1: HEADER, INTRO, & SBA WEB PROJECT --- */}
          <div className="pdf-page-wrapper page-break-section">
            
            {/* Professional Letterhead */}
            <div className="border-b-[3px] border-black pb-6 mb-8 flex justify-between items-end">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-black uppercase m-0 leading-none">
                  Ryan Andreas
                </h1>
                <p className="text-sm font-bold text-[#444444] mt-2 mb-0 uppercase tracking-widest">
                  Web & Mobile Developer &bull; Project Portfolio
                </p>
              </div>
              <div className="text-right text-[10px] text-[#555555] leading-normal">
                <div>Jakarta, Indonesia</div>
                <div>ryanguansin@gmail.com</div>
                <div className="font-bold text-black underline mt-1">{siteUrl}</div>
              </div>
            </div>

            {/* Intro Summary */}
            <div className="mb-8">
              <h2 className="text-xs font-black uppercase tracking-widest text-[#555555] border-l-[3px] border-black pl-3 mb-3">
                Ringkasan Profesional
              </h2>
              <p className="text-xs leading-[1.6] text-[#333333] m-0">
                Katalog ini memuat profil teknis dari projek-projek rekayasa perangkat lunak terbaru yang saya kembangkan. Projek-projek ini mencakup platform web responsif, aplikasi administrasi internal enterprise, dan mobile app pelanggan. Setiap sistem dirancang untuk performa tinggi, keamanan basis data, dan kepatuhan standar integrasi API modern.
              </p>
            </div>

            {/* Project 1: SBA Web */}
            {sbaProject && (
              <div className="mt-8">
                <h2 className="text-xs font-black uppercase tracking-widest text-[#555555] border-l-[3px] border-black pl-3 mb-4">
                  Daftar Projek Pilihan
                </h2>

                <div className="project-detail-layout">
                  <div className="flex justify-between items-start border-b border-[#E2E8F0] pb-2 mb-3">
                    <div>
                      <span className="text-[8px] font-black tracking-widest bg-black text-white px-2 py-0.5 rounded uppercase">
                        {sbaProject.category}
                      </span>
                      <h3 className="text-lg font-black text-black uppercase mt-1.5 mb-0">
                        {sbaProject.title}
                      </h3>
                    </div>
                    {sbaProject.link && (
                      <span className="text-[10px] font-bold text-black underline">
                        {sbaProject.linkLabel || sbaProject.link}
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-bold text-[#222222] mb-2 leading-relaxed">
                    {sbaProject.description}
                  </p>
                  
                  <p className="text-[11px] text-[#555555] mb-4 leading-relaxed">
                    {sbaProject.longDescription}
                  </p>

                  {/* Tech Stack List */}
                  <div className="mb-4">
                    <span className="text-[9px] font-black text-black uppercase tracking-wider block mb-1.5">
                      Teknologi Pendukung:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {sbaProject.tech.map((t, idx) => (
                        <span key={idx} className="bg-[#F3F4F6] text-[#333] border border-[#D1D5DB] text-[9px] font-bold px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Screenshots Grid (A4 Size) */}
                  <div>
                    <span className="text-[9px] font-black text-[#555555] uppercase tracking-wider block mb-2">
                      Dokumentasi Antarmuka SBA:
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      {sbaProject.images.map((imgUrl, idx) => (
                        <div key={idx} className="relative aspect-[16/10] w-full border border-[#D1D5DB] rounded overflow-hidden">
                          <img 
                            src={imgUrl} 
                            alt={`${sbaProject.title} screenshot`}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}
            
            <div className="pdf-page-footer">Halaman 1 dari 3 &bull; Portofolio Ryan Andreas</div>
          </div>

          {/* --- PAGE 2: AC TIAM WEB APP --- */}
          <div className="pdf-page-wrapper page-break-section">
            
            {/* Clean Mini Header for continuation */}
            <div className="border-b border-[#D1D5DB] pb-3 mb-6 flex justify-between items-center text-[10px] text-[#666666]">
              <span className="font-bold uppercase tracking-wider text-black">Ryan Andreas &bull; Portofolio</span>
              <span>Projek Web App</span>
            </div>

            {/* Project 2: AC Tiam Web App */}
            {acTiamWebProject && (
              <div>
                <div className="flex justify-between items-start border-b border-[#E2E8F0] pb-2 mb-3">
                  <div>
                    <span className="text-[8px] font-black tracking-widest bg-black text-white px-2 py-0.5 rounded uppercase">
                      {acTiamWebProject.category}
                    </span>
                    <h3 className="text-xl font-black text-black uppercase mt-1.5 mb-0">
                      {acTiamWebProject.title}
                    </h3>
                  </div>
                  {acTiamWebProject.link && (
                    <span className="text-[10px] font-bold text-black underline">
                      {acTiamWebProject.linkLabel || acTiamWebProject.link}
                    </span>
                  )}
                </div>

                <p className="text-xs font-bold text-[#222222] mb-3 leading-relaxed">
                  {acTiamWebProject.description}
                </p>
                
                <p className="text-[11px] text-[#555555] mb-4 leading-relaxed">
                  {acTiamWebProject.longDescription}
                </p>

                {/* Features & Role List */}
                <div className="mb-4 bg-[#F9FAFB] border border-[#E5E7EB] p-4 rounded">
                  <span className="text-[9px] font-black text-black uppercase tracking-wider block mb-2">
                    Fitur & Tanggung Jawab Utama:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-[#333333]">
                    <div className="flex items-center gap-1.5">
                      <span className="text-black font-extrabold text-[12px]">&#10003;</span>
                      <span>Sistem Manajemen Tiket Layanan & Teknisi</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-black font-extrabold text-[12px]">&#10003;</span>
                      <span>Integrasi Payment Gateway Midtrans</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-black font-extrabold text-[12px]">&#10003;</span>
                      <span>Manajemen Logistik & Inventaris Suku Cadang</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-black font-extrabold text-[12px]">&#10003;</span>
                      <span>Dashboard Chart Grafik Pendapatan Real-time</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack List */}
                <div className="mb-4">
                  <span className="text-[9px] font-black text-black uppercase tracking-wider block mb-1.5">
                    Teknologi Pendukung:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {acTiamWebProject.tech.map((t, idx) => (
                      <span key={idx} className="bg-[#F3F4F6] text-[#333] border border-[#D1D5DB] text-[9px] font-bold px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Screenshots Grid (A4 Layout) */}
                <div>
                  <span className="text-[9px] font-black text-[#555555] uppercase tracking-wider block mb-2">
                    Dokumentasi Antarmuka Sistem:
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {acTiamWebProject.images.slice(0, 4).map((imgUrl, idx) => (
                      <div key={idx} className="relative aspect-[16/10] w-full border border-[#D1D5DB] rounded overflow-hidden">
                        <img 
                          src={imgUrl} 
                          alt={`${acTiamWebProject.title} screenshot ${idx + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            <div className="pdf-page-footer">Halaman 2 dari 3 &bull; Portofolio Ryan Andreas</div>
          </div>

          {/* --- PAGE 3: AC TIAM CUSTOMER MOBILE APP & CLOSING --- */}
          <div className="pdf-page-wrapper page-break-section">
            
            {/* Clean Mini Header for continuation */}
            <div className="border-b border-[#D1D5DB] pb-3 mb-6 flex justify-between items-center text-[10px] text-[#666666]">
              <span className="font-bold uppercase tracking-wider text-black">Ryan Andreas &bull; Portofolio</span>
              <span>Projek Mobile App</span>
            </div>

            {/* Project 3: AC Tiam Customer Mobile App */}
            {acTiamMobileProject && (
              <div>
                <div className="flex justify-between items-start border-b border-[#E2E8F0] pb-2 mb-3">
                  <div>
                    <span className="text-[8px] font-black tracking-widest bg-black text-white px-2 py-0.5 rounded uppercase">
                      {acTiamMobileProject.category}
                    </span>
                    <h3 className="text-xl font-black text-black uppercase mt-1.5 mb-0">
                      {acTiamMobileProject.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs font-bold text-[#222222] mb-3 leading-relaxed">
                  {acTiamMobileProject.description}
                </p>
                
                <p className="text-[11px] text-[#555555] mb-4 leading-relaxed">
                  {acTiamMobileProject.longDescription}
                </p>

                {/* Features & Role List */}
                <div className="mb-4 bg-[#F9FAFB] border border-[#E5E7EB] p-4 rounded">
                  <span className="text-[9px] font-black text-black uppercase tracking-wider block mb-2">
                    Fitur & Tanggung Jawab Utama:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-[#333333]">
                    <div className="flex items-center gap-1.5">
                      <span className="text-black font-extrabold text-[12px]">&#10003;</span>
                      <span>Booking Layanan Servis Cepat & Mulus</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-black font-extrabold text-[12px]">&#10003;</span>
                      <span>Pelacakan Status Teknisi Real-time</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-black font-extrabold text-[12px]">&#10003;</span>
                      <span>Integrasi Pembayaran Aman (Midtrans PG)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-black font-extrabold text-[12px]">&#10003;</span>
                      <span>Riwayat Layanan & Unduh Invoice</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack List */}
                <div className="mb-4">
                  <span className="text-[9px] font-black text-black uppercase tracking-wider block mb-1.5">
                    Teknologi Pendukung:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {acTiamMobileProject.tech.map((t, idx) => (
                      <span key={idx} className="bg-[#F3F4F6] text-[#333] border border-[#D1D5DB] text-[9px] font-bold px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Screenshots Grid (A4 mobile display: smaller width) */}
                <div className="mb-8">
                  <span className="text-[9px] font-black text-[#555555] uppercase tracking-wider block mb-2">
                    Dokumentasi Antarmuka Mobile (Flutter):
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    {acTiamMobileProject.images.slice(0, 3).map((imgUrl, idx) => (
                      <div key={idx} className="relative aspect-[9/16] w-full max-w-[140px] mx-auto border border-[#D1D5DB] rounded overflow-hidden">
                        <img 
                          src={imgUrl} 
                          alt={`${acTiamMobileProject.title} screenshot ${idx + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* Closing statement / Call to Action */}
            <div className="border-t-2 border-black pt-6 mt-12 text-center">
              <p className="text-xs font-bold text-[#111111] mb-1">
                Tertarik untuk Berkolaborasi Membangun Produk Digital Anda?
              </p>
              <p className="text-[10px] text-[#555555] m-0">
                Hubungi saya melalui email di <span className="font-bold text-black">ryanguansin@gmail.com</span> untuk konsultasi kebutuhan sistem Anda.
              </p>
            </div>

            <div className="pdf-page-footer">Halaman 3 dari 3 &bull; Portofolio Ryan Andreas</div>
          </div>

        </div>

      </main>

      {/* FOOTER (SCREEN ONLY) */}
      <footer className="w-full bg-[#FAFAFA] border-t border-[#EBEBEB] py-10 text-center text-[10px] text-[#888888] mt-16 print:hidden">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-2">
          <p className="m-0 leading-relaxed font-bold text-[#555555]">
            Dokumen Portofolio Resmi Ryan Andreas &bull; Dibuat secara otomatis untuk versi cetak PDF &bull; &copy; {new Date().getFullYear()}
          </p>
          <p className="m-0 text-[#888888]">
            Aplikasi ini dibangun menggunakan Next.js 16 & Tailwind CSS v4.
          </p>
        </div>
      </footer>

      {/* PRINT ENGINE SPECIFIC CUSTOM CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          /* General PDF Page Setup */
          html, body {
            background-color: white !important;
            color: black !important;
            font-family: system-ui, -apple-system, sans-serif !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          /* Force exact spacing for A4 margins */
          @page {
            size: A4;
            margin: 0; /* Handled by page container padding instead for perfect layout control */
          }

          /* Hide Web elements */
          .print\\:hidden {
            display: none !important;
          }

          /* Define clean A4 page wrapper */
          .pdf-page-wrapper {
            box-sizing: border-box;
            width: 210mm;
            height: 297mm;
            padding: 20mm 20mm 15mm 20mm;
            position: relative;
            background-color: white !important;
            color: black !important;
          }

          /* Page Break Controls */
          .page-break-section {
            page-break-after: always !important;
            break-after: page !important;
          }

          /* Custom Fixed Footer per PDF Page */
          .pdf-page-footer {
            position: absolute;
            bottom: 12mm;
            left: 20mm;
            right: 20mm;
            text-align: center;
            font-size: 8pt !important;
            color: #718096 !important;
            border-top: 1px solid #E2E8F0 !important;
            padding-top: 3mm;
          }

          /* Text styling forces */
          h1, h2, h3, p, span, div {
            color: black !important;
          }

          /* Ensure images and components are crisp and don't break mid-render */
          img {
            max-width: 100% !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
        }
      ` }} />
    </div>
  );
}
