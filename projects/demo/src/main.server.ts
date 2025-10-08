import {type ApplicationRef, ErrorHandler, mergeApplicationConfig} from '@angular/core';
import {bootstrapApplication, type BootstrapContext} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideServerRendering} from '@angular/platform-server';
import {UNIVERSAL_PROVIDERS} from '@ng-web-apis/universal';

import {App} from './modules/app/app.component';
import {config} from './modules/app/app.config';
import {ServerErrorHandler} from './modules/app/server-error-handler';

const serverConfig = mergeApplicationConfig(config, {
    providers: [
        provideServerRendering(),
        provideAnimations(),
        UNIVERSAL_PROVIDERS,
        {
            provide: ErrorHandler,
            useClass: ServerErrorHandler,
        },
    ],
});

export default async (context: BootstrapContext): Promise<ApplicationRef> =>
    bootstrapApplication(App, serverConfig, context);
