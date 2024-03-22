import {enableProdMode} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';

import {environment} from './environments/environment';
import {AppComponent} from './modules/app/app.component';
import {config} from './modules/app/app.config';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, config).catch(err => console.error(err));
