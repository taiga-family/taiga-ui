import type {ApplicationRef} from '@angular/core';
import {ErrorHandler, importProvidersFrom, mergeApplicationConfig} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideServerRendering, ServerModule} from '@angular/platform-server';
import {RESIZE_OBSERVER_SUPPORT} from '@ng-web-apis/resize-observer';
import {UNIVERSAL_PROVIDERS} from '@ng-web-apis/universal';

import {AppComponent} from './modules/app/app.component';
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
        /**
         * TODO: drop it after update to @ng-web-apis/resize-observer@4.0.0
         * @see https://github.com/taiga-family/ng-web-apis/pull/350
         */
        {
            provide: RESIZE_OBSERVER_SUPPORT,
            useValue: true,
        },
    ],
});

export default async (): Promise<ApplicationRef> =>
    bootstrapApplication(AppComponent, serverConfig);
