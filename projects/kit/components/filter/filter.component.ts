import {ChangeDetectionStrategy, Component, inject, input, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_STRINGIFY} from '@taiga-ui/cdk/constants';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {
    TUI_ITEMS_HANDLERS,
    TuiWithItemsHandlers,
} from '@taiga-ui/core/directives/items-handlers';
import {TuiHintOverflow} from '@taiga-ui/core/portals/hint';
import {TuiBadge} from '@taiga-ui/kit/components/badge';
import {TUI_BLOCK_OPTIONS, TuiBlock} from '@taiga-ui/kit/components/block';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'tui-filter',
    imports: [FormsModule, PolymorpheusOutlet, TuiBadge, TuiBlock, TuiHintOverflow],
    templateUrl: './filter.template.html',
    styleUrl: './filter.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiFallbackValueProvider([])],
    hostDirectives: [TuiWithItemsHandlers],
    host: {
        '[attr.data-size]': 'size()',
    },
})
export class TuiFilter<T> extends TuiControl<readonly T[]> {
    protected readonly handlers = inject(TUI_ITEMS_HANDLERS);

    public readonly items = input<readonly T[]>([]);
    public readonly size = input(inject(TUI_BLOCK_OPTIONS).size || 'l');
    public readonly badgeHandler = input<TuiHandler<T, number>>((item) => Number(item));
    public readonly content = input(TUI_STRINGIFY);

    public readonly toggledItem = output<T>();

    public onCheckbox(value: boolean, item: T): void {
        this.toggledItem.emit(item);
        this.onChange(
            value
                ? [...this.value(), item]
                : this.value().filter(
                      (arrItem) => !this.handlers.identityMatcher()(arrItem, item),
                  ),
        );
    }

    protected isCheckboxEnabled(item: T): boolean {
        return this.value().some((arrItem) =>
            this.handlers.identityMatcher()(arrItem, item),
        );
    }
}
