import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    inject,
    Input,
} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TUI_DOC_DEFAULT_TABS} from '@taiga-ui/addon-doc/tokens';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {TuiReplacePipe} from '@taiga-ui/cdk/pipes/replace';
import {TuiAutoColorPipe} from '@taiga-ui/core/pipes/auto-color';
import {TuiChip} from '@taiga-ui/kit/components/chip';
import {TuiTabs} from '@taiga-ui/kit/components/tabs';

import {TuiDocSeeAlso} from '../internal/see-also';
import {TuiDocSourceCode} from '../internal/source-code/source-code.component';
import {PAGE_PROVIDERS, PAGE_SEE_ALSO} from './page.providers';
import {TuiDocPageTabConnector} from './page-tab.directive';

@Component({
    standalone: true,
    selector: 'tui-doc-page',
    imports: [
        TuiChip,
        NgIf,
        TuiAutoColorPipe,
        TuiTabs,
        NgForOf,
        TuiItem,
        RouterLink,
        RouterLinkActive,
        TuiReplacePipe,
        TuiDocSourceCode,
        TuiDocSeeAlso,
        NgTemplateOutlet,
    ],
    templateUrl: './page.template.html',
    styleUrls: ['./page.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: PAGE_PROVIDERS,
})
export class TuiDocPage {
    protected readonly defaultTabs = inject(TUI_DOC_DEFAULT_TABS);
    protected readonly from = / /g;
    protected readonly to = '_';

    @Input()
    public header = '';

    @Input()
    public package = '';

    @Input()
    public type = '';

    @Input()
    public tags: string[] = [];

    @Input()
    public path = '';

    @Input()
    public deprecated: boolean | '' = false;

    @ContentChildren(TuiDocPageTabConnector)
    public readonly tabConnectors: QueryList<TuiDocPageTabConnector> = EMPTY_QUERY;

    public activeItemIndex = 0;
    public readonly seeAlso = inject(PAGE_SEE_ALSO);

    public get showSeeAlso(): boolean {
        return !!this.seeAlso.length && this.activeItemIndex === 0;
    }
}
