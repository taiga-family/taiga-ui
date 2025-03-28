import type {OnChanges} from '@angular/core';
import {Directive, Input} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {Subject} from 'rxjs';

@Directive({
    standalone: true,
    host: {
        '[class._multiline]': 'linesLimit > 1',
        '[style.--t-min-width.px]': 'maxWidth()',
    },
})
export class TuiItemsWithMoreDirective implements OnChanges {
    private readonly el = tuiInjectElement();

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

    public get computedSide(): 'end' | 'start' {
        return this.linesLimit > 1 ? 'end' : this.side;
    }

    public ngOnChanges(): void {
        this.change$.next();
    }

    protected maxWidth(): number {
        return Math.max(...Array.from(this.el.children, ({clientWidth}) => clientWidth));
    }
}
