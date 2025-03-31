import {Directive, forwardRef, inject} from '@angular/core';

import {TuiTableTbody} from '../tbody/tbody.component';

@Directive({
    standalone: true,
    selector: 'tr[tuiTr][tuiExpandableTableHeading]',
    host: {
        '(click)': 'onClick($event)',
    },
})
export class TuiExpandableTableHeading<T> {
    protected readonly parentBody = inject<TuiTableTbody<T>>(
        forwardRef(() => TuiTableTbody),
    );

    protected onClick(): void {
        this.parentBody.onClick();
    }
}
