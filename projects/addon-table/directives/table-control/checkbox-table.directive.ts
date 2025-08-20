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
        '(change)': 'parent.toggleAll()',
    },
})
export class TuiCheckboxTableDirective {
    protected readonly parent = inject(TuiTableControlDirective);
}
