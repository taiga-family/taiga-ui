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
import {debounceTime, fromEvent} from 'rxjs';

@Component({
    selector: 'tui-carousel',
    imports: [NgTemplateOutlet, WaIntersectionObserver, WaIntersectionObserverDirective],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(WA_INTERSECTION_ROOT, ElementRef)],
    hostDirectives: [WaIntersectionObserverDirective],
    host: {waIntersectionThreshold: '0.5', '[style.max-block-size.px]': 'height()'},
})
export class TuiCarouselComponent implements AfterViewInit {
    private readonly el = tuiInjectElement();
    private readonly win = inject(WA_WINDOW);
    private readonly behavior = inject(TUI_REDUCED_MOTION) ? 'auto' : 'smooth';

    protected readonly math = Math;
    protected readonly template = contentChild.required(TuiItem, {read: TemplateRef});
    protected readonly height = signal(Number.NaN);

    public readonly index = model(0);
    public readonly min = input(-Infinity);
    public readonly max = input(Infinity);

    constructor() {
        const scrollEnd$ =
            'onscrollend' in this.el
                ? fromEvent(this.el, 'scrollend')
                : fromEvent(this.el, 'scroll').pipe(debounceTime(100));

        scrollEnd$.subscribe(() => {
            if (this.fallback) {
                this.onIntersection(true, 1);
            }

            this.snap();
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
        const scroll = (): void => this.el.scrollTo({left: this.d * this.el.clientWidth});

        if (isIntersecting) {
            if (index !== this.index()) {
                this.el.style.overflow = 'hidden';
            }

            this.index.set(index);
            requestAnimationFrame(() => {
                this.el.style.overflow = '';

                if (this.index() > this.min() && this.index() < this.max()) {
                    this.el.addEventListener('scroll', scroll, {once: true});
                    scroll();
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

    private snap(): void {
        const width = this.el.clientWidth;

        if (!width) {
            return;
        }

        const current = Math.abs(this.el.scrollLeft);
        const target = Math.round(current / width) * width;

        if (Math.abs(current - target) < 1) {
            return;
        }

        this.el.scrollTo({left: this.d * target});
    }
}
