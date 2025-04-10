import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {tuiDirectiveBinding, tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiDataListHost} from '@taiga-ui/core/components/data-list';
import {
    TUI_DATA_LIST_HOST,
    TuiOptionWithValue,
} from '@taiga-ui/core/components/data-list';
import {TuiScrollIntoView} from '@taiga-ui/core/components/scrollbar';
import {tuiInjectAuxiliary} from '@taiga-ui/core/components/textfield';
import {TuiIcons} from '@taiga-ui/core/directives/icons';
import type {TuiItemsHandlers} from '@taiga-ui/core/directives/items-handlers';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./select-option.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiScrollIntoView],
    host: {
        '[class._value]': 'option',
        '[class._selected]': 'selected()',
        '(click)': 'onClick()',
    },
})
export class TuiSelectOption<T> {
    private readonly host = inject<TuiDataListHost<T>>(TUI_DATA_LIST_HOST);
    private readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    private readonly control = tuiInjectAuxiliary<TuiControl<T>>(
        (x) => x instanceof TuiControl,
    );

    protected readonly option = inject<TuiOptionWithValue<T>>(TuiOptionWithValue, {
        optional: true,
    });

    protected readonly icon =
        this.option &&
        tuiDirectiveBinding(TuiIcons, 'iconEnd', inject(TUI_COMMON_ICONS).check, {});

    protected readonly selected = computed(
        (controlValue = this.control()?.value(), optionValue = this.option?.value()) =>
            tuiIsPresent(optionValue) &&
            tuiIsPresent(controlValue) &&
            this.itemsHandlers.identityMatcher()(controlValue, optionValue),
    );

    protected readonly scrolled = tuiDirectiveBinding(
        TuiScrollIntoView,
        'tuiScrollIntoView',
        this.selected,
    );

    protected onClick(): void {
        const value = this.option?.value();

        if (this.host?.handleOption && value !== undefined) {
            this.host.handleOption(value);
        }
    }
}
