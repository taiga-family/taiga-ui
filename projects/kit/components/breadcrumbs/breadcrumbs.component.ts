import {AsyncPipe, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    inject,
    Input,
    TemplateRef,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {tuiLinkOptionsProvider} from '@taiga-ui/core/components/link';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
import {tuiHintOptionsProvider} from '@taiga-ui/core/directives/hint';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {TuiItemsWithMore} from '@taiga-ui/kit/components/items-with-more';
import {TUI_MORE_WORD} from '@taiga-ui/kit/tokens';

import type {TuiBreadcrumbsOptions} from './breadcrumbs.options';
import {TUI_BREADCRUMBS_OPTIONS} from './breadcrumbs.options';

@Component({
    standalone: true,
    selector: 'tui-breadcrumbs',
    imports: [
        AsyncPipe,
        NgForOf,
        NgIf,
        NgTemplateOutlet,
        TuiButton,
        TuiDataList,
        TuiDropdown,
        TuiIcon,
        TuiItemsWithMore,
    ],
    templateUrl: './breadcrumbs.template.html',
    styleUrls: ['./breadcrumbs.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiLinkOptionsProvider({appearance: 'icon'}),
        tuiHintOptionsProvider({direction: 'bottom'}),
    ],
    host: {
        '[attr.data-size]': 'size',
    },
})
export class TuiBreadcrumbs {
    @ContentChildren(TuiItem, {read: TemplateRef})
    protected readonly items: QueryList<TemplateRef<Record<string, unknown>>> =
        EMPTY_QUERY;

    protected readonly options = inject(TUI_BREADCRUMBS_OPTIONS);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly more = toSignal(inject(TUI_MORE_WORD), {initialValue: ''});

    @Input()
    public size: TuiBreadcrumbsOptions['size'] = this.options.size;

    @Input()
    public itemsLimit = this.options.itemsLimit;

    protected get limit(): number {
        return this.itemsLimit ? this.itemsLimit - 2 : Infinity;
    }

    protected get offset(): number {
        return this.itemsLimit === 2 ? 1 : 0;
    }
}
