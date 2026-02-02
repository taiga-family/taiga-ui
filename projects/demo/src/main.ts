import {enableProdMode} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';

import {environment} from './environments/environment';
import {App} from './pages/app/app.component';
import {config} from './pages/app/app.config';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(App, config).catch((err: unknown) => console.error(err));
