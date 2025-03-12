import {computed, Directive, inject} from '@angular/core';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {tuiValueBinding} from '@taiga-ui/cdk/utils/dom';
import {tuiAsOptionContent} from '@taiga-ui/core/components/data-list';
import type {TuiTextfieldAccessor} from '@taiga-ui/core/components/textfield';
import {
    tuiAsAuxiliary,
    tuiAsTextfieldAccessor,
    TuiSelectLike,
    TuiTextfieldComponent,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {tuiDropdownEnabled, tuiDropdownOpen} from '@taiga-ui/core/directives/dropdown';

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
    private readonly textfield: TuiTextfieldComponent<T> = inject(TuiTextfieldComponent);

    protected readonly dropdownEnabled = tuiDropdownEnabled(this.interactive);
    protected readonly stringified = tuiValueBinding(
        computed((value = this.value()) =>
            value ? this.textfield.stringify(value) : '',
        ),
    );

    public setValue(value: T): void {
        this.onChange(value);

        if (!value) {
            this.open.set(true);
        }
    }
}
