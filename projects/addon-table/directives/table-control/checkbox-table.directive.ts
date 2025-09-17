import {Directive, effect, inject} from '@angular/core';
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
    private readonly control = inject(NgControl);

    protected readonly parent = inject(TuiTableControlDirective);
    protected readonly update = effect(() => {
        this.control.control?.setValue(
            this.parent.indeterminate() ? null : this.parent.checked(),
        );
    });
}
