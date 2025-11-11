import {NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChildren,
    inject,
    Input,
    input,
    output,
    signal,
    TemplateRef,
} from '@angular/core';
import {WaIntersectionObserver} from '@ng-web-apis/intersection-observer';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {TuiPan} from '@taiga-ui/cdk/directives/pan';
import {
    TUI_SWIPE_OPTIONS,
    TuiSwipe,
    type TuiSwipeDirection,
} from '@taiga-ui/cdk/directives/swipe';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiPure, tuiSetSignal} from '@taiga-ui/cdk/utils/miscellaneous';

import {TuiCarouselDirective} from './carousel.directive';
import {TuiCarouselAutoscroll} from './carousel-autoscroll.directive';
import {TuiCarouselScroll} from './carousel-scroll.directive';

@Component({
    selector: 'tui-carousel',
    imports: [
        NgTemplateOutlet,
        TuiCarouselAutoscroll,
        TuiCarouselScroll,
        TuiPan,
        TuiSwipe,
        WaIntersectionObserver,
    ],
    templateUrl: './carousel.template.html',
    styleUrl: './carousel.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: TUI_SWIPE_OPTIONS, useValue: {timeout: 200, threshold: 30}}],
    hostDirectives: [
        {
            directive: TuiCarouselDirective,
            inputs: ['duration'],
        },
    ],
    host: {
        '[class._transitioned]': 'transitioned',
        '[class._draggable]': 'draggable()',
        '(touchstart)': 'onTransitioned(false)',
        '(touchend)': 'onTransitioned(true)',
        '(mousedown)': 'onTransitioned(false)',
        '(document:mouseup.zoneless)': 'onTransitioned(true)',
    },
})
export class TuiCarouselComponent {
    private readonly el = tuiInjectElement();
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly directive = inject(TuiCarouselDirective);
    private readonly translate = signal(0);
    private readonly transitioned = signal(true);
    private readonly index = signal(0);

    protected readonly items = contentChildren(TuiItem, {
        read: TemplateRef<Record<string, unknown>>,
    });

    protected readonly computedDraggable = computed(
        () => this.isMobile || this.draggable(),
    );

    protected readonly computedTranslate = computed(
        () => -this.index() / this.itemsCount(),
    );

    protected readonly x = computed(() =>
        this.transitioned() ? this.computedTranslate() : this.translate(),
    );

    protected readonly transform = computed(() => `translateX(${100 * this.x()}%)`);

    public readonly draggable = input(false);

    public readonly itemsCount = input(1);

    public readonly indexChange = output<number>();

    public readonly shift = output<number>();

    @Input('index')
    public set indexSetter(index: number) {
        this.index.set(index);
        tuiSetSignal(this.directive.duration, NaN);
    }

    public next(): void {
        if (this.items() && this.index() === this.items().length - this.itemsCount()) {
            return;
        }

        this.updateIndex(this.index() + 1);
    }

    public prev(): void {
        this.updateIndex(this.index() - 1);
    }

    @tuiPure
    protected getStyle(itemsCount: number): Partial<CSSStyleDeclaration> {
        const percent = `${100 / itemsCount}%`;

        return {
            flexBasis: percent,
            minWidth: percent,
            maxWidth: percent,
        };
    }

    protected onTransitioned(transitioned: boolean): void {
        this.transitioned.set(transitioned);

        if (!transitioned) {
            this.translate.set(this.computedTranslate());
        }

        this.onShift();
    }

    protected isDisabled(index: number): boolean {
        return index < this.index() || index >= this.index() + this.itemsCount();
    }

    protected onIntersection(
        {intersectionRatio}: IntersectionObserverEntry,
        index: number,
    ): void {
        if (intersectionRatio && intersectionRatio >= 0.5 && !this.transitioned()) {
            this.updateIndex(
                this.index() < index ? index - this.itemsCount() + 1 : index,
            );
        }
    }

    protected onScroll(delta: number): void {
        if (!this.isMobile) {
            if (delta > 0) {
                this.next();
            } else {
                this.prev();
            }
        }
    }

    protected onPan(x: number): void {
        if (!this.computedDraggable()) {
            return;
        }

        const min = 1 - this.items().length / this.itemsCount();

        this.translate.set(tuiClamp(x / this.el.clientWidth + this.translate(), min, 0));

        this.onShift();
    }

    protected onSwipe(direction: TuiSwipeDirection): void {
        if (direction === 'left') {
            this.next();
        } else if (direction === 'right') {
            this.prev();
        }
    }

    protected onAutoscroll(): void {
        this.updateIndex(this.index() === this.items().length - 1 ? 0 : this.index() + 1);
    }

    protected onShift(): void {
        this.shift.emit(Math.abs((this.x() % 1) + 0.5) * 2);
    }

    private updateIndex(index: number): void {
        this.index.set(tuiClamp(index, 0, this.items().length - 1));
        this.indexChange.emit(this.index());
    }
}
