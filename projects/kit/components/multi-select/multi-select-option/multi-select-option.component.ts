import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiCheckbox} from '@taiga-ui/core/components/checkbox';
import {TuiOptionWithValue} from '@taiga-ui/core/components/data-list';
import {TUI_TEXTFIELD_OPTIONS} from '@taiga-ui/core/components/textfield';
import {
    TUI_ITEMS_HANDLERS,
    type TuiItemsHandlers,
} from '@taiga-ui/core/directives/items-handlers';
import {tuiInjectValue} from '@taiga-ui/kit/utils';

@Component({
    selector: 'button[tuiOption][tuiMultiSelectOption]',
    imports: [TuiCheckbox],
    template: `
        <input
            aria-hidden="true"
            tuiCheckbox
            type="checkbox"
            [checked]="option ? selected() : value()"
            [indeterminate]="indeterminate()"
            [size]="size() === 'l' ? 'm' : 's'"
        />
        <ng-content />
    `,
    styles: `
        :host[data-size='m'] input {
            margin-inline-start: 0.25rem;
        }

        :host-context(tui-dropdown-mobile) [tuiCheckbox],
        :host-context(tui-sheet-dialog) [tuiCheckbox] {
            order: 100;
            margin-inline-start: auto;
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.aria-checked]': 'option ? null : (indeterminate() ? "mixed" : value())',
        '[attr.aria-selected]': 'option ? selected() : null',
    },
})
export class TuiMultiSelectOption<T> {
    protected readonly option = inject<TuiOptionWithValue<T>>(TuiOptionWithValue, {
        optional: true,
    });

    protected readonly handlers = inject<TuiItemsHandlers<T>>(TUI_ITEMS_HANDLERS);
    protected readonly controlValue = tuiInjectValue<readonly T[]>();
    protected readonly size = inject(TUI_TEXTFIELD_OPTIONS).size;

    protected readonly selected = computed(
        (controlValue = this.controlValue(), optionValue = this.option?.value()) =>
            tuiIsPresent(optionValue) &&
            tuiIsPresent(controlValue) &&
            controlValue.some(
                (item) =>
                    this.handlers?.identityMatcher()(item, optionValue) ??
                    item === optionValue,
            ),
    );

    public readonly value = input(false, {alias: 'tuiMultiSelectOption'});
    public readonly indeterminate = input(false);
}
