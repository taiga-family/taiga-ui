import {KeyValuePipe, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    inject,
    Input,
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
import {
    PAGE_PROVIDERS,
    PAGE_SEE_ALSO,
    TUI_DOC_PAGE_OPTIONS,
    TUI_DOC_TABS,
    type TuiDocPageOptions,
} from './page.providers';
import {TuiDocPageTabConnector} from './page-tab.directive';

@Component({
    standalone: true,
    selector: 'tui-doc-page',
    imports: [
        KeyValuePipe,
        NgForOf,
        NgIf,
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
    styleUrls: ['./page.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: PAGE_PROVIDERS,
})
export class TuiDocPage implements TuiDocPageOptions {
    protected readonly options = inject(TUI_DOC_PAGE_OPTIONS);
    protected readonly tabs = inject(TUI_DOC_TABS)(inject(ActivatedRoute).snapshot);
    protected readonly supportLanguage = inject(TUI_DOC_SUPPORT_LANGUAGE);
    protected readonly defaultTabs = inject(TUI_DOC_DEFAULT_TABS);
    protected readonly from = / /g;
    protected readonly to = '_';

    @Input()
    public header = this.options.header;

    @Input()
    public package = this.options.package;

    @Input()
    public type = this.options.type;

    @Input()
    public tags = this.options.tags;

    @Input()
    public path = this.options.path;

    @Input()
    public deprecated = this.options.deprecated;

    @ContentChildren(TuiDocPageTabConnector)
    public readonly tabConnectors: QueryList<TuiDocPageTabConnector> = EMPTY_QUERY;

    public activeItemIndex = 0;
    public readonly seeAlso = inject(PAGE_SEE_ALSO);

    public get showSeeAlso(): boolean {
        return !!this.seeAlso.length && this.activeItemIndex === 0;
    }
}
