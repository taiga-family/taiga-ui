import {Directive, HostListener, inject, Input} from '@angular/core';

import {TuiComboBoxComponent} from './combo-box.component';

/**
 * @deprecated: drop in v5.0
 */
@Directive({
    selector: 'tui-combo-box[strict]',
})
export class TuiComboBoxStrictDirective<T> {
    private readonly comboBox = inject(TuiComboBoxComponent<T | string>);

    @Input()
    public strict = true;

    @HostListener('input')
    protected onInput(): void {
        if (!this.strict && this.comboBox.search) {
            this.comboBox.value = this.comboBox.search;
        }
    }
}
