import '@ng-web-apis/universal/mocks';
import 'zone.js/node';

import {APP_BASE_HREF} from '@angular/common';
import {provideLocation, provideUserAgent} from '@ng-web-apis/universal';
import {ngExpressEngine} from '@nguniversal/express-engine';
import express, {Express} from 'express';
import {existsSync} from 'fs';
import {join} from 'path';

import {AppServerModule} from './src/main.server';

global.requestAnimationFrame = global.setImmediate as any;

global.cancelAnimationFrame = () => {};

// The Express app is exported so that it can be used by serverless Functions.
export function app(): Express {
    const server = express();
    const distFolder = join(process.cwd(), `dist/demo/browser`);
    const indexHtml = existsSync(join(distFolder, `index.original.html`))
        ? `index.original.html`
        : `index`;

    // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
    server.engine(
        `html`,
        ngExpressEngine({
            bootstrap: AppServerModule,
        }) as any,
    );

    server.set(`view engine`, `html`);
    server.set(`views`, distFolder);

    // Example Express Rest API endpoints
    // server.get('/api/**', (req, res) => { });
    // Serve static files from /browser
    server.get(
        `*.*`,
        express.static(distFolder, {
            maxAge: `1y`,
        }) as any,
    );

    // All regular routes use the Universal engine
    server.get(`*`, (req, res) => {
        res.render(indexHtml, {
            req,
            providers: [
                {provide: APP_BASE_HREF, useValue: req.baseUrl},
                provideLocation(req),
                provideUserAgent(req),
            ],
        });
    });

    return server;
}

function run(): void {
    const port = process.env.PORT || 4000;

    // Start up the Node server
    const server = app();

    server.listen(port, () => {
        console.info(`Node Express server listening on http://localhost:${port}`);
    });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule?.filename || ``;

if (moduleFilename === __filename || moduleFilename.includes(`iisnode`)) {
    run();
}

export * from './src/main.server';
