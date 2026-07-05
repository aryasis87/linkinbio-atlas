export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://linkinbio-atlas.vercel.app/sitemap.xml",
    host: "https://linkinbio-atlas.vercel.app",
  };
}
