import {Directive, forwardRef, inject} from '@angular/core';

import {TuiTableTbody} from '../tbody/tbody.component';

@Directive({
    standalone: true,
    selector: '[tuiTableExpandOpen]',
    host: {
        '(click)': 'body.toggle()',
    },
})
export class TuiTableExpandOpen {
    protected readonly body = inject(forwardRef(() => TuiTableTbody));
}
