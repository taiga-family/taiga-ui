import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {
    TUI_DOC_CODE_EDITOR,
    TUI_DOC_DEFAULT_TABS,
    TUI_DOC_LOGO,
    TUI_DOC_PAGES,
    TUI_DOC_SEE_ALSO,
    TUI_DOC_TITLE,
} from '@taiga-ui/addon-doc';
import {TUI_SANITIZER} from '@taiga-ui/cdk';
import {iconsPathFactory, TUI_ICONS_PATH} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import {TUI_DOC_EXAMPLE_CONTENT_PROCESSOR} from '../../../../addon-doc/src/tokens/example-content-processor';
import {PROMPT_PROVIDER} from '../customization/dialogs/examples/prompt/prompt.component';
import {FrontEndExample} from '../interfaces/front-end-example';
import {SEE_ALSO_GROUPS} from './app.const';
import {LOGO_CONTENT} from './logo/logo.component';
import {pages} from './pages';
import {StackblitzService} from './stackblitz/stackblitz.service';

export const DEFAULT_TABS = [
    $localize`Description and examples`,
    $localize`API`,
    $localize`Setup`,
    $localize`How to use`,
];
const TITLE_PREFIX = 'Taiga UI: ';

export const HIGHLIGHT_OPTIONS_VALUE = {
    coreLibraryLoader: () => import('highlight.js/lib/core'),
    lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
    languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        less: () => import('highlight.js/lib/languages/less'),
        xml: () => import('highlight.js/lib/languages/xml'),
    },
};

export function exampleContentProcessor(content: FrontEndExample): FrontEndExample {
    if (!content.TypeScript) {
        return content;
    }

    const withChangeDetectionImport = addIntoExistingImport(
        content.TypeScript,
        'ChangeDetectionStrategy',
        '@angular/core',
    );

    return {
        ...content,
        TypeScript: withChangeDetectionImport
            .replace(/import {encapsulation} from '..\/.*';\n/gm, '')
            .replace(/import {changeDetection} from '..\/.*';\n/gm, '')
            .replace(/\n +encapsulation,/gm, '')
            .replace(
                /changeDetection,/gm,
                'changeDetection: ChangeDetectionStrategy.OnPush,',
            ),
    };
}

export function addIntoExistingImport(
    data: string = '',
    entity: string = '',
    packageName: string = '',
): string {
    const packageImportsRegex = new RegExp(
        `(?:import\\s?\\{\\r?\\n?)(?:(?:.*),\\r?\\n?)*?(?:.*?)\\r?\\n?} from (?:'|")${packageName}(?:'|");`,
        'gm',
    );

    return data.replace(packageImportsRegex, parsed => {
        return parsed.replace('{', `{${entity}, `);
    });
}

export const ICONS_PATH = iconsPathFactory('assets/taiga-ui/icons/');

export const APP_PROVIDERS = [
    Title,
    PROMPT_PROVIDER,
    {
        provide: HIGHLIGHT_OPTIONS,
        useValue: HIGHLIGHT_OPTIONS_VALUE,
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
        provide: TUI_DOC_LOGO,
        useValue: LOGO_CONTENT,
    },
    {
        provide: TUI_DOC_CODE_EDITOR,
        useClass: StackblitzService,
    },
    {
        provide: TUI_DOC_EXAMPLE_CONTENT_PROCESSOR,
        useValue: exampleContentProcessor,
    },
];
