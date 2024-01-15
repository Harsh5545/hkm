// generateSitemap.js
const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

// Your React app's routes
const routes = [
    "/",
    "/about",
    "/course",
    "/student-project",
    "/contact",
    "/course/game-design",
    '/course/3d-jewelry-design',
    '/course/3d-architectural', 
    '/course/video-editing',
    '/course/3d-animation',
    '/course/visual-effect',
    '/course/2d-animation',
    '/course/graphics-design',
    '/course/graphics-animation-program',
    '/course/game-design-program' 
  // Add more routes as needed
];

const createSitemap = async () => {
  const sitemapStream = new SitemapStream({
    hostname: "https://harshadkajale.online",
  }); // replace with your website URL

  // Add URLs to the sitemap
  routes.forEach((route) => {
    sitemapStream.write({ url: route });
  });

  // End the stream
  sitemapStream.end();

  // Convert the stream to a string
  const sitemapContent = await streamToPromise(sitemapStream).then((data) =>
    data.toString()
  );

  // Save the sitemap to a file
  fs.writeFileSync("dist/sitemap.xml", sitemapContent, "utf8");
};

createSitemap();
