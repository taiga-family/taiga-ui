import {enableProdMode} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';

import {environment} from './environments/environment';
import {App} from './modules/app/app.component';
import {config} from './modules/app/app.config';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(App, config).catch(err => console.error(err));
