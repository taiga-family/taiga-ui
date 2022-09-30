import {
    Attribute,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    Inject,
    Input,
    QueryList,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk';

import {TUI_DOC_DEFAULT_TABS} from '../../tokens/default-tabs';
import {PAGE_PROVIDERS, PAGE_SEE_ALSO} from './page.providers';
import {TuiDocPageTabConnectorDirective} from './page-tab.directive';

@Component({
    selector: `tui-doc-page`,
    templateUrl: `./page.template.html`,
    styleUrls: [`./page.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: PAGE_PROVIDERS,
})
export class TuiDocPageComponent {
    @Input()
    header = ``;

    @Input()
    package = ``;

    @Input()
    type = ``;

    @Input()
    path = ``;

    @ContentChildren(TuiDocPageTabConnectorDirective)
    readonly tabConnectors: QueryList<TuiDocPageTabConnectorDirective> = EMPTY_QUERY;

    activeItemIndex = NaN;

    constructor(
        @Attribute(`deprecated`) readonly deprecated: string | null,
        @Inject(TUI_DOC_DEFAULT_TABS) readonly defaultTabs: readonly string[],
        @Inject(PAGE_SEE_ALSO) readonly seeAlso: readonly string[],
    ) {}

    get showSeeAlso(): boolean {
        return !!this.seeAlso.length && this.activeItemIndex === 0;
    }

    getRouterLink(tab: string = ``): string {
        return `./${tab.replace(/ /g, `_`)}`;
    }
}
