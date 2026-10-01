'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { LINKS, PROFIL } from '@/lib/atlas';

export default function Home() {
  const [time, setTime] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const f = () => setTime(new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta' }));
    f();
    const t = setInterval(f, 30000);
    return () => clearInterval(t);
  }, []);

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(PROFIL.surel); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch {}
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col md:flex-row">
      {/* Panel kiri — ink */}
      <section className="rise relative flex flex-col justify-between bg-ink px-8 py-10 text-paper md:w-[44%] md:px-12 md:py-14">
        <div>
          <div className="flex items-center justify-between">
            <span aria-hidden="true" className="grid h-11 w-11 place-items-center border border-white/25 font-display text-lg font-bold">A</span>
            <p className="font-mono text-xs text-white/70">BDG <span suppressHydrationWarning>{time}</span><span className="tick" aria-hidden="true">_</span></p>
          </div>
          <h1 className="mt-14 text-5xl font-extrabold uppercase leading-[0.95] md:mt-24 md:text-6xl">
            Atlas<br />Studio<span className="text-accent">.</span>
          </h1>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">{PROFIL.bio}</p>
        </div>
        <div className="mt-12 space-y-2 text-sm text-white/75">
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/65">Kontak</p>
          <button type="button" onClick={copyEmail} className="group flex items-center gap-2 font-medium text-paper transition hover:text-accent" aria-label={`Salin alamat surel ${PROFIL.surel}`}>
            {PROFIL.surel} {copied ? <Check size={14} className="text-accent" aria-hidden="true" /> : <Copy size={14} className="opacity-60 group-hover:opacity-100" aria-hidden="true" />}
          </button>
          <p role="status" className="min-h-5 text-xs text-accent">{copied ? 'Tersalin.' : ''}</p>
          <p>{PROFIL.kota}, Indonesia · juga di Instagram & Behance sebagai {PROFIL.handle}</p>
        </div>
      </section>

      {/* Panel kanan — index */}
      <section className="flex flex-1 flex-col justify-center px-8 py-12 md:px-14">
        <p className="rise text-[11px] uppercase tracking-[0.3em] text-ink/65" style={{ animationDelay: '0.1s' }}>Index — pilih tujuan</p>
        <nav className="mt-6" aria-label="Tautan utama">
          {LINKS.map((l, i) => (
            <Link
              key={l.no}
              href={l.href}
              className="rise hairline group flex items-baseline gap-5 border-t py-5 transition-colors last:border-b hover:bg-ink hover:px-4 hover:text-paper"
              style={{ animationDelay: `${0.15 + i * 0.07}s` }}
            >
              <span className="font-mono text-xs text-ink/60 transition group-hover:text-accent">{l.no}</span>
              <span className="flex-1">
                <span className="block font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">{l.label}</span>
                <span className="mt-0.5 block text-xs text-ink/65 transition group-hover:text-paper/75">{l.meta}</span>
              </span>
              <ArrowUpRight size={20} className="translate-y-1 text-ink/50 transition duration-300 group-hover:translate-x-1 group-hover:text-accent" aria-hidden="true" />
            </Link>
          ))}
        </nav>
        <p className="rise mt-8 text-xs text-ink/65" style={{ animationDelay: '0.55s' }}>Studio fiktif untuk purwarupa desain — klien dan harga hanya contoh.</p>
      </section>
    </main>
  );
}
