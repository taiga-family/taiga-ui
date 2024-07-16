import type {OnChanges} from '@angular/core';
import {Directive, Input} from '@angular/core';
import {Subject} from 'rxjs';

@Directive({
    standalone: true,
})
export class TuiItemsWithMoreDirective implements OnChanges {
    @Input()
    public itemsLimit = Infinity;

    @Input()
    public required = -1;

    // TODO: refactor to signal inputs after Angular update
    public readonly change$ = new Subject<void>();

    public ngOnChanges(): void {
        this.change$.next();
    }
}
