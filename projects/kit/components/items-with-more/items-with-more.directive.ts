import {computed, Directive, input, type OnChanges} from '@angular/core';
import {Subject} from 'rxjs';

@Directive({host: {'[class._multiline]': 'linesLimit() > 1'}})
export class TuiItemsWithMoreDirective implements OnChanges {
    public readonly itemsLimit = input(Infinity);
    public readonly required = input(-1);
    public readonly linesLimit = input(1);
    public readonly side = input<'end' | 'start'>('end');
    public readonly align = computed(() => (this.linesLimit() > 1 ? 'end' : this.side()));
    public readonly change$ = new Subject<void>();

    public ngOnChanges(): void {
        this.change$.next();
    }
}
