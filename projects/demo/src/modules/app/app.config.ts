import {isPlatformBrowser, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import type {ApplicationConfig} from '@angular/core';
import {inject, PLATFORM_ID, provideZoneChangeDetection} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {provideAnimations} from '@angular/platform-browser/animations';
import type {UrlTree} from '@angular/router';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import {environment} from '@demo/environments/environment';
import {WA_SESSION_STORAGE} from '@ng-web-apis/common';
import type {TuiDocSourceCodePathOptions} from '@taiga-ui/addon-doc';
import {
    TUI_DOC_CODE_EDITOR,
    TUI_DOC_DEFAULT_TABS,
    TUI_DOC_EXAMPLE_CONTENT_PROCESSOR,
    TUI_DOC_LOGO,
    TUI_DOC_PAGES,
    TUI_DOC_SEARCH_ENABLED,
    TUI_DOC_SEE_ALSO,
    TUI_DOC_SOURCE_CODE,
    TUI_DOC_SUPPORT_LANGUAGE,
    TUI_DOC_TITLE,
    TUI_DOC_TYPE_REFERENCE_HANDLER,
    TUI_DOC_URL_STATE_HANDLER,
    tuiDocExampleOptionsProvider,
    tuiSortPages,
} from '@taiga-ui/addon-doc';
import {
    TUI_FALSE_HANDLER,
    TUI_IS_E2E,
    TUI_IS_PLAYWRIGHT,
    TUI_PLATFORM,
} from '@taiga-ui/cdk';
import {
    TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
    TUI_DROPDOWN_HOVER_OPTIONS,
    TUI_HINT_DEFAULT_OPTIONS,
    TUI_HINT_OPTIONS,
    tuiEnableFontScaling,
    tuiNotificationOptionsProvider,
} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import type {TuiLanguageName} from '@taiga-ui/i18n';
import {tuiLanguageSwitcher} from '@taiga-ui/i18n';
import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {catchError, map, of} from 'rxjs';

import {DEFAULT_LANGUAGE_PAGE, SEE_ALSO_GROUPS} from './app.const';
import {ROUTES} from './app.routes';
import {LOGO_CONTENT} from './logo/logo.component';
import {metrikaOptionsProvider} from './metrika/metrika.service';
import {pages} from './pages';
import {SEARCH_CONFIG} from './search/env';
import {TuiStackblitzService} from './stackblitz/stackblitz.service';
import {exampleContentProcessor} from './utils';

export const config: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideRouter(
            ROUTES,
            withInMemoryScrolling({
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
            }),
        ),
        NG_EVENT_PLUGINS,
        tuiEnableFontScaling(),
        tuiNotificationOptionsProvider({size: 'm'}),
        provideHttpClient(),
        {
            provide: TUI_PLATFORM,
            useValue: 'web',
        },
        {
            provide: TUI_IS_PLAYWRIGHT,
            useFactory: () => Boolean(inject(WA_SESSION_STORAGE).getItem('playwright')),
        },
        {
            provide: HIGHLIGHT_OPTIONS,
            useFactory: () => {
                const isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

                return {
                    coreLibraryLoader: async () => import('highlight.js/lib/core'),
                    lineNumbersLoader: async () =>
                        // SSR ReferenceError: window is not defined
                        isBrowser
                            ? import('ngx-highlightjs/line-numbers')
                            : Promise.resolve(),
                    languages: {
                        typescript: async () =>
                            import('highlight.js/lib/languages/typescript'),
                        less: async () => import('highlight.js/lib/languages/less'),
                        xml: async () => import('highlight.js/lib/languages/xml'),
                    },
                };
            },
        },
        {
            provide: TUI_DOC_SOURCE_CODE,
            useValue: ({
                type,
                path,
                header,
                package: pkg,
            }: TuiDocSourceCodePathOptions) => {
                const link =
                    'https://github.com/taiga-family/taiga-ui/tree/main/projects';

                if (!pkg) {
                    return null;
                }

                if (path) {
                    return `${link}/${path}`;
                }

                return `${link}/${pkg.toLowerCase()}/${type.toLowerCase()}/${(
                    (header[0]?.toLowerCase() ?? '') + header.slice(1)
                ).replaceAll(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}`;
            },
        },
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
        {
            provide: TUI_DOC_TITLE,
            useValue: 'Taiga UI: ',
        },
        {
            provide: TUI_DOC_PAGES,
            useValue: tuiSortPages(
                pages,
                new Set(['Documentation', 'Foundations', 'Icons']),
            ),
        },
        {
            provide: TUI_DOC_SEE_ALSO,
            useValue: SEE_ALSO_GROUPS,
        },
        {
            provide: TUI_DOC_DEFAULT_TABS,
            useValue: ['Examples', 'API', 'Setup', 'How to use'],
        },
        {
            provide: TUI_DOC_LOGO,
            useValue: LOGO_CONTENT,
        },
        {
            provide: TUI_DOC_SEARCH_ENABLED,
            deps: [HttpClient, SEARCH_CONFIG],
            useFactory: (
                client: HttpClient,
                {appId, apiKey}: {appId: string; apiKey: string},
            ) =>
                toSignal(
                    client
                        .post(
                            `https://${appId}-dsn.algolia.net/1/indexes/*/queries?&x-algolia-api-key=${apiKey}&x-algolia-application-id=${appId.toUpperCase()}`,
                            {requests: []},
                        )
                        .pipe(
                            map(TUI_FALSE_HANDLER),
                            catchError(() => of(true)),
                        ),
                    {initialValue: false},
                ),
        },
        {
            provide: TUI_DOC_CODE_EDITOR,
            useClass: TuiStackblitzService,
        },
        {
            provide: TUI_DOC_EXAMPLE_CONTENT_PROCESSOR,
            useValue: exampleContentProcessor,
        },
        {
            provide: TUI_HINT_OPTIONS,
            useFactory: () =>
                inject(TUI_IS_E2E)
                    ? {...TUI_HINT_DEFAULT_OPTIONS, showDelay: 0, hideDelay: 0}
                    : TUI_HINT_DEFAULT_OPTIONS,
        },
        {
            provide: TUI_DROPDOWN_HOVER_OPTIONS,
            useFactory: () =>
                inject(TUI_IS_E2E)
                    ? {...TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS, showDelay: 0, hideDelay: 0}
                    : TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
        },
        {
            provide: TUI_DOC_SUPPORT_LANGUAGE,
            useValue: DEFAULT_LANGUAGE_PAGE,
        },
        {
            provide: TUI_DOC_URL_STATE_HANDLER,
            useFactory: () => (tree: UrlTree) =>
                String(tree).replace(/^\/(next|v\d+)\//, ''),
        },
        {
            provide: TUI_DOC_TYPE_REFERENCE_HANDLER,
            useValue: (type: string) => {
                switch (type) {
                    case 'any':
                    case 'boolean':
                    case 'Map':
                    case 'null':
                    case 'number':
                    case 'Set':
                    case 'string':
                    case 'undefined':
                    case 'unknown':
                    case 'void':
                        return null;
                    case 'CustomEvent':
                    case 'Element':
                        return `https://developer.mozilla.org/en-US/docs/Web/API/${type}`;
                    case 'PolymorpheusContent':
                        return 'https://github.com/taiga-family/ng-polymorpheus';
                    case 'SafeResourceUrl':
                        return 'https://angular.dev/api/platform-browser/SafeResourceUrl';
                    case 'TrackByFunction':
                        return 'https://angular.dev/api/core/TrackByFunction';
                    default:
                        return `https://github.com/search?q=%2F%28enum%7Ctype%7Cinterface%7Cclass%7Cfunction%7Cconst%29+${type}%28%3C%7C%5Cs%29%2F+language%3ATypeScript+org%3Ataiga-family&type=code`;
                }
            },
        },
        tuiDocExampleOptionsProvider({fullsize: false}),
        metrikaOptionsProvider({id: environment.ym}),
        tuiLanguageSwitcher(
            async (language: TuiLanguageName): Promise<unknown> =>
                import(
                    /* webpackMode: "lazy" */
                    /* webpackChunkName: "i18n-lazy-" */
                    `dist/i18n/esm2022/languages/${language}`
                ),
        ),
        provideZoneChangeDetection({
            eventCoalescing: false,
            runCoalescing: false,
        }),
    ],
};
