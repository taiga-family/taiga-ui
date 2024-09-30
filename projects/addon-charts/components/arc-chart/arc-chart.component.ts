import type {ElementRef, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    Output,
    signal,
    ViewChildren,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiRepeatTimes} from '@taiga-ui/cdk/directives/repeat-times';
import {tuiTypedFromEvent, tuiZonefree} from '@taiga-ui/cdk/observables';
import type {TuiSizeXL} from '@taiga-ui/core/types';
import type {Observable} from 'rxjs';
import {map, merge, ReplaySubject, startWith, switchMap, tap, timer} from 'rxjs';

const ARC = 0.76; // 3/4 with 1% safety offset
const SIZE = {m: 9, l: 11, xl: 16} as const;
const WIDTH = {m: 0.25, l: 0.375, xl: 0.5625} as const;
const GAP = {m: 0.125, l: 0.1875, xl: 0.25} as const;

function arcsToIndex(arcs: QueryList<ElementRef<SVGElement>>): Array<Observable<number>> {
    return arcs.map(({nativeElement}, index) =>
        merge(
            tuiTypedFromEvent(nativeElement, 'mouseenter').pipe(map(() => index)),
            tuiTypedFromEvent(nativeElement, 'mouseleave').pipe(map(() => NaN)),
        ),
    );
}

@Component({
    standalone: true,
    selector: 'tui-arc-chart',
    imports: [TuiRepeatTimes],
    templateUrl: './arc-chart.template.html',
    styleUrls: ['./arc-chart.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size',
        '[style.width.rem]': 'width',
        '[style.height.rem]': 'width',
        '[style.strokeWidth.rem]': 'strokeWidth',
    },
})
export class TuiArcChart {
    private readonly arcs$ = new ReplaySubject<QueryList<ElementRef<SVGElement>>>(1);

    protected initialized = signal(false);

    protected readonly $ = timer(0)
        .pipe(tuiZonefree(), takeUntilDestroyed())
        .subscribe(() => this.initialized.set(true));

    @Input()
    public value: readonly number[] = [];

    @Input()
    public size: TuiSizeXL = 'm';

    @Input()
    public max = 100;

    @Input()
    public minLabel = '0%';

    @Input()
    public maxLabel = '100%';

    @Input()
    public activeItemIndex = NaN;

    @Output()
    public readonly activeItemIndexChange = this.arcs$.pipe(
        switchMap((arcs) =>
            arcs.changes.pipe(
                startWith(null),
                switchMap(() => merge(...arcsToIndex(arcs))),
            ),
        ),
        tap((index) => {
            this.activeItemIndex = index;
        }),
    );

    @ViewChildren('arc')
    protected set arcs(arcs: QueryList<ElementRef<SVGElement>>) {
        this.arcs$.next(arcs);
    }

    protected get width(): number {
        return SIZE[this.size];
    }

    protected get strokeWidth(): number {
        return WIDTH[this.size];
    }

    protected isInactive(index: number): boolean {
        return !Number.isNaN(this.activeItemIndex) && index !== this.activeItemIndex;
    }

    protected getInset(index: number): number {
        return this.strokeWidth / 2 + index * (this.strokeWidth + GAP[this.size]);
    }

    protected getDiameter(index: number): number {
        return SIZE[this.size] - 2 * this.getInset(index);
    }

    protected getLength(index: number): number {
        return Math.PI * this.getDiameter(index) * ARC;
    }

    protected getOffset(index: number): number {
        return (
            this.getLength(index) * (1 - Math.min((this.value[index] || 0) / this.max, 1))
        );
    }
}
