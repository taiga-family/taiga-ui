import {Directive, inject} from '@angular/core';
import {NgControl, NgModel} from '@angular/forms';

import {TuiTableControlDirective} from './table-control.directive';

@Directive({
    standalone: true,
    selector: '[tuiCheckbox][tuiCheckboxTable]',
    providers: [{provide: NgControl, useClass: NgModel}],
    host: {
        '[checked]': 'parent.checked()',
        '[indeterminate]': 'parent.indeterminate()',
        '(change)': 'onChange()',
    },
})
export class TuiCheckboxTableDirective {
    protected readonly parent = inject(TuiTableControlDirective);

    protected onChange(): void {
        if (this.parent.checked()) {
            this.parent.onChange([]);
        } else {
            this.parent.selectAll();
        }
    }
}
