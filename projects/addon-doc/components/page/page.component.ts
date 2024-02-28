import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    inject,
    Input,
    QueryList,
} from '@angular/core';
import {TUI_DOC_DEFAULT_TABS} from '@taiga-ui/addon-doc/tokens';
import {EMPTY_QUERY} from '@taiga-ui/cdk';

import {PAGE_PROVIDERS, PAGE_SEE_ALSO} from './page.providers';
import {TuiDocPageTabConnectorDirective} from './page-tab.directive';

@Component({
    selector: 'tui-doc-page',
    templateUrl: './page.template.html',
    styleUrls: ['./page.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: PAGE_PROVIDERS,
})
export class TuiDocPageComponent {
    @Input()
    public header = '';

    @Input()
    public package = '';

    @Input()
    public type = '';

    @Input()
    public path = '';

    @Input()
    public deprecated: boolean | '' = false;

    @ContentChildren(TuiDocPageTabConnectorDirective)
    public readonly tabConnectors: QueryList<TuiDocPageTabConnectorDirective> =
        EMPTY_QUERY;

    public activeItemIndex = 0;

    protected readonly from = / /g;
    protected readonly to = '_';

    protected readonly defaultTabs = inject(TUI_DOC_DEFAULT_TABS);
    public readonly seeAlso = inject(PAGE_SEE_ALSO);

    public get showSeeAlso(): boolean {
        return !!this.seeAlso.length && this.activeItemIndex === 0;
    }
}
