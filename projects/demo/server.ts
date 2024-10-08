import 'zone.js/node';

import {existsSync} from 'node:fs';
import {join} from 'node:path';

import {APP_BASE_HREF} from '@angular/common';
import {provideLocation, provideUserAgent} from '@ng-web-apis/universal';
import {ngExpressEngine} from '@nguniversal/express-engine';
import express from 'express';

import bootstrap from './src/main.server';

declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule?.filename ?? '';

if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
    const port = process.env['PORT'] ?? 4000;

    const server = express();
    const dist = join(process.cwd(), 'dist/demo/browser');

    server.engine('html', ngExpressEngine({bootstrap}));
    server.set('view engine', 'html');
    server.set('views', dist);
    server.get('*.*', express.static(dist, {maxAge: '1y'}));
    server.get('*', (req, res) => {
        res.render(
            existsSync(join(dist, 'index.original.html'))
                ? 'index.original.html'
                : 'index',
            {
                req,
                providers: [
                    {provide: APP_BASE_HREF, useValue: req.baseUrl},
                    provideLocation(req),
                    provideUserAgent(req),
                ],
            },
        );
    });

    server.listen(port, () =>
        console.info(`Node Express server listening on http://localhost:${port}`),
    );
}

export * from './src/main.server';

export default bootstrap;
