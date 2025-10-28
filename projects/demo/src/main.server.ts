import {type ApplicationRef, ErrorHandler, mergeApplicationConfig} from '@angular/core';
import {bootstrapApplication, type BootstrapContext} from '@angular/platform-browser';
import {provideServerRendering} from '@angular/platform-server';
import {provideServerRouting, RenderMode, type ServerRoute} from '@angular/ssr';
import {DemoRoute} from '@demo/routes';
import {UNIVERSAL_PROVIDERS} from '@ng-web-apis/universal';

import {App} from './modules/app/app.component';
import {config} from './modules/app/app.config';
import {ROUTES} from './modules/app/app.routes';
import {ServerErrorHandler} from './modules/app/server-error-handler';

/* eslint-disable @typescript-eslint/require-await */

const serverConfig = mergeApplicationConfig(config, {
    providers: [
        provideServerRendering(),
        provideServerRouting(
            ROUTES.map((route) => {
                const path = route.path ?? '';

                switch (path) {
                    case DemoRoute.Breakpoints:
                    case DemoRoute.DialogLazyRoutable:
                    case DemoRoute.Portals:
                    case DemoRoute.Viewport:
                        return withTabs(path, ['Setup']);
                    case DemoRoute.Colors:
                        return withTabs(path, [
                            'Status',
                            'Base_palette',
                            'Support_palette',
                            'Setup',
                        ]);
                    case DemoRoute.DialogRoutable:
                        return withTabs(path, ['NamedOutlet', 'Setup']);
                    case DemoRoute.I18N:
                        return withTabs(path, ['Dynamic_loader']);
                    case DemoRoute.Surface:
                        return withTabs(path, ['Layers']);
                    default:
                        return /^\/(components|directives|pipes|services|utils|layout|navigation|charts|experimental|legacy)/.exec(
                            path,
                        )
                            ? withTabs(path, ['API', 'Setup'])
                            : {
                                  path,
                                  renderMode: RenderMode.Prerender,
                                  async getPrerenderParams() {
                                      return [];
                                  },
                              };
                }
            }),
        ),
        UNIVERSAL_PROVIDERS,
        {provide: ErrorHandler, useClass: ServerErrorHandler},
    ],
});

function withTabs(path: string, tabs: string[]): ServerRoute {
    return {
        path: `${path}/:tab`,
        renderMode: RenderMode.Prerender,
        async getPrerenderParams() {
            return tabs.map((tab) => ({tab}));
        },
    };
}

export default async (context: BootstrapContext): Promise<ApplicationRef> =>
    bootstrapApplication(App, serverConfig, context);
