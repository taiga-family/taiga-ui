import {NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChildren,
    inject,
    input,
    TemplateRef,
} from '@angular/core';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {tuiLinkOptionsProvider} from '@taiga-ui/core/components/link';
import {TuiDropdown} from '@taiga-ui/core/portals/dropdown';
import {tuiHintOptionsProvider} from '@taiga-ui/core/portals/hint';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {TuiItemsWithMore} from '@taiga-ui/kit/components/items-with-more';
import {TUI_MORE_WORD} from '@taiga-ui/kit/tokens';

import {TUI_BREADCRUMBS_OPTIONS, type TuiBreadcrumbsOptions} from './breadcrumbs.options';

@Component({
    selector: 'tui-breadcrumbs',
    imports: [
        NgTemplateOutlet,
        TuiButton,
        TuiDataList,
        TuiDropdown,
        TuiIcon,
        TuiItemsWithMore,
    ],
    templateUrl: './breadcrumbs.template.html',
    styleUrl: './breadcrumbs.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiLinkOptionsProvider({appearance: 'action-grayscale'}),
        tuiHintOptionsProvider({direction: 'bottom'}),
    ],
    host: {
        '[attr.data-size]': 'size()',
    },
})
export class TuiBreadcrumbs {
    protected readonly items = contentChildren(TuiItem, {read: TemplateRef});
    protected readonly options = inject(TUI_BREADCRUMBS_OPTIONS);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly more = inject(TUI_MORE_WORD);

    public readonly size = input<TuiBreadcrumbsOptions['size']>(this.options.size);
    public readonly itemsLimit = input(this.options.itemsLimit);

    protected readonly offset = computed(() => (this.itemsLimit() === 2 ? 1 : 0));
}
