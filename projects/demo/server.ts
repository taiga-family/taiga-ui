import 'zone.js/node';

import {existsSync} from 'node:fs';
import {join} from 'node:path';

import {APP_BASE_HREF} from '@angular/common';
import {CommonEngine} from '@angular/ssr/node';
import {provideLocation, provideUserAgent} from '@ng-web-apis/universal';
import express from 'express';

import bootstrap from './src/main.server';

declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule?.filename ?? '';

if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
    const port = Number(process.env['PORT'] ?? 4000);
    const server = express();
    const dist = join(process.cwd(), 'dist/demo/browser');
    const indexHtml = existsSync(join(dist, 'index.original.html'))
        ? 'index.original.html'
        : 'index.html';

    // Serve only static asset requests (with a dot in the last segment) before SSR
    server.get('*.*', express.static(dist, {maxAge: '1y'}));

    const engine = new CommonEngine();

    // All other routes get server-rendered HTML
    server.get('*', async (req, res, next) => {
        try {
            const html = await engine.render({
                bootstrap,
                documentFilePath: join(dist, indexHtml),
                url: req.originalUrl,
                providers: [
                    {provide: APP_BASE_HREF, useValue: req.baseUrl || '/'},
                    provideLocation(req),
                    provideUserAgent(req),
                ],
            });

            res.status(200).send(html);
        } catch (err) {
            next(err);
        }
    });

    server.listen(port, () => {
        console.info(`SSR server listening on http://localhost:${port}`);
    });
}

export * from './src/main.server';

export default bootstrap;
