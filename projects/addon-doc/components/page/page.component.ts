import {KeyValuePipe, NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    inject,
    input,
    model,
    type QueryList,
} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterLinkActive} from '@angular/router';
import {TUI_DOC_DEFAULT_TABS, TUI_DOC_SUPPORT_LANGUAGE} from '@taiga-ui/addon-doc/tokens';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiReplacePipe} from '@taiga-ui/cdk/pipes/replace';
import {TuiAutoColorPipe} from '@taiga-ui/core/pipes/auto-color';
import {TuiChip} from '@taiga-ui/kit/components/chip';
import {TuiTabs} from '@taiga-ui/kit/components/tabs';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiDocSeeAlso} from '../internal/see-also';
import {TuiDocSourceCode} from '../internal/source-code/source-code.component';
import {TuiDocLanguageSwitcher} from '../language-switcher';
import {PAGE_PROVIDERS, PAGE_SEE_ALSO, TUI_DOC_TABS} from './page.providers';
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
        TuiChip,
        TuiDocLanguageSwitcher,
        TuiDocSeeAlso,
        TuiDocSourceCode,
        TuiReplacePipe,
        TuiTabs,
    ],
    templateUrl: './page.template.html',
    styleUrl: './page.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: PAGE_PROVIDERS,
})
export class TuiDocPage {
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

    public readonly deprecated = input<boolean | ''>(false);

    @ContentChildren(TuiDocPageTabConnector)
    public readonly tabConnectors: QueryList<TuiDocPageTabConnector> = EMPTY_QUERY;

    public readonly activeItemIndex = model(0);

    public readonly seeAlso = inject(PAGE_SEE_ALSO);

    public get showSeeAlso(): boolean {
        return !!this.seeAlso.length && this.activeItemIndex() === 0;
    }
}
