import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiOptionWithValue} from '@taiga-ui/core/components/data-list';
import {TUI_TEXTFIELD_OPTIONS} from '@taiga-ui/core/components/textfield';
import type {TuiItemsHandlers} from '@taiga-ui/core/directives/items-handlers';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {TuiCheckbox} from '@taiga-ui/kit/components/checkbox';
import {tuiInjectValue} from '@taiga-ui/kit/utils';

@Component({
    standalone: true,
    imports: [NgIf, TuiCheckbox],
    template: `
        <input
            *ngIf="option"
            tuiCheckbox
            type="checkbox"
            [checked]="selected()"
            [size]="size() === 'l' ? 'm' : 's'"
        />
    `,
    styles: [
        `
            :host-context(tui-dropdown-mobile) input {
                order: 100;
                margin-inline-start: auto;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiMultiSelectOption<T> {
    protected readonly option = inject<TuiOptionWithValue<T>>(TuiOptionWithValue, {
        optional: true,
    });

    protected readonly handlers = inject<TuiItemsHandlers<T>>(TUI_ITEMS_HANDLERS);
    protected readonly value = tuiInjectValue<readonly T[]>();
    protected readonly size = inject(TUI_TEXTFIELD_OPTIONS).size;
    protected readonly selected = computed(
        (controlValue = this.value(), optionValue = this.option?.value()) =>
            tuiIsPresent(optionValue) &&
            tuiIsPresent(controlValue) &&
            controlValue.some(
                (item) =>
                    this.handlers?.identityMatcher()(item, optionValue) ??
                    item === optionValue,
            ),
    );
}
