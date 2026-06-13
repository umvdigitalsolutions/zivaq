export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://zivaqpharma.com/sitemap.xml",
    host: "https://zivaqpharma.com",
  };
}
