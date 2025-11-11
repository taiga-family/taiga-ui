import {ChangeDetectionStrategy, Component, inject, input, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_DEFAULT_IDENTITY_MATCHER, TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {
    type TuiBooleanHandler,
    type TuiHandler,
    type TuiIdentityMatcher,
} from '@taiga-ui/cdk/types';
import {TuiHintOverflow} from '@taiga-ui/core/portals/hint';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';
import {TuiBadge} from '@taiga-ui/kit/components/badge';
import {TUI_BLOCK_OPTIONS, TuiBlock} from '@taiga-ui/kit/components/block';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'tui-filter',
    imports: [FormsModule, PolymorpheusOutlet, TuiBadge, TuiBlock, TuiHintOverflow],
    templateUrl: './filter.template.html',
    styleUrl: './filter.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiFallbackValueProvider([])],
    host: {
        '[attr.data-size]': 'size()',
    },
})
export class TuiFilter<T> extends TuiControl<readonly T[]> {
    public readonly identityMatcher = input<TuiIdentityMatcher<T>>(
        TUI_DEFAULT_IDENTITY_MATCHER,
    );

    public readonly items = input<readonly T[]>([]);

    public readonly size = input<TuiSizeL | TuiSizeS>(
        inject(TUI_BLOCK_OPTIONS).size || 'l',
    );

    public readonly disabledItemHandler = input<TuiBooleanHandler<T>>(TUI_FALSE_HANDLER);

    public readonly toggledItem = output<T>();

    public readonly content = input<PolymorpheusContent>(({$implicit}) =>
        String($implicit),
    );

    public readonly badgeHandler = input<TuiHandler<T, number>>((item) => Number(item));

    public onCheckbox(value: boolean, item: T): void {
        this.toggledItem.emit(item);
        this.onChange(
            value
                ? [...this.value(), item]
                : this.value().filter(
                      (arrItem) => !this.identityMatcher()(arrItem, item),
                  ),
        );
    }

    protected isCheckboxEnabled(item: T): boolean {
        return this.value().some((arrItem) => this.identityMatcher()(arrItem, item));
    }
}
