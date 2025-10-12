import {computed, Directive, input} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

@Directive({
    standalone: true,
    host: {
        '[class._multiline]': 'linesLimit() > 1',
        '[style.--t-min-width.px]': 'maxWidth()',
    },
})
export class TuiItemsWithMoreDirective {
    private readonly el = tuiInjectElement();

    public itemsLimit = input(Infinity);

    public required = input(-1);

    public linesLimit = input(1);

    public side = input<'end' | 'start'>('end');

    public readonly change = computed(() => {
        return {
            itemsLimit: this.itemsLimit(),
            required: this.required(),
            linesLimit: this.linesLimit(),
            side: this.side(),
        };
    });

    public computedSide = computed<'end' | 'start'>(() =>
        this.linesLimit() > 1 ? 'end' : this.side(),
    );

    protected maxWidth(): number {
        return Math.max(...Array.from(this.el.children, ({clientWidth}) => clientWidth));
    }
}
