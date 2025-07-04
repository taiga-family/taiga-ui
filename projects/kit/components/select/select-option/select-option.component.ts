import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {tuiDirectiveBinding, tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TuiDataListComponent,
    TuiOptionWithValue,
} from '@taiga-ui/core/components/data-list';
import {TuiScrollIntoView} from '@taiga-ui/core/components/scrollbar';
import type {TuiItemsHandlers} from '@taiga-ui/core/directives/items-handlers';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {TuiCheckbox, tuiCheckboxOptionsProvider} from '@taiga-ui/kit/components/checkbox';
import {tuiInjectValue} from '@taiga-ui/kit/utils';

@Component({
    standalone: true,
    imports: [TuiCheckbox],
    template: `
        <input
            tuiCheckbox
            type="checkbox"
            class="t-check"
            [checked]="selected()"
            [size]="datalist.size === 'l' ? 'm' : 's'"
        />
    `,
    styleUrls: ['./select-option.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiCheckboxOptionsProvider({appearance: () => 'action'})],
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

    protected readonly datalist = inject(TuiDataListComponent);
    protected readonly option = inject<TuiOptionWithValue<T>>(TuiOptionWithValue, {
        optional: true,
    });

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
