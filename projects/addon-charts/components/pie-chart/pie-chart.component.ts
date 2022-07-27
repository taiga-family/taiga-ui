import {Location} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {DomSanitizer, SafeValue} from '@angular/platform-browser';
import {TUI_DEFAULT_COLOR_HANDLER} from '@taiga-ui/addon-charts/constants';
import {TuiColorHandler} from '@taiga-ui/addon-charts/types';
import {
    sum,
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiIdService,
    tuiPure,
} from '@taiga-ui/cdk';
import {colorFallback, TuiSizeXL, TuiSizeXS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

const RADII = {
    xs: `50`,
    s: `50`,
    m: `77.8`,
    l: `81.9`,
    xl: `81.3`,
};
const TRANSFORM = {
    xs: 1.15,
    s: 1.25,
    m: 1.11,
    l: 1.09,
    xl: 1.08,
};

// TODO: 3.0 Remove sanitizer when Angular version is bumped
@Component({
    selector: `tui-pie-chart`,
    templateUrl: `./pie-chart.template.html`,
    styleUrls: [`./pie-chart.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPieChartComponent {
    private readonly autoIdString: string;

    @Input()
    @tuiDefaultProp()
    value: readonly number[] = [];

    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeXS | TuiSizeXL = `m`;

    @Input()
    @tuiDefaultProp()
    colorHandler: TuiColorHandler = TUI_DEFAULT_COLOR_HANDLER;

    @Input()
    @tuiDefaultProp()
    hintContent: PolymorpheusContent<TuiContextWithImplicit<number>> = ``;

    @Input()
    @tuiDefaultProp()
    masked = false;

    @Input()
    @tuiDefaultProp()
    activeItemIndex = NaN;

    @Output()
    activeItemIndexChange = new EventEmitter<number>();

    constructor(
        @Inject(TuiIdService) idService: TuiIdService,
        @Inject(Location) private readonly locationRef: Location,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
    ) {
        this.autoIdString = idService.generate();
    }

    @HostBinding(`class._empty`)
    get empty(): boolean {
        return !this.getSum(this.value);
    }

    get maskId(): string {
        return `tui-ring-chart-${this.autoIdString}`;
    }

    get mask(): string | null {
        return this.masked
            ? `url(${this.locationRef.prepareExternalUrl(this.locationRef.path())}#${
                  this.maskId
              })`
            : null;
    }

    get radius(): string {
        return RADII[this.size];
    }

    get segments(): ReadonlyArray<[number, number]> {
        return this.getSegments(this.value);
    }

    getTransform(index: number): string | null {
        const transform = this.masked
            ? `scale(${TRANSFORM[this.size]})`
            : `scale(${TRANSFORM.xs})`;

        return index === this.activeItemIndex ? transform : null;
    }

    getHint(hint: PolymorpheusContent): PolymorpheusContent {
        return this.hintContent ? hint : ``;
    }

    onHovered(hovered: boolean, index: number): void {
        this.updateActiveItemIndex(hovered ? index : NaN);
    }

    getColor(index: number): SafeValue {
        return this.sanitizer.bypassSecurityTrustStyle(
            `var(--tui-chart-${index}, ${colorFallback(this.colorHandler(index))})`,
        );
    }

    @tuiPure
    private getSum(value: readonly number[]): number {
        return sum(...value);
    }

    @tuiPure
    private getSegments(value: readonly number[]): ReadonlyArray<[number, number]> {
        return value
            .map((initial, i, array) =>
                array.reduce(
                    (sum, current, j) => (j < i ? this.getDeg(current) + sum : sum),
                    this.getDeg(initial),
                ),
            )
            .map((angle, index, array) => [
                array[index - 1] || 0,
                Math.min(angle, 359.9999),
            ]);
    }

    private getDeg(value: number): number {
        return 360 * (value / this.getSum(this.value));
    }

    private updateActiveItemIndex(index: number): void {
        if (index === this.activeItemIndex) {
            return;
        }

        this.activeItemIndex = index;
        this.activeItemIndexChange.next(index);
    }
}
