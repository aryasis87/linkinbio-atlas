import Link from 'next/link';
import { CATATAN, KARYA, SITE } from '@/lib/atlas';
import Kembali from '../components/Kembali';

export const metadata = {
  title: 'Karya Terpilih',
  description: 'Indeks lima proyek Atlas Studio 2024–2026 — identitas kedai kopi, koperasi tenun, klinik gigi, penerbit, dan pekan film — beserta catatan studio.',
  alternates: { canonical: `${SITE}/karya` },
};

export default function Karya() {
  return (
    <>
      <Kembali judul="Index 01 — Karya" />
      <main className="mx-auto max-w-6xl px-6 py-14 md:px-12">
        <h1 className="rise text-5xl font-extrabold uppercase leading-[0.95] md:text-7xl">Karya<br />terpilih<span className="text-accent">.</span></h1>
        <p className="rise mt-5 max-w-md text-sm leading-relaxed text-ink/75" style={{ animationDelay: '0.08s' }}>Lima proyek yang paling banyak mengajari kami. Satu kalimat masalah, satu angka hasil.</p>

        <div className="mt-12 overflow-x-auto" tabIndex={0} role="region" aria-label="Indeks karya">
          <table className="w-full min-w-[46rem] border-collapse text-left">
            <caption className="sr-only">Daftar lima proyek Atlas Studio</caption>
            <thead>
              <tr className="border-b-2 border-ink font-mono text-[11px] uppercase tracking-[0.18em] text-ink/65">
                {['No', 'Tahun', 'Klien', 'Lingkup', 'Hasil'].map((h) => <th key={h} scope="col" className="py-3 pr-4 font-normal">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {KARYA.map((k) => (
                <tr key={k.no} className="hairline group border-b align-top transition-colors hover:bg-ink hover:text-paper">
                  <td className="py-5 pr-4 font-mono text-xs text-ink/60 group-hover:text-accent">{k.no}</td>
                  <td className="py-5 pr-4 font-mono text-sm">{k.tahun}</td>
                  <th scope="row" className="py-5 pr-4 text-left">
                    <span className="block font-display text-2xl font-bold uppercase tracking-tight">{k.nama}</span>
                    <span className="mt-1 block text-xs font-normal text-ink/65 group-hover:text-paper/75">{k.sektor} — {k.ringkas}</span>
                  </th>
                  <td className="py-5 pr-4 text-sm">{k.lingkup}</td>
                  <td className="py-5 text-sm">{k.hasil}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section id="catatan" aria-labelledby="catatan-h" className="mt-20 scroll-mt-8 grid gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <h2 id="catatan-h" className="text-3xl font-extrabold uppercase leading-none md:text-4xl">Catatan<br />studio<span className="text-accent">.</span></h2>
          <ol className="border-t-2 border-ink">
            {CATATAN.map((c) => (
              <li key={c.judul} className="hairline border-b py-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/65">{c.tanggal}</p>
                <h3 className="mt-2 text-xl font-bold">{c.judul}</h3>
                <p className="mt-2 leading-relaxed text-ink/80">{c.isi}</p>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 bg-ink p-8 text-paper md:flex-row md:items-center">
          <p className="font-display text-2xl font-bold uppercase">Punya brief satu halaman?</p>
          <Link href="/layanan#jadwal" className="border border-paper px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-accent hover:border-accent">Jadwalkan pertemuan →</Link>
        </div>
        <p className="mt-8 text-xs text-ink/65">Klien dan hasil adalah contoh purwarupa desain.</p>
      </main>
    </>
  );
}
