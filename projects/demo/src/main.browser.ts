import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {environment} from './environments/environment';
import {hmrBootstrap} from './hmr';
import {AppBrowserModule} from './modules/app/app.browser.module';

if (environment.production) {
    enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppBrowserModule);

if (environment.hmr) {
    if ((module as any)['hot']) {
        hmrBootstrap(module, bootstrap);
    } else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
} else {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            bootstrap().catch(err => console.log(err));
        });
    });
}
