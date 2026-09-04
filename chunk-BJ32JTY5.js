import"./chunk-LQ6M4NCU.js";var o=`import {Directive, inject, output} from '@angular/core';
import {tuiAsTextfieldAccessor, type TuiTextfieldAccessor} from '@taiga-ui/core';
import {TuiComboBoxDirective} from '@taiga-ui/kit';

@Directive({
    selector: '[customComboBox]',
    providers: [tuiAsTextfieldAccessor(CustomComboBox)],
    hostDirectives: [TuiComboBoxDirective],
})
export class CustomComboBox<T> implements TuiTextfieldAccessor<T> {
    private readonly accessor: TuiTextfieldAccessor<T> = inject(TuiComboBoxDirective);

    public readonly pick = output<T | null>();

    public setValue(value: T | null): void {
        this.pick.emit(value);
        this.accessor.setValue(value);
    }
}
`;export{o as default};
