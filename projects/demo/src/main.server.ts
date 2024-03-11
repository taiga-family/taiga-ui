import '@angular/localize/init';

import {enableProdMode} from '@angular/core';

import {environment} from './environments/environment';

if (environment.production) {
    enableProdMode();
}

export {AppServerModule} from './modules/app/app.server.module';
export {renderModule} from '@angular/platform-server';
