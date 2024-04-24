import type {ElementRef, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    inject,
    Input,
    Output,
    ViewChildren,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {SafeValue} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {tuiTypedFromEvent, tuiWatch} from '@taiga-ui/cdk';
import type {TuiSizeXL} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {map, merge, ReplaySubject, startWith, switchMap, tap, timer} from 'rxjs';
// 3/4 with 1% safety offset
const ARC = 0.76;

const SIZE: Record<TuiSizeXL, number> = {
    m: 9,
    l: 11,
    xl: 16,
};

const WIDTH: Record<TuiSizeXL, number> = {
    m: 0.25,
    l: 0.375,
    xl: 0.5625,
};

const GAP: Record<TuiSizeXL, number> = {
    m: 0.125,
    l: 0.1875,
    xl: 0.25,
};

function arcsToIndex(arcs: QueryList<ElementRef<SVGElement>>): Array<Observable<number>> {
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
    styleUrls: ['./arc-chart.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiArcChartComponent {
    private readonly sanitizer = inject(DomSanitizer);
    private readonly arcs$ = new ReplaySubject<QueryList<ElementRef<SVGElement>>>(1);

    @Input()
    public value: readonly number[] = [];

    @Input()
    @HostBinding('attr.data-size')
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
        switchMap(arcs =>
            arcs.changes.pipe(
                startWith(null),
                switchMap(() => merge(...arcsToIndex(arcs))),
            ),
        ),
        tap(index => {
            this.activeItemIndex = index;
        }),
    );

    protected initialized = false;

    constructor() {
        timer(0)
            .pipe(tuiWatch(inject(ChangeDetectorRef)), takeUntilDestroyed())
            .subscribe(() => {
                this.initialized = true;
            });
    }

    @ViewChildren('arc')
    protected set arcs(arcs: QueryList<ElementRef<SVGElement>>) {
        this.arcs$.next(arcs);
    }

    @HostBinding('style.width.rem')
    @HostBinding('style.height.rem')
    protected get width(): number {
        return SIZE[this.size];
    }

    @HostBinding('style.strokeWidth.rem')
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
        return this.getLength(index) * (1 - Math.min(this.value[index] / this.max, 1));
    }

    protected getColor(index: number): SafeValue {
        return this.sanitizer.bypassSecurityTrustStyle(
            `var(--tui-chart-${index}, var(--tui-support-0${index + 1}))`,
        );
    }
}
