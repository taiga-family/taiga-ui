import {NgTemplateOutlet} from '@angular/common';
import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChild,
    inject,
    input,
    model,
    TemplateRef,
} from '@angular/core';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {TUI_REDUCED_MOTION} from '@taiga-ui/core/tokens';

@Component({
    selector: 'tui-carousel',
    imports: [NgTemplateOutlet],
    template: `
        @for ($implicit of items(); track $index) {
            <span class="t-item">
                <ng-container *ngTemplateOutlet="template(); context: {$implicit}" />
            </span>
        }
    `,
    styleUrl: './carousel.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(scroll.zoneless)': 'onScroll()',
        '(animationcancel.self)': 'onScroll()',
    },
})
export class TuiCarouselComponent implements AfterViewInit {
    private readonly el = tuiInjectElement();
    private readonly behavior = inject(TUI_REDUCED_MOTION) ? 'auto' : 'smooth';

    protected readonly template = contentChild.required(TuiItem, {read: TemplateRef});
    protected readonly items = computed(
        () =>
            new Set(
                Array.from({length: 3}, (_, i) =>
                    tuiClamp(this.index() + i - 1, this.min(), this.max()),
                ),
            ),
    );

    public readonly index = model(0);
    public readonly min = input(-Infinity);
    public readonly max = input(Infinity);

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

    protected onScroll(): void {
        const {scrollLeft, scrollWidth, clientWidth} = this.el;
        const step = scrollLeft ? 1 : -1;
        const index = tuiClamp(this.index() + step, this.min(), this.max());
        const scrolling =
            Math.round(scrollWidth - Math.abs(scrollLeft)) !== clientWidth && scrollLeft;

        if (this.el.matches(':active') || scrolling) {
            return;
        }

        this.el.style.overflow = 'hidden';
        this.index.set(index);
        requestAnimationFrame(() => {
            this.el.style.overflow = '';

            if (this.index() > this.min() && this.index() < this.max()) {
                this.el.scrollLeft = this.d * this.el.clientWidth;
            }
        });
    }

    private get d(): number {
        return this.el.matches('[dir="rtl"] :scope') ? -1 : 1;
    }
}
