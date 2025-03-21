import {type OnChanges} from '@angular/core';
import {Directive, Input} from '@angular/core';
import {Subject} from 'rxjs';

@Directive({
    standalone: true,
    host: {
        '[class._multiline]': 'linesLimit > 1',
    },
})
export class TuiItemsWithMoreDirective implements OnChanges {
    @Input()
    public itemsLimit = Infinity;

    @Input()
    public required = -1;

    @Input()
    public linesLimit = 1;

    @Input()
    public side: 'end' | 'start' = 'end';

    // TODO: refactor to signal inputs after Angular update
    public readonly change$ = new Subject<void>();

    public ngOnChanges(): void {
        this.change$.next();
    }
}
