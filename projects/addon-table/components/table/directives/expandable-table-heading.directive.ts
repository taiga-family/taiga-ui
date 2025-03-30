import {Directive, forwardRef, HostListener, inject} from '@angular/core';
import {TuiTableTbody} from '../tbody/tbody.component';

@Directive({
    standalone: true,
    selector: 'tr[tuiTr][tuiExpandableTableHeading]',
})
export class TuiExpandableTableHeading<T> {
    protected readonly parentBody = inject<TuiTableTbody<T>>(
        forwardRef(() => TuiTableTbody),
    );

    @HostListener('click') onClick(): void {
        this.parentBody.onClick();
    }
}
