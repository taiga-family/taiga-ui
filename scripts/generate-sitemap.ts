import {readFileSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';

(function generateSitemap() {
    const path = join(process.cwd(), 'projects', 'demo', 'routes.txt');
    const demoRoutesFileContent = readFileSync(path, 'utf-8');
    const origin = 'https://taiga-ui.dev';
    const routesArray = demoRoutesFileContent
        .split(/\r?\n/)
        .filter((line) => line.trim() !== '');

    const urls = routesArray
        .map(
            (route) => `  <url>
    <loc>${origin}${route}/</loc>
  </url>`,
        )
        .join('\n');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
    `;

    writeFileSync(join(process.cwd(), 'projects', 'demo', 'sitemap.xml'), sitemap);
})();
