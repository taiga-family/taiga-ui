import type {OnChanges} from '@angular/core';
import {Directive, Input} from '@angular/core';
import {Subject} from 'rxjs';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

@Directive({
    standalone: true,
    host: {
        '[class._multiline]': 'linesLimit > 1',
        '[style.--t-min-width.px]': 'maxWidth()',
    },
})
export class TuiItemsWithMoreDirective implements OnChanges {
    private readonly el = tuiInjectElement();
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

    protected maxWidth(): number {
        return Math.max(...Array.from(this.el.children, ({clientWidth}) => clientWidth));
    }
}
