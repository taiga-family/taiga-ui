// Load zone.js for the server.
import 'reflect-metadata';
import 'zone.js/dist/zone-node';

import {APP_BASE_HREF} from '@angular/common';
import {enableProdMode} from '@angular/core';
import {renderModuleFactory} from '@angular/platform-server';
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';
import {existsSync, mkdirSync, readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
import {PRERENDERED_ROUTES} from './static.paths';

enableProdMode();

const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('../server/main');
const BROWSER_FOLDER = join(process.cwd(), 'dist', 'browser');
const index = readFileSync(join(process.cwd(), 'dist', 'browser', 'index.html'), 'utf8');
const localFallback = 'http://localhost:3333/';

let previousRender = Promise.resolve();

// Iterate each route path
PRERENDERED_ROUTES.forEach(route => {
    const fullPath = join(BROWSER_FOLDER, route);

    // Make sure the directory structure is there
    if (!existsSync(fullPath)) {
        mkdirSync(fullPath);
    }

    // Writes rendered HTML to index.html, replacing the file if it already exists.
    previousRender = previousRender
        .then(() =>
            renderModuleFactory(AppServerModuleNgFactory, {
                document: index,
                url: route,
                extraProviders: [
                    provideModuleMap(LAZY_MODULE_MAP),
                    {
                        provide: APP_BASE_HREF,
                        useValue: process.env.ORIGIN || localFallback,
                    },
                ],
            }),
        )
        .then(html => writeFileSync(join(fullPath, 'index.html'), html));
});
