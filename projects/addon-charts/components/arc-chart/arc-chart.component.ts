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
const VIEWBOX = 200;
const LENGTH = Math.PI * VIEWBOX * ARC;

@Component({
    selector: 'tui-arc-chart',
    imports: [TuiHovered],
    templateUrl: './arc-chart.template.html',
    styleUrl: './arc-chart.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size()',
        '[class._fluid]': 'fluid()',
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

    protected readonly length = LENGTH;

    public readonly value = input<readonly number[]>([]);
    public readonly size = input<TuiSizeXL>('m');
    public readonly fluid = input<boolean>(false);
    public readonly max = input(100);
    public readonly minLabel = input('0%');
    public readonly maxLabel = input('100%');
    public readonly activeItemIndex = model(Number.NaN);

    protected onHovered(hovered: boolean, index: number): void {
        this.activeItemIndex.set(hovered ? index : Number.NaN);
    }

    protected isInactive(index: number): boolean {
        return !Number.isNaN(this.activeItemIndex()) && index !== this.activeItemIndex();
    }

    protected getInset(index: number): number {
        return this.stroke / 2 + index * (this.stroke + this.gap);
    }

    protected getDiameter(index: number): number {
        return 100 - 2 * this.getInset(index);
    }

    protected getStrokeWidth(index: number): number {
        return (VIEWBOX * this.stroke) / this.getDiameter(index);
    }

    protected getOffset(index: number): number {
        return LENGTH * (1 - Math.min((this.value()[index] || 0) / this.max(), 1));
    }

    private get stroke(): number {
        return (WIDTH[this.size()] / SIZE[this.size()]) * 100;
    }

    private get gap(): number {
        return (GAP[this.size()] / SIZE[this.size()]) * 100;
    }
}
