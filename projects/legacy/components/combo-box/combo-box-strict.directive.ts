import {Directive, inject, Input} from '@angular/core';

import {TuiComboBoxComponent} from './combo-box.component';

@Directive({
    selector: 'tui-combo-box[strict]',
    host: {
        '(input)': 'onInput()',
    },
})
export class TuiComboBoxStrictDirective<T> {
    private readonly comboBox = inject(TuiComboBoxComponent<T | string>);

    @Input()
    public strict = true;

    protected onInput(): void {
        if (!this.strict && this.comboBox.search) {
            this.comboBox.value = this.comboBox.search;
        }
    }
}
