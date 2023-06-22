import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgZoneOptionsCoalescing} from '@demo/emulate/ng-zone-options';

import {environment} from './environments/environment';
import {AppBrowserModule} from './modules/app/app.browser.module';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppBrowserModule, NgZoneOptionsCoalescing)
    .catch(err => console.error(err));
