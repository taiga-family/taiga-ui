import {Directive, forwardRef, inject} from '@angular/core';

import {TuiTableTbody} from '../tbody/tbody.component';

@Directive({
    standalone: true,
    selector: '[tuiTableExpandOpen]',
    host: {
        '(click)': 'onClick($event)',
    },
})
export class TuiTableExpandOpen<T> {
    protected readonly parentBody = inject<TuiTableTbody<T>>(
        forwardRef(() => TuiTableTbody),
    );

    protected onClick(): void {
        this.parentBody.onClick();
    }
}
