import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {tuiDirectiveBinding, tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiOptionWithValue} from '@taiga-ui/core/components/data-list';
import {TuiScrollIntoView} from '@taiga-ui/core/components/scrollbar';
import {TuiIcons} from '@taiga-ui/core/directives/icons';
import type {TuiItemsHandlers} from '@taiga-ui/core/directives/items-handlers';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {tuiInjectValue} from '@taiga-ui/kit/utils';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./select-option.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiScrollIntoView],
    host: {
        tuiSelectOption: '',
        '[class._value]': 'option',
        '[class._selected]': 'selected()',
    },
})
export class TuiSelectOption<T> {
    private readonly handlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    private readonly value = tuiInjectValue<T>();

    protected readonly option = inject<TuiOptionWithValue<T>>(TuiOptionWithValue, {
        optional: true,
    });

    protected readonly icon =
        this.option &&
        tuiDirectiveBinding(TuiIcons, 'iconEnd', inject(TUI_COMMON_ICONS).check, {});

    protected readonly selected = computed(
        (controlValue = this.value(), optionValue = this.option?.value()) =>
            tuiIsPresent(optionValue) &&
            tuiIsPresent(controlValue) &&
            this.handlers.identityMatcher()(controlValue, optionValue),
    );

    protected readonly scrolled = tuiDirectiveBinding(
        TuiScrollIntoView,
        'tuiScrollIntoView',
        this.selected,
    );
}
