import {computed, Directive, input, type OnChanges} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {Subject} from 'rxjs';

@Directive({
    host: {
        '[class._multiline]': 'linesLimit() > 1',
        '[style.--t-min-width.px]': 'maxWidth()',
    },
})
export class TuiItemsWithMoreDirective implements OnChanges {
    private readonly el = tuiInjectElement();

    public readonly itemsLimit = input(Infinity);
    public readonly required = input(-1);
    public readonly linesLimit = input(1);
    public readonly side = input<'end' | 'start'>('end');
    public readonly align = computed(() => (this.linesLimit() > 1 ? 'end' : this.side()));
    public readonly change$ = new Subject<void>();

    public ngOnChanges(): void {
        this.change$.next();
    }

    protected maxWidth(): number {
        return Math.max(...Array.from(this.el.children, ({clientWidth}) => clientWidth));
    }
}
