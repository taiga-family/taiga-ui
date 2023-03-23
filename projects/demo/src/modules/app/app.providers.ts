import {
    APP_BASE_HREF,
    DOCUMENT,
    isPlatformBrowser,
    LocationStrategy,
    PathLocationStrategy,
} from '@angular/common';
import {inject, PLATFORM_ID, Provider} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {UrlTree} from '@angular/router';
import {
    TUI_DOC_CODE_EDITOR,
    TUI_DOC_DEFAULT_TABS,
    TUI_DOC_EXAMPLE_CONTENT_PROCESSOR,
    TUI_DOC_LOGO,
    TUI_DOC_PAGES,
    TUI_DOC_SCROLL_BEHAVIOR,
    TUI_DOC_SEE_ALSO,
    TUI_DOC_SOURCE_CODE,
    TUI_DOC_TITLE,
    TUI_DOC_URL_STATE_HANDLER,
    TuiDocSourceCodePathOptions,
} from '@taiga-ui/addon-doc';
import {
    TUI_DIALOG_CLOSES_ON_BACK,
    TUI_ENSURE_BASE_HREF,
    TUI_IS_CYPRESS,
    TUI_TAKE_ONLY_TRUSTED_EVENTS,
} from '@taiga-ui/cdk';
import {
    TUI_ANIMATIONS_DURATION,
    TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
    TUI_DROPDOWN_HOVER_OPTIONS,
    TUI_HINT_DEFAULT_OPTIONS,
    TUI_HINT_OPTIONS,
    TUI_SANITIZER,
} from '@taiga-ui/core';
import {TuiLanguageName, tuiLanguageSwitcher} from '@taiga-ui/i18n';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {of} from 'rxjs';

import {PROMPT_PROVIDER} from '../customization/dialogs/examples/1/prompt/prompt.service';
import {SEE_ALSO_GROUPS} from './app.const';
import {TUI_DEFAULT_TABS} from './app.tabs';
import {LOGO_CONTENT} from './logo/logo.component';
import {pages} from './pages';
import {TuiStackblitzService} from './stackblitz/stackblitz.service';
import {exampleContentProcessor} from './utils';

export const APP_PROVIDERS: Provider[] = [
    Title,
    PROMPT_PROVIDER,
    {
        provide: APP_BASE_HREF,
        // @note: By default, on webcontainer.io will not be provided APP_BASE_HREF, we use fallback
        useFactory: () => inject(DOCUMENT).getElementsByTagName(`base`)?.[0]?.href || `/`,
    },
    {
        provide: HIGHLIGHT_OPTIONS,
        useFactory: () => {
            const isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

            return {
                coreLibraryLoader: async () => import(`highlight.js/lib/core`),
                lineNumbersLoader: async () =>
                    // SSR ReferenceError: window is not defined
                    isBrowser ? import(`highlightjs-line-numbers.js`) : Promise.resolve(),
                languages: {
                    typescript: async () =>
                        import(`highlight.js/lib/languages/typescript`),
                    less: async () => import(`highlight.js/lib/languages/less`),
                    xml: async () => import(`highlight.js/lib/languages/xml`),
                },
            };
        },
    },
    {
        provide: TUI_SANITIZER,
        useClass: NgDompurifySanitizer,
    },
    {
        provide: TUI_DOC_SOURCE_CODE,
        useValue: (context: TuiDocSourceCodePathOptions) => {
            const link = `https://github.com/tinkoff/taiga-ui/tree/main/projects`;

            if (!context.package) {
                return null;
            }

            if (context.type) {
                return `${link}/${context.package.toLowerCase()}/${context.type.toLowerCase()}/${(
                    context.header[0].toLowerCase() + context.header.slice(1)
                ).replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}`;
            }

            return `${link}/${context.path}`;
        },
    },
    {
        provide: LocationStrategy,
        useClass: PathLocationStrategy,
    },
    {
        provide: TUI_DOC_TITLE,
        useValue: `Taiga UI: `,
    },
    {
        provide: TUI_DOC_PAGES,
        useValue: pages,
    },
    {
        provide: TUI_DOC_SEE_ALSO,
        useValue: SEE_ALSO_GROUPS,
    },
    {
        provide: TUI_DOC_DEFAULT_TABS,
        useValue: TUI_DEFAULT_TABS,
    },
    {
        provide: TUI_DOC_LOGO,
        useValue: LOGO_CONTENT,
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
        provide: TUI_ANIMATIONS_DURATION,
        useFactory: () => (inject(TUI_IS_CYPRESS) ? 0 : 300),
    },
    {
        provide: TUI_HINT_OPTIONS,
        useFactory: () =>
            inject(TUI_IS_CYPRESS)
                ? {...TUI_HINT_DEFAULT_OPTIONS, showDelay: 0, hideDelay: 0}
                : TUI_HINT_DEFAULT_OPTIONS,
    },
    {
        provide: TUI_DROPDOWN_HOVER_OPTIONS,
        useFactory: () =>
            inject(TUI_IS_CYPRESS)
                ? {...TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS, showDelay: 0, hideDelay: 0}
                : TUI_DROPDOWN_HOVER_DEFAULT_OPTIONS,
    },
    {
        provide: TUI_DOC_SCROLL_BEHAVIOR,
        useFactory: () => (inject(TUI_IS_CYPRESS) ? `auto` : `smooth`), // https://github.com/cypress-io/cypress/issues/4640
    },
    {
        provide: TUI_TAKE_ONLY_TRUSTED_EVENTS,
        useFactory: () => !inject(TUI_IS_CYPRESS),
    },
    {
        provide: TUI_DIALOG_CLOSES_ON_BACK,
        // TODO: change it back after solving https://github.com/Tinkoff/taiga-ui/issues/3270
        // useFactory: () => of(!tuiIsInsideIframe(inject(WINDOW))), // for cypress tests
        useFactory: () => of(inject(TUI_IS_CYPRESS)),
    },
    {
        provide: TUI_DOC_URL_STATE_HANDLER,
        deps: [TUI_ENSURE_BASE_HREF],
        useFactory: (baseHref: string) => (tree: UrlTree) =>
            String(tree).replace(baseHref, ``),
    },
    tuiLanguageSwitcher(
        async (language: TuiLanguageName): Promise<unknown> =>
            import(
                /* webpackMode: "lazy" */
                /* webpackChunkName: "i18n-lazy-" */
                `dist/i18n/esm2015/languages/${language}`
            ),
    ),
];
