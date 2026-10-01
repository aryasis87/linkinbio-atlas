import Link from "next/link";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-8 md:px-14">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink/65">Index 404</p>
      <h1 className="mt-4 text-6xl font-extrabold uppercase leading-[0.9] md:text-8xl">Tidak ada<br />di indeks<span className="text-accent">.</span></h1>
      <Link href="/" className="hairline mt-10 flex max-w-md items-baseline justify-between border-y py-5 font-display text-2xl font-bold uppercase hover:bg-ink hover:px-4 hover:text-paper">
        Kembali ke index <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
