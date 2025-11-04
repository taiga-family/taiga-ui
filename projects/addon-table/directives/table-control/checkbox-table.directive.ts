import {Directive, effect, inject} from '@angular/core';
import {NgControl, NgModel} from '@angular/forms';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

import {TuiTableControlDirective} from './table-control.directive';

@Directive({
    selector: '[tuiCheckbox][tuiCheckboxTable]',
    providers: [{provide: NgControl, useClass: NgModel}],
    host: {'(change)': 'parent.toggleAll()'},
})
export class TuiCheckboxTableDirective {
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly control = inject(NgControl);

    protected readonly parent = inject(TuiTableControlDirective);
    protected readonly update = effect(() => {
        const indeterminate = this.parent.indeterminate();
        const checked = this.parent.checked();

        this.el.indeterminate = indeterminate;
        this.el.checked = checked;
        this.control.control?.setValue(indeterminate ? null : checked);
    });
}
