"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Printer, Download, Mail, MapPin, Phone, Calendar, Sparkles, Globe } from 'lucide-react';

export default function CvClientPage() {
  const [siteUrl, setSiteUrl] = useState("ryanandreas.com");
  const [isDownloading, setIsDownloading] = useState(false);
  const cvContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSiteUrl(window.location.hostname);
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      const element = cvContainerRef.current;
      if (!element) return;

      const html2pdf = (await import('html2pdf.js/src/index.js')).default;
      const opt = {
        margin:       0,
        filename:     'CV_Ryan_Andreas.pdf',
        image:        { type: 'jpeg' as const, quality: 0.98 },
        html2canvas:  { 
          scale: 2.5, // High resolution for crisp text
          useCORS: true, 
          logging: false,
          letterRendering: true
        },
        jsPDF:        { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const },
        pagebreak:    { mode: ['css', 'legacy'] }
      };

      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Gagal mengunduh PDF CV:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  // QR code content pointing to portfolio url
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://ryanandreas-portofolio.vercel.app/";

  return (
    <div className="min-h-screen bg-slate-50 text-[#111111] antialiased flex flex-col relative overflow-hidden font-sans pb-16">
      
      {/* BACKGROUND DECORATIONS (SCREEN VIEW ONLY) */}
      <div className="absolute top-0 left-[30%] w-[600px] h-[400px] flex opacity-30 blur-[120px] z-0 pointer-events-none print:hidden">
        <div className="grow shrink basis-0 rounded-full bg-[#00E5FF]" />
        <div className="grow shrink basis-0 -ml-[100px] mt-[80px] rounded-full bg-[#FFE600]" />
        <div className="grow shrink basis-0 -ml-[100px] rounded-full bg-[#FF00EA]" />
      </div>

      {/* FLOATING ACTION BAR (SCREEN VIEW ONLY) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl border border-slate-200/80 px-6 py-4 rounded-full shadow-2xl flex items-center gap-6 z-50 print:hidden transition-all duration-300 hover:border-black/20 hover:shadow-xl">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-black transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Kembali</span>
        </Link>
        
        <div className="w-px h-5 bg-slate-200" />

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-black transition-colors cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>Cetak</span>
        </button>

        <div className="w-px h-5 bg-slate-200" />
        
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex items-center gap-2.5 text-xs font-black text-white bg-black hover:bg-slate-900 px-6 py-3 rounded-full transition-all duration-200 cursor-pointer shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Download className="w-4 h-4" />
          <span>{isDownloading ? "Memproses PDF..." : "Unduh PDF"}</span>
        </button>
      </div>

      {/* MAIN CONTAINER */}
      <main className="grow w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16 relative z-10 print:p-0 print:m-0">
        
        {/* INTERACTIVE PRINT TIP BANNER (SCREEN VIEW ONLY) */}
        <div className="mb-8 p-5 bg-[#F9F9F9] border border-slate-200 rounded-2xl flex items-start gap-4 print:hidden max-w-3xl mx-auto shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-black" />
          <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600 leading-[1.7]">
            <span className="font-black text-black block mb-1">💡 Halaman CV Interaktif:</span>
            Halaman ini menampilkan CV Anda dalam format web modern. Anda dapat mengeklik tombol <strong>Unduh PDF</strong> untuk mendapatkan file PDF A4 resmi yang terisi penuh, atau klik <strong>Cetak</strong> untuk langsung mengirimkannya ke printer.
          </div>
        </div>

        {/* ==================== SCREEN VIEW PREVIEW (AESTHETIC DESKTOP WRAPPER) ==================== */}
        <div className="print:hidden max-w-[210mm] mx-auto bg-white shadow-2xl border border-slate-200 rounded-3xl overflow-hidden aspect-[210/297] flex">
          
          {/* Left Column (Sidebar) */}
          <div className="w-[33%] bg-slate-100 p-7 flex flex-col justify-between border-r border-slate-200">
            <div>
              {/* Profile Photo */}
              <div className="flex justify-center mb-6">
                <div className="w-44 h-44 rounded-full border-2 border-black bg-white p-1 shadow-md flex items-center justify-center">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image 
                      src="/photo-cv-circleframe.png" 
                      alt="Ryan Andreas" 
                      fill 
                      priority
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mb-6">
                <h3 className="text-[15px] font-black text-black uppercase tracking-wider border-b-2 border-black/80 pb-1 mb-3">
                  Contact
                </h3>
                <ul className="space-y-3 text-[13px] text-slate-700 leading-normal">
                  <li className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span>Jl. Setia III RT 01 RW 16 No 64 Cengkareng, Jakarta Barat</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-black shrink-0" />
                    <span>+62 82258415911</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-black shrink-0" />
                    <a href="mailto:ryanguansin@gmail.com" className="hover:underline text-black font-medium">ryanguansin@gmail.com</a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-black shrink-0" />
                    <a href="https://ryanandreas-portofolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline text-black font-semibold">
                      ryanandreas-portofolio.vercel.app
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-black shrink-0" />
                    <span>Jakarta, 25 Juli 1999</span>
                  </li>
                </ul>
              </div>

              {/* Skills Section */}
              <div>
                <h3 className="text-[15px] font-black text-black uppercase tracking-wider border-b-2 border-black/80 pb-1 mb-3">
                  Skills
                </h3>
                <ul className="space-y-2.5 text-[13px] text-slate-700 leading-normal">
                  <li className="flex items-start gap-1.5">
                    <span className="text-black font-bold">&#10022;</span>
                    <span>HTML, CSS, JavaScript, TypeScript</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-black font-bold">&#10022;</span>
                    <span>React.js & Next.js</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-black font-bold">&#10022;</span>
                    <span>Node.js & Express.js</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-black font-bold">&#10022;</span>
                    <span>PHP & Laravel</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-black font-bold">&#10022;</span>
                    <span>Flutter</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-black font-bold">&#10022;</span>
                    <span>MySQL, PostgreSQL</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-black font-bold">&#10022;</span>
                    <span>AWS Cloud & NeonDB</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-black font-bold">&#10022;</span>
                    <span>Git & GitHub</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center gap-1.5 mt-6">
              <div className="relative w-24 h-24 bg-white border border-slate-200 p-1 rounded-lg">
                <a href="https://ryanandreas-portofolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img 
                    src={qrCodeUrl} 
                    alt="My Portfolio QR Code" 
                    className="w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </a>
              </div>
              <a 
                href="https://ryanandreas-portofolio.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[11px] font-black tracking-widest text-slate-800 uppercase hover:underline"
              >
                My Portfolio
              </a>
              <a 
                href="https://ryanandreas-portofolio.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[9.5px] text-slate-500 hover:underline mt-0.5"
              >
                ryanandreas-portofolio.vercel.app
              </a>
              <div className="w-10 h-0.5 bg-slate-300 mt-1" />
            </div>
          </div>

          {/* Right Column (Content) */}
          <div className="w-[67%] p-9 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-4xl font-extrabold tracking-tight text-black m-0 uppercase leading-none">
                  Ryan Andreas
                </h1>
                <p className="text-[15px] font-bold text-slate-500 mt-2 mb-0 uppercase tracking-widest">
                  Web & Mobile Developer
                </p>
              </div>

              {/* Profile */}
              <div className="mb-6">
                <h3 className="text-[13px] font-black text-black uppercase tracking-widest border-b border-slate-200 pb-1 mb-2.5">
                  Profile
                </h3>
                <p className="text-[13px] leading-relaxed text-slate-700 m-0">
                  Saya adalah seorang Web & Mobile Developer dengan latar belakang Teknik Informatika dan pengalaman dalam membangun serta memelihara aplikasi digital untuk kebutuhan bisnis dan organisasi. Berpengalaman dalam pengembangan sistem, integrasi layanan digital, serta pengelolaan infrastruktur aplikasi.
                </p>
              </div>

              {/* Education */}
              <div className="mb-6">
                <h3 className="text-[13px] font-black text-black uppercase tracking-widest border-b border-slate-200 pb-1 mb-2.5">
                  Education
                </h3>
                <div className="space-y-3.5">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-[13px] font-black text-black m-0 uppercase">
                        Sarjana Teknik Informatika
                      </h4>
                      <span className="text-xs text-slate-500 italic block mt-0.5">
                        Universitas Esa Unggul
                      </span>
                    </div>
                    <span className="shrink-0 text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      2018 – 2024
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-[13px] font-black text-black m-0 uppercase">
                        SMK Jurusan Akses
                      </h4>
                      <span className="text-xs text-slate-500 italic block mt-0.5">
                        SMK Telkom Jakarta
                      </span>
                    </div>
                    <span className="shrink-0 text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      2014 – 2017
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-[13px] font-black text-black m-0 uppercase">
                        Sekolah Dasar & Menengah Pertama
                      </h4>
                      <span className="text-xs text-slate-500 italic block mt-0.5">
                        SD-SMP Seraphine Bakti Utama
                      </span>
                    </div>
                    <span className="shrink-0 text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      2005 – 2014
                    </span>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h3 className="text-[13px] font-black text-black uppercase tracking-widest border-b border-slate-200 pb-1 mb-2.5">
                  Work Experience
                </h3>
                <div className="space-y-4">
                  {/* Job 1 */}
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-1.5">
                      <div>
                        <h4 className="text-[13px] font-black text-black m-0 uppercase">
                          Fullstack Developer
                        </h4>
                        <span className="text-xs text-slate-500 italic block mt-0.5">
                          PT LAB WELCOM PLAY
                        </span>
                      </div>
                      <span className="shrink-0 text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        Maret 2025 – Present
                      </span>
                    </div>
                    <p className="text-[13px] leading-relaxed text-slate-700 m-0">
                      Pengalaman sebagai Backend dan Frontend Developer aplikasi web menggunakan Next.js, Laravel, dan Flutter. Memiliki pengalaman dalam pengelolaan database menggunakan PostgreSQL dan NeonDB, serta integrasi payment gateway seperti Midtrans.
                    </p>
                  </div>

                  {/* Job 2 */}
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-1.5">
                      <div>
                        <h4 className="text-[13px] font-black text-black m-0 uppercase">
                          Freelance Front End Developer
                        </h4>
                        <span className="text-xs text-slate-500 italic block mt-0.5">
                          Aigorhythm Sdn. Bhd.
                        </span>
                      </div>
                      <span className="shrink-0 text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        Desember 2024 – Present
                      </span>
                    </div>
                    <p className="text-[13px] leading-relaxed text-slate-700 m-0">
                      Saya mendapat pengalaman dalam mengembangkan web app laravel, melakukan maintenance aplikasi mobile seperti pembaruan fitur, update versi, dan perbaikan bug, serta memahami pengelolaan infrastruktur berbasis cloud AWS untuk mendukung performa dan stabilitas sistem.
                    </p>
                  </div>

                  {/* Job 3 */}
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-1.5">
                      <div>
                        <h4 className="text-[13px] font-black text-black m-0 uppercase">
                          University Intern
                        </h4>
                        <span className="text-xs text-slate-500 italic block mt-0.5">
                          PT Citra Powerindo Sakti
                        </span>
                      </div>
                      <span className="shrink-0 text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        2023
                      </span>
                    </div>
                    <p className="text-[13px] leading-relaxed text-slate-700 m-0">
                      Berpengalaman sebagai IT Support yang bertanggung jawab atas pemeliharaan perangkat keras (hardware) kantor (PC, printer, kabel LAN, router) serta troubleshooting perangkat jaringan.
                    </p>
                  </div>

                  {/* Job 4 */}
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-1.5">
                      <div>
                        <h4 className="text-[13px] font-black text-black m-0 uppercase">
                          Vocational High School Intern
                        </h4>
                        <span className="text-xs text-slate-500 italic block mt-0.5">
                          PT Indonusa Telemedia (Wardiere Inc.)
                        </span>
                      </div>
                      <span className="shrink-0 text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        2017
                      </span>
                    </div>
                    <p className="text-[13px] leading-relaxed text-slate-700 m-0">
                      Berpengalaman sebagai Uplink Assistant dengan kompetensi dalam pemeliharaan infrastruktur stasiun bumi (earth station) pada sistem transmisi televisi kabel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-[9px] text-slate-400 border-t border-slate-100 pt-2 text-right mt-4">
              &copy; {new Date().getFullYear()}{" "}Ryan Andreas &bull; Curriculum Vitae
            </div>
          </div>

        </div>

        {/* ==================== A4 PRINT ENGINE LAYOUT (RENDERED ONLY FOR PDF AND PRINT) ==================== */}
        <div 
          ref={cvContainerRef}
          className="absolute -top-[99999px] -left-[99999px] opacity-0 pointer-events-none print:static print:opacity-100 print:pointer-events-auto"
          style={{ width: '210mm', height: '297mm' }}
        >
          <div className="flex w-full h-full bg-white text-black font-sans box-border" style={{ height: '297mm' }}>
            
            {/* Print Sidebar (Left 33%) */}
            <div className="w-[33%] bg-[#F3F4F6] p-[7mm] flex flex-col justify-between border-r border-[#E5E7EB]" style={{ height: '100%' }}>
              <div>
                {/* Profile Photo */}
                <div className="flex justify-center mb-[5mm]">
                  <div className="w-[42mm] h-[42mm] rounded-full border-[0.6mm] border-black bg-white p-[1mm] flex items-center justify-center">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <img 
                        src="/photo-cv-circleframe.png" 
                        alt="Ryan Andreas" 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="mb-[6mm]">
                  <h3 className="text-[15px] font-black text-black uppercase tracking-wider border-b-2 border-black pb-[0.8mm] mb-[3mm]">
                    Contact
                  </h3>
                  <div className="space-y-[3mm] text-[13px] text-[#374151] leading-normal">
                    <div className="flex items-start gap-[1.5mm]">
                      <MapPin className="w-[3.2mm] h-[3.2mm] text-black shrink-0 mt-[0.5mm]" />
                      <span>Jl. Setia III RT 01 RW 16 No 64 Cengkareng, Jakarta Barat</span>
                    </div>
                    <div className="flex items-center gap-[1.5mm]">
                      <Phone className="w-[3.2mm] h-[3.2mm] text-black shrink-0" />
                      <span>+62 82258415911</span>
                    </div>
                    <div className="flex items-center gap-[1.5mm]">
                      <Mail className="w-[3.2mm] h-[3.2mm] text-black shrink-0" />
                      <span>ryanguansin@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-[1.5mm]">
                      <Globe className="w-[3.2mm] h-[3.2mm] text-black shrink-0" />
                      <a href="https://ryanandreas-portofolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-black font-semibold underline">
                        ryanandreas-portofolio.vercel.app
                      </a>
                    </div>
                    <div className="flex items-center gap-[1.5mm]">
                      <Calendar className="w-[3.2mm] h-[3.2mm] text-black shrink-0" />
                      <span>Jakarta, 25 Juli 1999</span>
                    </div>
                  </div>
                </div>

                {/* Skills Section */}
                <div>
                  <h3 className="text-[15px] font-black text-black uppercase tracking-wider border-b-2 border-black pb-[0.8mm] mb-[3mm]">
                    Skills
                  </h3>
                  <ul className="space-y-[2.2mm] text-[13px] text-[#374151] leading-normal pl-[0.5mm]">
                    <li className="flex items-start gap-[1mm]">
                      <span className="text-black font-bold">&#10022;</span>
                      <span>HTML, CSS, JavaScript, TypeScript</span>
                    </li>
                    <li className="flex items-start gap-[1mm]">
                      <span className="text-black font-bold">&#10022;</span>
                      <span>React.js & Next.js</span>
                    </li>
                    <li className="flex items-start gap-[1mm]">
                      <span className="text-black font-bold">&#10022;</span>
                      <span>Node.js & Express.js</span>
                    </li>
                    <li className="flex items-start gap-[1mm]">
                      <span className="text-black font-bold">&#10022;</span>
                      <span>PHP & Laravel</span>
                    </li>
                    <li className="flex items-start gap-[1mm]">
                      <span className="text-black font-bold">&#10022;</span>
                      <span>Flutter</span>
                    </li>
                    <li className="flex items-start gap-[1mm]">
                      <span className="text-black font-bold">&#10022;</span>
                      <span>MySQL, PostgreSQL</span>
                    </li>
                    <li className="flex items-start gap-[1mm]">
                      <span className="text-black font-bold">&#10022;</span>
                      <span>AWS Cloud & NeonDB</span>
                    </li>
                    <li className="flex items-start gap-[1mm]">
                      <span className="text-black font-bold">&#10022;</span>
                      <span>Git & GitHub</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex flex-col items-center gap-[1mm] mt-auto">
                <div className="w-[22mm] h-[22mm] bg-white border border-[#E5E7EB] p-[1.2mm] rounded-lg">
                  <a href="https://ryanandreas-portofolio.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src={qrCodeUrl} 
                      alt="My Portfolio QR Code" 
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>
                <a 
                  href="https://ryanandreas-portofolio.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[11px] font-black tracking-widest text-[#1F2937] uppercase underline mt-[0.8mm]"
                >
                  My Portfolio
                </a>
                <a 
                  href="https://ryanandreas-portofolio.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[9.5px] text-[#4B5563] underline mt-[0.3mm]"
                >
                  ryanandreas-portofolio.vercel.app
                </a>
                <div className="w-[6mm] h-[0.5mm] bg-[#D1D5DB] mt-[1mm]" />
              </div>
            </div>

            {/* Print Content (Right 67%) */}
            <div className="w-[67%] p-[8mm] flex flex-col justify-between" style={{ height: '100%' }}>
              <div>
                {/* Header */}
                <div className="mb-[5mm]">
                  <h1 className="text-4xl font-extrabold tracking-tight text-black m-0 uppercase leading-none">
                    Ryan Andreas
                  </h1>
                  <p className="text-[15px] font-bold text-[#6B7280] mt-[1.5mm] mb-0 uppercase tracking-widest">
                    Web & Mobile Developer
                  </p>
                </div>

                {/* Profile */}
                <div className="mb-[5mm]">
                  <h3 className="text-[13px] font-black text-black uppercase tracking-widest border-b border-[#E5E7EB] pb-[0.8mm] mb-[2mm]">
                    Profile
                  </h3>
                  <p className="text-[13px] leading-[1.5] text-[#374151] m-0">
                    Saya adalah seorang Web & Mobile Developer dengan latar belakang Teknik Informatika dan pengalaman dalam membangun serta memelihara aplikasi digital untuk kebutuhan bisnis dan organisasi. Berpengalaman dalam pengembangan sistem, integrasi layanan digital, serta pengelolaan infrastruktur aplikasi.
                  </p>
                </div>

                {/* Education */}
                <div className="mb-[5mm]">
                  <h3 className="text-[13px] font-black text-black uppercase tracking-widest border-b border-[#E5E7EB] pb-[0.8mm] mb-[2mm]">
                    Education
                  </h3>
                  <div className="space-y-[3.5mm]">
                    <div className="flex justify-between items-start gap-[3mm]">
                      <div>
                        <h4 className="text-[13px] font-black text-black m-0 uppercase">
                          Sarjana Teknik Informatika
                        </h4>
                        <span className="text-xs text-[#6B7280] italic block mt-[0.3mm]">
                          Universitas Esa Unggul
                        </span>
                      </div>
                      <span className="shrink-0 text-[11px] font-bold text-[#4B5563] bg-[#F3F4F6] px-[2mm] py-[0.3mm] rounded border border-[#E5E7EB]">
                        2018 – 2024
                      </span>
                    </div>

                    <div className="flex justify-between items-start gap-[3mm]">
                      <div>
                        <h4 className="text-[13px] font-black text-black m-0 uppercase">
                          SMK Jurusan Akses
                        </h4>
                        <span className="text-xs text-[#6B7280] italic block mt-[0.3mm]">
                          SMK Telkom Jakarta
                        </span>
                      </div>
                      <span className="shrink-0 text-[11px] font-bold text-[#4B5563] bg-[#F3F4F6] px-[2mm] py-[0.3mm] rounded border border-[#E5E7EB]">
                        2014 – 2017
                      </span>
                    </div>

                    <div className="flex justify-between items-start gap-[3mm]">
                      <div>
                        <h4 className="text-[13px] font-black text-black m-0 uppercase">
                          Sekolah Dasar & Menengah Pertama
                        </h4>
                        <span className="text-xs text-[#6B7280] italic block mt-[0.3mm]">
                          SD-SMP Seraphine Bakti Utama
                        </span>
                      </div>
                      <span className="shrink-0 text-[11px] font-bold text-[#4B5563] bg-[#F3F4F6] px-[2mm] py-[0.3mm] rounded border border-[#E5E7EB]">
                        2005 – 2014
                      </span>
                    </div>
                  </div>
                </div>

                {/* Work Experience */}
                <div>
                  <h3 className="text-[13px] font-black text-black uppercase tracking-widest border-b border-[#E5E7EB] pb-[0.8mm] mb-[2mm]">
                    Work Experience
                  </h3>
                  <div className="space-y-[4.5mm]">
                    {/* Job 1 */}
                    <div>
                      <div className="flex justify-between items-start gap-[3mm] mb-[0.8mm]">
                        <div>
                          <h4 className="text-[13px] font-black text-black m-0 uppercase">
                            Fullstack Developer
                          </h4>
                          <span className="text-xs text-[#6B7280] italic block mt-[0.3mm]">
                            PT LAB WELCOM PLAY
                          </span>
                        </div>
                        <span className="shrink-0 text-[11px] font-bold text-[#4B5563] bg-[#F3F4F6] px-[2mm] py-[0.3mm] rounded border border-[#E5E7EB]">
                          Maret 2025 – Present
                        </span>
                      </div>
                      <p className="text-[13px] leading-[1.45] text-[#374151] m-0">
                        Pengalaman sebagai Backend dan Frontend Developer aplikasi web menggunakan Next.js, Laravel, dan Flutter. Memiliki pengalaman dalam pengelolaan database menggunakan PostgreSQL dan NeonDB, serta integrasi payment gateway seperti Midtrans.
                      </p>
                    </div>

                    {/* Job 2 */}
                    <div>
                      <div className="flex justify-between items-start gap-[3mm] mb-[0.8mm]">
                        <div>
                          <h4 className="text-[13px] font-black text-black m-0 uppercase">
                            Freelance Front End Developer
                          </h4>
                          <span className="text-xs text-[#6B7280] italic block mt-[0.3mm]">
                            Aigorhythm Sdn. Bhd.
                          </span>
                        </div>
                        <span className="shrink-0 text-[11px] font-bold text-[#4B5563] bg-[#F3F4F6] px-[2mm] py-[0.3mm] rounded border border-[#E5E7EB]">
                          Desember 2024 – Present
                        </span>
                      </div>
                      <p className="text-[13px] leading-[1.45] text-[#374151] m-0">
                        Saya mendapat pengalaman dalam mengembangkan web app laravel, melakukan maintenance aplikasi mobile seperti pembaruan fitur, update versi, dan perbaikan bug, serta memahami pengelolaan infrastruktur berbasis cloud AWS untuk mendukung performa dan stabilitas sistem.
                      </p>
                    </div>

                    {/* Job 3 */}
                    <div>
                      <div className="flex justify-between items-start gap-[3mm] mb-[0.8mm]">
                        <div>
                          <h4 className="text-[13px] font-black text-black m-0 uppercase">
                            University Intern
                          </h4>
                          <span className="text-xs text-[#6B7280] italic block mt-[0.3mm]">
                            PT Citra Powerindo Sakti
                          </span>
                        </div>
                        <span className="shrink-0 text-[11px] font-bold text-[#4B5563] bg-[#F3F4F6] px-[2mm] py-[0.3mm] rounded border border-[#E5E7EB]">
                          2023
                        </span>
                      </div>
                      <p className="text-[13px] leading-[1.45] text-[#374151] m-0">
                        Berpengalaman sebagai IT Support yang bertanggung jawab atas pemeliharaan perangkat keras (hardware) kantor (PC, printer, kabel LAN, router) serta troubleshooting perangkat jaringan.
                      </p>
                    </div>

                    {/* Job 4 */}
                    <div>
                      <div className="flex justify-between items-start gap-[3mm] mb-[0.8mm]">
                        <div>
                          <h4 className="text-[13px] font-black text-black m-0 uppercase">
                            Vocational High School Intern
                          </h4>
                          <span className="text-xs text-[#6B7280] italic block mt-[0.3mm]">
                            PT Indonusa Telemedia (Wardiere Inc.)
                          </span>
                        </div>
                        <span className="shrink-0 text-[11px] font-bold text-[#4B5563] bg-[#F3F4F6] px-[2mm] py-[0.3mm] rounded border border-[#E5E7EB]">
                          2017
                        </span>
                      </div>
                      <p className="text-[13px] leading-[1.45] text-[#374151] m-0">
                        Berpengalaman sebagai Uplink Assistant dengan kompetensi dalam pemeliharaan infrastruktur stasiun bumi (earth station) pada sistem transmisi televisi kabel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-[7.5pt] text-[#9CA3AF] border-t border-[#F3F4F6] pt-[1.5mm] text-right mt-auto">
                Ryan Andreas &bull; Curriculum Vitae
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* PRINT ENGINE SPECIFIC CUSTOM CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          html, body {
            background-color: white !important;
            color: black !important;
            font-family: system-ui, -apple-system, sans-serif !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          @page {
            size: A4;
            margin: 0;
          }

          .print\\:hidden {
            display: none !important;
          }
        }
      ` }} />
    </div>
  );
}
