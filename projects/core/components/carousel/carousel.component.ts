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
    TemplateRef,
} from '@angular/core';
import {
    WA_INTERSECTION_ROOT,
    WaIntersectionObserver,
    WaIntersectionObserverDirective,
} from '@ng-web-apis/intersection-observer';
import {WA_IS_IOS} from '@ng-web-apis/platform';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';

@Component({
    selector: 'tui-carousel',
    imports: [NgTemplateOutlet, WaIntersectionObserver],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(WA_INTERSECTION_ROOT, ElementRef)],
    hostDirectives: [WaIntersectionObserverDirective],
    host: {waIntersectionThreshold: '1'},
})
export class TuiCarouselComponent implements AfterViewInit {
    private readonly el = tuiInjectElement();
    private readonly ios = inject(WA_IS_IOS);

    protected readonly math = Math;
    protected readonly template = contentChild.required(TuiItem, {read: TemplateRef});

    public readonly index = model(0);
    public readonly min = input(-Infinity);
    public readonly max = input(Infinity);

    public ngAfterViewInit(): void {
        if (this.index() > this.min()) {
            this.el.scrollLeft = this.d * this.el.clientWidth;
        }
    }

    public next(): void {
        this.el.scrollTo({left: this.d * this.el.scrollWidth, behavior: 'smooth'});
    }

    public prev(): void {
        this.el.scrollTo({left: 0, behavior: 'smooth'});
    }

    protected onIntersection(isIntersecting: boolean, step: number): void {
        const index = tuiClamp(this.index() + step, this.min(), this.max());

        if (isIntersecting) {
            if (this.ios && index !== this.index()) {
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

    private get d(): number {
        return this.el.matches('[dir="rtl"] :scope') ? -1 : 1;
    }
}
