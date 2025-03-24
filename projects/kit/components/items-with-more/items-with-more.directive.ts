import type {OnChanges} from '@angular/core';
import {Directive, Input} from '@angular/core';
import {Subject} from 'rxjs';

@Directive({
    standalone: true,
    host: {
        '[class._multiline]': 'linesLimit > 1',
    },
})
export class TuiItemsWithMoreDirective implements OnChanges {
    private moreSide: 'end' | 'start' = 'end';

    @Input()
    public itemsLimit = Infinity;

    @Input()
    public required = -1;

    @Input()
    public linesLimit = 1;

    // TODO: refactor to signal inputs after Angular update
    public readonly change$ = new Subject<void>();

    @Input('side')
    public set setSide(side: 'end' | 'start') {
        this.moreSide = side;
    }

    public get side(): 'end' | 'start' {
        return this.linesLimit > 1 ? 'end' : this.moreSide;
    }

    public ngOnChanges(): void {
        this.change$.next();
    }
}
