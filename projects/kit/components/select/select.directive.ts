import {computed, Directive, inject} from '@angular/core';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {tuiValueBinding} from '@taiga-ui/cdk/utils/dom';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiAsOptionContent} from '@taiga-ui/core/components/data-list';
import type {TuiTextfieldAccessor} from '@taiga-ui/core/components/textfield';
import {
    tuiAsAuxiliary,
    tuiAsTextfieldAccessor,
    TuiSelectLike,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {tuiDropdownEnabled, tuiDropdownOpen} from '@taiga-ui/core/directives/dropdown';
import type {TuiItemsHandlers} from '@taiga-ui/core/directives/items-handlers';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';

import {TuiSelectOption} from './select-option/select-option.component';

@Directive({
    standalone: true,
    selector: 'input[tuiSelect]',
    providers: [
        tuiAsOptionContent(TuiSelectOption),
        tuiAsTextfieldAccessor(TuiSelectDirective),
        tuiAsControl(TuiSelectDirective),
        tuiAsAuxiliary(TuiSelectDirective),
    ],
    hostDirectives: [TuiWithTextfield, TuiSelectLike],
    host: {
        '[disabled]': 'disabled()',
        '(blur)': 'onTouched()',
        '(input)': '$event.inputType?.includes("delete") && setValue(null)',
    },
})
export class TuiSelectDirective<T>
    extends TuiControl<T | null>
    implements TuiTextfieldAccessor<T>
{
    private readonly open = tuiDropdownOpen();
    private readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);

    protected readonly dropdownEnabled = tuiDropdownEnabled(this.interactive);
    protected readonly stringified = tuiValueBinding(
        computed((value = this.value()) =>
            tuiIsPresent(value) ? this.itemsHandlers.stringify()(value) : '',
        ),
    );

    public setValue(value: T): void {
        this.onChange(value);

        if (!value) {
            this.open.set(true);
        }
    }
}
