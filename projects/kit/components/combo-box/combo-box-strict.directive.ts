import {Directive, HostListener, Inject, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

import {TuiComboBoxComponent} from './combo-box.component';

@Directive({
    selector: 'tui-combo-box[strict]',
})
export class TuiComboBoxStrictDirective<T> {
    @Input()
    @tuiDefaultProp()
    strict = true;

    constructor(
        @Inject(TuiComboBoxComponent)
        private readonly comboBox: TuiComboBoxComponent<T | string>,
    ) {}

    @HostListener('input')
    onInput(): void {
        if (!this.strict && this.comboBox.search) {
            this.comboBox.updateValue(this.comboBox.search);
        }
    }
}
