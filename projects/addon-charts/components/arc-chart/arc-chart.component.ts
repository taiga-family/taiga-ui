import {
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
    input,
    model,
    viewChildren,
} from '@angular/core';
import {
    outputFromObservable,
    takeUntilDestroyed,
    toObservable,
    toSignal,
} from '@angular/core/rxjs-interop';
import {tuiTypedFromEvent, tuiZonefree} from '@taiga-ui/cdk/observables';
import {type TuiSizeXL} from '@taiga-ui/core/types';
import {map, merge, type Observable, switchMap, take, tap, timer} from 'rxjs';

const ARC = 0.76; // 3/4 with 1% safety offset
const SIZE = {m: 9, l: 11, xl: 16} as const;
const WIDTH = {m: 0.25, l: 0.375, xl: 0.5625} as const;
const GAP = {m: 0.125, l: 0.1875, xl: 0.25} as const;

function arcsToIndex(arcs: Array<ElementRef<SVGElement>>): Array<Observable<number>> {
    return arcs.map(({nativeElement}, index) =>
        merge(
            tuiTypedFromEvent(nativeElement, 'mouseenter').pipe(map(() => index)),
            tuiTypedFromEvent(nativeElement, 'mouseleave').pipe(map(() => NaN)),
        ),
    );
}

@Component({
    selector: 'tui-arc-chart',
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
    private readonly arcs = viewChildren<ElementRef<SVGElement>>('arc');

    private readonly indexChange$ = toObservable(this.arcs).pipe(
        takeUntilDestroyed(),
        switchMap((arcs) =>
            merge(...arcsToIndex(arcs as Array<ElementRef<SVGElement>>)).pipe(
                tap((i) => this.activeItemIndex.set(i)),
            ),
        ),
    );

    protected readonly initialized = toSignal(
        timer(0).pipe(
            tuiZonefree(),
            take(1),
            // The linter rule 'no-restricted-syntax' incorrectly flags 'map(() => true)' here,
            // because the literal 'true' has type 'true' (not 'boolean'), which is intentional for this signal initialization.
            // eslint-disable-next-line no-restricted-syntax
            map(() => true),
        ),
        {initialValue: false},
    );

    public readonly value = input<readonly number[]>([]);

    public readonly size = input<TuiSizeXL>('m');

    public readonly max = input(100);

    public readonly minLabel = input('0%');

    public readonly maxLabel = input('100%');

    /**
     * Set to change the index of the active arc.
     * Will be overridden by hover state.
     */
    public readonly activeItemIndex = model<number>(NaN);

    public readonly activeItemIndexChange = outputFromObservable(this.indexChange$);

    protected get width(): number {
        return SIZE[this.size()];
    }

    protected get strokeWidth(): number {
        return WIDTH[this.size()];
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
