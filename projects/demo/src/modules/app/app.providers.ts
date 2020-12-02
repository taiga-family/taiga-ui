import {DOCUMENT, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {APP_BOOTSTRAP_LISTENER} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {CSS, USER_AGENT} from '@ng-web-apis/common';
import {
    TUI_DOC_DEFAULT_TABS,
    TUI_DOC_PAGES,
    TUI_DOC_SEE_ALSO,
    TUI_DOC_TITLE,
} from '@taiga-ui/addon-doc';
import {TUI_SANITIZER} from '@taiga-ui/cdk';
import {iconsPathFactory, TUI_ICONS_PATH} from '@taiga-ui/core';
import {areCssVarsSupported} from '@taiga-ui/core/utils/dom';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import cssVars from 'css-vars-ponyfill';
import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {SEE_ALSO_GROUPS} from './app.const';
import {languages} from './languages';
import {pages} from './pages';

export function bootstrapListenerFactory(
    documentRef: Document,
    cssRef: any, // TODO: change it to CSS if you have TS 3.9+ (https://github.com/ng-web-apis/common/pull/6)
    userAgent: string,
): () => void {
    const factory = () => {
        if (areCssVarsSupported(cssRef, userAgent)) {
            return;
        }

        cssVars({
            rootElement: documentRef,
            onlyLegacy: false,
            watch: true,
        });
    };

    return factory;
}

const DEFAULT_TABS = [
    'Описание и примеры',
    'Свойства и методы',
    'Подключение',
    'Правила использования',
];
const TITLE_PREFIX = 'Taiga UI: ';

export const ICONS_PATH = iconsPathFactory('assets/taiga-ui/icons/');

export const APP_PROVIDERS = [
    Title,
    {
        provide: HIGHLIGHT_OPTIONS,
        useValue: {
            languages,
        },
    },
    {
        provide: TUI_SANITIZER,
        useClass: NgDompurifySanitizer,
    },
    {
        provide: TUI_ICONS_PATH,
        useValue: ICONS_PATH,
    },
    {
        provide: LocationStrategy,
        useClass: PathLocationStrategy,
    },
    {
        provide: TUI_DOC_TITLE,
        useValue: TITLE_PREFIX,
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
        useValue: DEFAULT_TABS,
    },
    {
        provide: APP_BOOTSTRAP_LISTENER,
        deps: [DOCUMENT, CSS, USER_AGENT],
        useFactory: bootstrapListenerFactory,
        multi: true,
    },
];
