import {KeyValuePipe, NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    contentChildren,
    inject,
    input,
    model,
} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterLinkActive} from '@angular/router';
import {TUI_DOC_DEFAULT_TABS, TUI_DOC_SUPPORT_LANGUAGE} from '@taiga-ui/addon-doc/tokens';
import {TuiTitle} from '@taiga-ui/core/components/title';
import {TuiBadge} from '@taiga-ui/kit/components/badge';
import {TuiSegmented} from '@taiga-ui/kit/components/segmented';
import {TuiFade} from '@taiga-ui/kit/directives/fade';
import {TuiAutoColorPipe} from '@taiga-ui/kit/pipes/auto-color';
import {TuiHeader} from '@taiga-ui/layout/components/header';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiDocSourceCode} from '../internal/source-code/source-code.component';
import {TuiDocLanguageSwitcher} from '../language-switcher';
import {TuiDocToc} from '../toc';
import {TUI_DOC_TABS} from './page.providers';
import {TuiDocPageTabConnector} from './page-tab.directive';

@Component({
    selector: 'tui-doc-page',
    imports: [
        KeyValuePipe,
        NgTemplateOutlet,
        PolymorpheusOutlet,
        RouterLink,
        RouterLinkActive,
        TuiAutoColorPipe,
        TuiBadge,
        TuiDocLanguageSwitcher,
        TuiDocSourceCode,
        TuiDocToc,
        TuiFade,
        TuiHeader,
        TuiSegmented,
        TuiTitle,
    ],
    templateUrl: './page.template.html',
    styleUrl: './page.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocPage {
    protected readonly tabConnectors = contentChildren(TuiDocPageTabConnector);
    protected readonly tabs = inject(TUI_DOC_TABS)(inject(ActivatedRoute).snapshot);
    protected readonly supportLanguage = inject(TUI_DOC_SUPPORT_LANGUAGE);
    protected readonly defaultTabs = inject(TUI_DOC_DEFAULT_TABS);
    protected readonly from = / /g;
    protected readonly to = '_';

    public readonly header = input('');
    public readonly package = input('');
    public readonly type = input('');
    public readonly tags = input<string[]>([]);
    public readonly path = input('');
    public readonly activeItemIndex = model(0);
}
