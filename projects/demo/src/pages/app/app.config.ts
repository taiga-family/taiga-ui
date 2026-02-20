import {LocationStrategy, PathLocationStrategy, ViewportScroller} from '@angular/common';
import {HttpClient, provideHttpClient, withFetch} from '@angular/common/http';
import {
    type ApplicationConfig,
    inject,
    provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    NavigationStart,
    provideRouter,
    Router,
    type UrlTree,
    withInMemoryScrolling,
} from '@angular/router';
import {environment} from '@demo/environments/environment';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {
    TUI_DOC_CODE_EDITOR,
    TUI_DOC_DEFAULT_TABS,
    TUI_DOC_DIRECTION_ENABLED,
    TUI_DOC_EXAMPLE_CONTENT_PROCESSOR,
    TUI_DOC_LOGO,
    TUI_DOC_PAGES,
    TUI_DOC_PAGES_ICONS,
    TUI_DOC_SEARCH_ENABLED,
    TUI_DOC_SEE_ALSO,
    TUI_DOC_SOURCE_CODE,
    TUI_DOC_SOURCE_CODE_TEXT,
    TUI_DOC_SUPPORT_LANGUAGE,
    TUI_DOC_TITLE,
    TUI_DOC_TYPE_REFERENCE_HANDLER,
    TUI_DOC_URL_STATE_HANDLER,
    tuiDocExampleOptionsProvider,
    tuiDocIconsProvider,
    type TuiDocSourceCodePathOptions,
    tuiSortPages,
} from '@taiga-ui/addon-doc';
import {TUI_FALSE_HANDLER, TUI_PLATFORM} from '@taiga-ui/cdk';
import {
    provideTaiga,
    TUI_DIALOGS_CLOSE,
    TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
    TUI_DROPDOWN_HOVER_OPTIONS,
    TUI_HINT_DEFAULT_OPTIONS,
    TUI_HINT_OPTIONS,
    tuiNotificationOptionsProvider,
} from '@taiga-ui/core';
import {type TuiLanguageName, tuiLanguageSwitcher} from '@taiga-ui/i18n';
import {provideHighlightOptions} from 'ngx-highlightjs';
import {catchError, filter, map, merge, of} from 'rxjs';

import {AuthService} from '../components/dialog/examples/5/service';
import {DEFAULT_LANGUAGE_PAGE, SEE_ALSO_GROUPS} from './app.const';
import {ROUTES} from './app.routes';
import {LOGO_CONTENT} from './logo/logo.component';
import {metrikaOptionsProvider} from './metrika/metrika.service';
import {pages} from './pages';
import {SEARCH_CONFIG} from './search/env';
import {TuiStackblitzService} from './stackblitz/stackblitz.service';
import {exampleContentProcessor} from './utils';
import {TuiViewportScroller} from './utils/viewport-scroller.service';

export const config: ApplicationConfig = {
    providers: [
        provideRouter(
            ROUTES,
            withInMemoryScrolling({
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
            }),
        ),
        provideTaiga(),
        tuiNotificationOptionsProvider({size: 'm'}),
        provideHttpClient(withFetch()),
        {
            provide: ViewportScroller,
            useClass: TuiViewportScroller,
        },
        {
            provide: TUI_PLATFORM,
            useValue: 'web',
        },
        provideHighlightOptions({
            coreLibraryLoader: async () => import('highlight.js/lib/core'),
            lineNumbersLoader: async () => import('ngx-highlightjs/line-numbers'),
            languages: {
                typescript: async () => import('highlight.js/lib/languages/typescript'),
                less: async () => import('highlight.js/lib/languages/less'),
                xml: async () => import('highlight.js/lib/languages/xml'),
                bash: async () => import('highlight.js/lib/languages/bash'),
            },
        }),
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
            provide: TUI_DOC_DIRECTION_ENABLED,
            useValue: true,
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
                inject(WA_IS_E2E)
                    ? {...TUI_HINT_DEFAULT_OPTIONS, showDelay: 0, hideDelay: 0}
                    : TUI_HINT_DEFAULT_OPTIONS,
        },
        {
            provide: TUI_DROPDOWN_HOVER_OPTIONS,
            useFactory: () =>
                inject(WA_IS_E2E)
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
                String(tree).replace(/^\/(?:next|v\d+)\//, ''),
        },
        {
            provide: TUI_DOC_TYPE_REFERENCE_HANDLER,
            useValue: (type: string) => {
                switch (type) {
                    case 'any':
                    case 'bigint':
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
        tuiLanguageSwitcher(async (language: TuiLanguageName): Promise<unknown> => {
            switch (language) {
                case 'arabic':
                    return import('@taiga-ui/i18n/languages/arabic');
                case 'belarusian':
                    return import('@taiga-ui/i18n/languages/belarusian');
                case 'chinese':
                    return import('@taiga-ui/i18n/languages/chinese');
                case 'dutch':
                    return import('@taiga-ui/i18n/languages/dutch');
                case 'english':
                    return import('@taiga-ui/i18n/languages/english');
                case 'french':
                    return import('@taiga-ui/i18n/languages/french');
                case 'german':
                    return import('@taiga-ui/i18n/languages/german');
                case 'greek':
                    return import('@taiga-ui/i18n/languages/greek');
                case 'hebrew':
                    return import('@taiga-ui/i18n/languages/hebrew');
                case 'italian':
                    return import('@taiga-ui/i18n/languages/italian');
                case 'japanese':
                    return import('@taiga-ui/i18n/languages/japanese');
                case 'kazakh':
                    return import('@taiga-ui/i18n/languages/kazakh');
                case 'korean':
                    return import('@taiga-ui/i18n/languages/korean');
                case 'lithuanian':
                    return import('@taiga-ui/i18n/languages/lithuanian');
                case 'malay':
                    return import('@taiga-ui/i18n/languages/malay');
                case 'polish':
                    return import('@taiga-ui/i18n/languages/polish');
                case 'portuguese':
                    return import('@taiga-ui/i18n/languages/portuguese');
                case 'russian':
                    return import('@taiga-ui/i18n/languages/russian');
                case 'spanish':
                    return import('@taiga-ui/i18n/languages/spanish');
                case 'turkish':
                    return import('@taiga-ui/i18n/languages/turkish');
                case 'ukrainian':
                    return import('@taiga-ui/i18n/languages/ukrainian');
                case 'vietnamese':
                    return import('@taiga-ui/i18n/languages/vietnamese');
                default:
                    return import('@taiga-ui/i18n/languages/english');
            }
        }),
        provideExperimentalZonelessChangeDetection(),
        {
            provide: TUI_DIALOGS_CLOSE,
            useFactory: () =>
                merge(
                    inject(AuthService),
                    inject(Router).events.pipe(
                        filter((e) => e instanceof NavigationStart),
                    ),
                ),
        },
        {
            provide: TUI_DOC_PAGES_ICONS,
            useValue: {
                'Getting Started': '@tui.rocket',
                Documentation: '@tui.file-code-corner',
                Components: '@tui.puzzle',
                Form: '@tui.form',
                Layout: '@tui.layout-panel-left',
                Navigation: '@tui.compass',
                Charts: '@tui.chart-pie',
                Tools: '@tui.hammer',
            },
        },
        {
            provide: TUI_DOC_SOURCE_CODE_TEXT,
            useValue: 'GitHub',
        },
        tuiDocIconsProvider({code: '@tui.github'}),
    ],
};
