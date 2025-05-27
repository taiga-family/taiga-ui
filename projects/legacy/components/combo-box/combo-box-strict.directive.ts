import {Directive, inject, Input} from '@angular/core';

import {TuiComboBoxComponent} from './combo-box.component';

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/combo-box TuiComboBox} (from @taiga-ui/kit) instead
 */
@Directive({
    standalone: false,
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
