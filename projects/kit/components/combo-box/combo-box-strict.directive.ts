import {Directive, HostListener, inject, Input} from '@angular/core';

import {TuiComboBoxComponent} from './combo-box.component';

@Directive({
    selector: 'tui-combo-box[strict]',
})
export class TuiComboBoxStrictDirective<T> {
    private readonly comboBox = inject(TuiComboBoxComponent<T | string>);

    @Input()
    strict = true;

    @HostListener('input')
    onInput(): void {
        if (!this.strict && this.comboBox.search) {
            this.comboBox.value = this.comboBox.search;
        }
    }
}
