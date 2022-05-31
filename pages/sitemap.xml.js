import React from "react";
import * as fs from "fs";
const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  try{

    const BASE_URL = 'https://skillatria.com';
    
    const staticPaths = fs
      .readdirSync("pages")
      .filter((staticPage) => {
        return ![
          "api",
          "services",
          "_app.js",
          "_document.js",
          "404.js",
          "sitemap.xml.js",
        ].includes(staticPage);
      })
      .map((staticPagePath) => {
        return `${BASE_URL}/${staticPagePath}`;
      });
  
    const dynamicPaths = [];
    fs.readdirSync("pages/services")
    .map(item=>{
      const servicesUrl = `${BASE_URL}/services/${item}`
      dynamicPaths.push(servicesUrl)
  
    })
  
    const allPaths = [...staticPaths, ...dynamicPaths];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPaths
          .map((url) => {
            return `
              <url>
                <loc>${url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
          })
          .join("")}
      </urlset>
    `;
  
  //   const sitemap = `
  //   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  //   <url>
  //   <loc>https://skillatria.com/</loc>
  //   <lastmod>${new Date().toISOString()}</lastmod>
  //   <changefreq>monthly</changefreq>
  //   <priority>1.0</priority>
  // </url>
  //   <url>
  //   <loc>https://skillatria.com/services/websitedevelopment</loc>
  //   <lastmod>${new Date().toISOString()}</lastmod>
  //   <changefreq>monthly</changefreq>
  //   <priority>1.0</priority>
  // </url>
  //   <url>
  //   <loc>https://skillatria.com/services/graphicdesign</loc>
  //   <lastmod>${new Date().toISOString()}</lastmod>
  //   <changefreq>monthly</changefreq>
  //   <priority>1.0</priority>
  // </url>
  //   <url>
  //   <loc>https://skillatria.com/services/videoediting</loc>
  //   <lastmod>${new Date().toISOString()}</lastmod>
  //   <changefreq>monthly</changefreq>
  //   <priority>1.0</priority>
  // </url>
  //   <url>
  //   <loc>https://skillatria.com/services/applicationdevelopment</loc>
  //   <lastmod>${new Date().toISOString()}</lastmod>
  //   <changefreq>monthly</changefreq>
  //   <priority>1.0</priority>
  // </url>
  //   <url>
  //   <loc>https://skillatria.com/contact</loc>
  //   <lastmod>${new Date().toISOString()}</lastmod>
  //   <changefreq>monthly</changefreq>
  //   <priority>1.0</priority>
  // </url>
  // </urlset>
  //   `;
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    
    return {
      props: {},
    };
  } catch(err){
    console.log(err)
  } 
};

export default Sitemap;
