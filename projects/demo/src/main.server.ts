import type {ApplicationRef} from '@angular/core';
import {ErrorHandler, importProvidersFrom, mergeApplicationConfig} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideServerRendering, ServerModule} from '@angular/platform-server';
import {UNIVERSAL_PROVIDERS} from '@ng-web-apis/universal';

import {App} from './modules/app/app.component';
import {config} from './modules/app/app.config';
import {ServerErrorHandler} from './modules/app/server-error-handler';

const serverConfig = mergeApplicationConfig(config, {
    providers: [
        importProvidersFrom(ServerModule),
        provideServerRendering(),
        UNIVERSAL_PROVIDERS,
        {
            provide: ErrorHandler,
            useClass: ServerErrorHandler,
        },
    ],
});

export default async (): Promise<ApplicationRef> =>
    bootstrapApplication(App, serverConfig);
