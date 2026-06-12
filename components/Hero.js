"use client";
import { useEffect } from 'react';

const R = '#e51e2a';
const services = ['Web Development', 'Digital Marketing', 'Branding & Desain', 'SEO & Optimasi', 'Konsultasi Strategi'];
const marqueeItems = [...services, ...services]; // double for seamless loop

function LetterStagger({ text, className = '', style = {} }) {
  return (
    <span className={'letter-wrap ' + className} style={style}>
      {text.split('').map((ch, i) => (
        <span key={i} className='ch' style={{ whiteSpace: ch === ' ' ? 'pre' : 'normal' }}>
          <span>{ch === ' ' ? ' ' : ch}</span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section style={{ background: '#fff', paddingTop: '56px' }}>
      {/* Top bar */}
      <div style={{ borderBottom: '2px solid #0a0a0a' }}>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 h-10 flex justify-between items-center'>
          <span className='font-black text-xs uppercase tracking-widest rv left' style={{ color: 'rgba(10,10,10,0.3)', letterSpacing: '0.2em' }}>
            Est. 2018 · Jakarta · Indonesia
          </span>
          <span className='font-black text-xs uppercase tracking-widest rv right' style={{ color: R, letterSpacing: '0.15em' }}>
            ● Open for Projects
          </span>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Main grid */}
        <div className='grid lg:grid-cols-12' style={{ borderBottom: '2px solid #0a0a0a' }}>
          {/* Headline */}
          <div className='lg:col-span-8 py-12 sm:py-16 pr-0 lg:pr-8' style={{ borderRight: '2px solid #0a0a0a' }}>
            <h1 className='font-black leading-none' style={{ fontSize: 'clamp(3.5rem,11vw,9.5rem)', letterSpacing: '-0.05em', lineHeight: '0.9', color: '#0a0a0a' }}>
              <LetterStagger text='DIGITAL' className='d1'/><br/>
              <LetterStagger text='AGENCY' style={{ color: R }} className='d2'/><br/>
              <LetterStagger text='UNTUK' className='d3'/><br/>
              <LetterStagger text='BISNIS' className='d4'/><br/>
              <LetterStagger text='ANDA.' className='d5'/>
            </h1>
          </div>

          {/* Right */}
          <div className='lg:col-span-4 flex flex-col' style={{ borderTop: '2px solid #0a0a0a' }}>
            <div className='p-6 sm:p-8 flex-1 rv up' style={{ borderBottom: '2px solid #0a0a0a' }}>
              <p className='text-base leading-relaxed mb-6' style={{ color: 'rgba(10,10,10,0.5)' }}>
                Kami hadir untuk membawa bisnis Anda ke level berikutnya melalui strategi digital yang terukur dan berdampak nyata.
              </p>
              <div className='flex gap-3'>
                <a href='#kontak' className='font-black text-xs uppercase tracking-widest px-5 py-3 transition-all hover:opacity-75'
                  style={{ background: '#0a0a0a', color: '#fff', textDecoration: 'none', letterSpacing: '0.1em' }}>
                  Mulai →
                </a>
                <a href='#portofolio' className='font-bold text-xs uppercase tracking-widest px-5 py-3 transition-all'
                  style={{ border: '2px solid #0a0a0a', color: '#0a0a0a', textDecoration: 'none', letterSpacing: '0.1em' }}>
                  Karya
                </a>
              </div>
            </div>
            {/* Stats — counter animation */}
            <div className='grid grid-cols-3'>
              {[{ num:'150', suffix:'+', label:'Proyek' }, { num:'4.9', suffix:'★', label:'Rating' }, { num:'98', suffix:'%', label:'Puas' }].map((s, i) => (
                <div key={s.label} className='p-4 sm:p-5 text-center rv scale'
                  style={{ borderRight: i < 2 ? '2px solid #0a0a0a' : 'none', transitionDelay: (i*0.1)+'s' }}>
                  <div className='font-black text-2xl' style={{ color: R }}>
                    <span data-target={s.num+s.suffix}>0{s.suffix}</span>
                  </div>
                  <div className='font-bold text-xs uppercase tracking-widest mt-1' style={{ color: 'rgba(10,10,10,0.3)', letterSpacing: '0.1em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services strip — static */}
        <div className='flex overflow-x-auto' style={{ borderBottom: '2px solid #0a0a0a' }}>
          {services.map((s, i) => (
            <div key={s} className='flex-shrink-0 flex items-center gap-4 px-6 py-4'
              style={{ borderRight: i < services.length - 1 ? '2px solid #0a0a0a' : 'none' }}>
              <span className='font-black text-xs' style={{ color: R }}>{String(i + 1).padStart(2, '0')}</span>
              <span className='font-bold text-xs uppercase tracking-widest whitespace-nowrap' style={{ letterSpacing: '0.08em' }}>{s}</span>
            </div>
          ))}
        </div>

        {/* Clients */}
        <div className='flex flex-wrap gap-8 py-4 items-center rv up'>
          <span className='font-black text-xs uppercase tracking-widest' style={{ color: 'rgba(10,10,10,0.2)', letterSpacing: '0.15em' }}>Klien:</span>
          {['Tokopedia', 'Gojek', 'BCA', 'Pertamina', 'Unilever'].map((c,i) => (
            <span key={c} className={'font-black text-sm rv up d'+( i+1)} style={{ color: 'rgba(10,10,10,0.18)' }}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
