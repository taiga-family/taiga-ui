import {ChangeDetectionStrategy, Component, input, model} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TuiHovered} from '@taiga-ui/cdk/directives/hovered';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {type TuiSizeXL} from '@taiga-ui/core/types';
import {map, take, timer} from 'rxjs';

const ARC = 0.76; // 3/4 with 1% safety offset
const SIZE = {m: 9, l: 11, xl: 16} as const;
const WIDTH = {m: 0.25, l: 0.375, xl: 0.5625} as const;
const GAP = {m: 0.125, l: 0.1875, xl: 0.25} as const;

@Component({
    selector: 'tui-arc-chart',
    imports: [TuiHovered],
    templateUrl: './arc-chart.template.html',
    styleUrl: './arc-chart.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size()',
        '[style.width.rem]': 'width',
        '[style.height.rem]': 'width',
        '[style.strokeWidth.rem]': 'strokeWidth',
    },
})
export class TuiArcChart {
    protected readonly initialized = toSignal(
        timer(0).pipe(
            tuiZonefree(),
            take(1),
            map(() => true),
        ),
        {initialValue: false},
    );

    public readonly value = input<readonly number[]>([]);
    public readonly size = input<TuiSizeXL>('m');
    public readonly max = input(100);
    public readonly minLabel = input('0%');
    public readonly maxLabel = input('100%');

    public readonly activeItemIndex = model<number>(NaN);

    protected get width(): number {
        return SIZE[this.size()];
    }

    protected get strokeWidth(): number {
        return WIDTH[this.size()];
    }

    protected onHovered(hovered: boolean, index: number): void {
        this.activeItemIndex.set(hovered ? index : NaN);
    }

    protected isInactive(index: number): boolean {
        return !Number.isNaN(this.activeItemIndex()) && index !== this.activeItemIndex();
    }

    protected getInset(index: number): number {
        return this.strokeWidth / 2 + index * (this.strokeWidth + GAP[this.size()]);
    }

    protected getDiameter(index: number): number {
        return SIZE[this.size()] - 2 * this.getInset(index);
    }

    protected getLength(index: number): number {
        return Math.PI * this.getDiameter(index) * ARC;
    }

    protected getOffset(index: number): number {
        return (
            this.getLength(index) *
            (1 - Math.min((this.value()[index] || 0) / this.max(), 1))
        );
    }
}
