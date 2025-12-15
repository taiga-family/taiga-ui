import {NgTemplateOutlet} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {TuiBar} from '@taiga-ui/addon-charts/components/bar';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

const PERCENT = 100;
const EMPTY_ARRAY: readonly number[] = [];
const FILLER_ARRAY: readonly number[] = [1];

@Component({
    selector: 'tui-bar-set',
    imports: [NgTemplateOutlet, TuiBar],
    templateUrl: './bar-set.template.html',
    styleUrl: './bar-set.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiBarSet {
    private readonly largest = computed(() =>
        this.computedValue().some((a) => a > 0)
            ? this.computedValue().reduce((a, b) => (a > b ? a : b), 0)
            : Math.abs(this.computedValue().reduce((a, b) => (a < b ? a : b), 0)),
    );

    public readonly value = input<readonly number[]>([]);
    public readonly size = input<TuiSizeL | TuiSizeS | null>('m');
    public readonly collapsed = input(false);

    protected readonly computedValue = computed<readonly number[]>(() =>
        this.collapsed() ? FILLER_ARRAY : this.value(),
    );

    protected readonly computedSegments = computed<readonly number[]>(() =>
        this.collapsed() ? this.value() : EMPTY_ARRAY,
    );

    protected getHeight(value: number): number {
        return Math.abs((PERCENT * value) / this.largest());
    }
}
