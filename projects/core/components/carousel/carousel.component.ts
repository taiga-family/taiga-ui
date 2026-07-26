import {NgTemplateOutlet} from '@angular/common';
import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    contentChild,
    ElementRef,
    inject,
    input,
    model,
    signal,
    TemplateRef,
    VERSION,
} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {
    WA_INTERSECTION_ROOT,
    WaIntersectionObserver,
    WaIntersectionObserverDirective,
} from '@ng-web-apis/intersection-observer';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {TUI_REDUCED_MOTION} from '@taiga-ui/core/tokens';
import {debounceTime, filter, fromEvent} from 'rxjs';

@Component({
    selector: 'tui-carousel',
    imports: [NgTemplateOutlet, WaIntersectionObserver, WaIntersectionObserverDirective],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(WA_INTERSECTION_ROOT, ElementRef)],
    hostDirectives: [WaIntersectionObserverDirective],
    host: {
        waIntersectionThreshold: '0.5',
        '[attr.ngSkipHydration]': 'skipHydration',
        '[style.max-block-size.px]': 'height()',
    },
})
export class TuiCarouselComponent implements AfterViewInit {
    private readonly el = tuiInjectElement();
    private readonly win = inject(WA_WINDOW);
    private readonly behavior = inject(TUI_REDUCED_MOTION) ? 'auto' : 'smooth';

    protected readonly math = Math;
    protected readonly template = contentChild.required(TuiItem, {read: TemplateRef});
    protected readonly height = signal(Number.NaN);

    // https://github.com/angular/angular/issues/50543
    // TODO(v6): delete
    protected readonly skipHydration =
        Number.parseInt(VERSION.major, 10) < 20 ? '' : null;

    public readonly index = model(0);
    public readonly min = input(-Infinity);
    public readonly max = input(Infinity);

    constructor() {
        fromEvent(this.el, 'scroll')
            .pipe(
                debounceTime(100),
                filter(() => this.fallback),
            )
            .subscribe(() => {
                this.onIntersection(true, 1);
            });
    }

    public ngAfterViewInit(): void {
        if (this.index() > this.min()) {
            this.el.scrollLeft = this.d * this.el.clientWidth;
        }
    }

    public next(): void {
        this.el.scrollTo({left: this.d * this.el.scrollWidth, behavior: this.behavior});
    }

    public prev(): void {
        this.el.scrollTo({left: 0, behavior: this.behavior});
    }

    protected onIntersection(isIntersecting: boolean, step: number): void {
        const index = tuiClamp(this.index() + step, this.min(), this.max());

        if (isIntersecting) {
            if (index !== this.index()) {
                this.el.style.overflow = 'hidden';
            }

            this.index.set(index);
            requestAnimationFrame(() => {
                this.el.style.overflow = '';

                if (this.index() > this.min() && this.index() < this.max()) {
                    this.el.scrollLeft = this.d * this.el.clientWidth;
                }
            });
        }
    }

    protected onSlide(entry?: IntersectionObserverEntry): void {
        if (entry?.isIntersecting) {
            this.height.set(entry.target.parentElement?.clientHeight ?? Number.NaN);
        }
    }

    private get d(): number {
        return this.el.matches('[dir="rtl"] :scope') ? -1 : 1;
    }

    private get fallback(): boolean {
        return (
            !!((this.win.devicePixelRatio * 100) % 1) &&
            this.el.scrollWidth - this.el.clientWidth - Math.abs(this.el.scrollLeft) < 1
        );
    }
}
