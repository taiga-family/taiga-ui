import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/di';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TuiCheckbox,
    tuiCheckboxOptionsProvider,
} from '@taiga-ui/core/components/checkbox';
import {
    TuiDataListComponent,
    TuiOptionWithValue,
} from '@taiga-ui/core/components/data-list';
import {TuiScrollIntoView} from '@taiga-ui/core/components/scrollbar';
import {
    TUI_ITEMS_HANDLERS,
    type TuiItemsHandlers,
} from '@taiga-ui/core/directives/items-handlers';
import {tuiInjectValue} from '@taiga-ui/kit/utils';

@Component({
    imports: [TuiCheckbox],
    template: `
        @if (selected()) {
            <input
                tuiCheckbox
                type="checkbox"
                class="t-check"
                [checked]="selected()"
                [size]="datalist.size() === 'l' ? 'm' : 's'"
            />
        } @else {
            <span class="t-dummy"></span>
        }
    `,
    styleUrl: './select-option.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiCheckboxOptionsProvider({appearance: () => 'action'})],
    hostDirectives: [TuiScrollIntoView],
    host: {
        tuiSelectOption: '',
        '[class._selected]': 'selected()',
    },
})
export class TuiSelectOption<T> {
    private readonly handlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    private readonly value = tuiInjectValue<T>();

    protected readonly datalist = inject(TuiDataListComponent);
    protected readonly option = inject<TuiOptionWithValue<T>>(TuiOptionWithValue);
    protected readonly selected = computed(
        (controlValue = this.value(), optionValue = this.option.value()) =>
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
