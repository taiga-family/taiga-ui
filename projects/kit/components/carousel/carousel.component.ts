import {AsyncPipe, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    EventEmitter,
    inject,
    Input,
    Output,
    TemplateRef,
} from '@angular/core';
import {WaIntersectionObserver} from '@ng-web-apis/intersection-observer';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {TuiPan} from '@taiga-ui/cdk/directives/pan';
import type {TuiSwipeDirection} from '@taiga-ui/cdk/directives/swipe';
import {TUI_SWIPE_OPTIONS, TuiSwipe} from '@taiga-ui/cdk/directives/swipe';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';

import {TuiCarouselDirective} from './carousel.directive';
import {TuiCarouselAutoscroll} from './carousel-autoscroll.directive';
import {TuiCarouselScroll} from './carousel-scroll.directive';

@Component({
    standalone: true,
    selector: 'tui-carousel',
    imports: [
        AsyncPipe,
        NgForOf,
        NgIf,
        NgTemplateOutlet,
        TuiCarouselAutoscroll,
        TuiCarouselScroll,
        TuiPan,
        TuiSwipe,
        WaIntersectionObserver,
    ],
    templateUrl: './carousel.template.html',
    styleUrls: ['./carousel.style.less'],
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
        '[class._draggable]': 'draggable',
        '(touchstart)': 'onTransitioned(false)',
        '(touchend)': 'onTransitioned(true)',
        '(mousedown)': 'onTransitioned(false)',
        '(document:mouseup.zoneless)': 'onTransitioned(true)',
    },
})
export class TuiCarouselComponent {
    private readonly el = tuiInjectElement();
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly directive = inject(TuiCarouselDirective);
    private translate = 0;

    @ContentChildren(TuiItem, {read: TemplateRef})
    protected readonly items: QueryList<TemplateRef<Record<string, unknown>>> =
        EMPTY_QUERY;

    protected transitioned = true;

    protected index = 0;

    @Input()
    public draggable = false;

    @Input()
    public itemsCount = 1;

    @Output()
    public readonly indexChange = new EventEmitter<number>();

    @Input('index')
    public set indexSetter(index: number) {
        this.index = index;
        this.directive.duration = NaN;
    }

    public next(): void {
        if (this.items && this.index === this.items.length - this.itemsCount) {
            return;
        }

        this.updateIndex(this.index + 1);
    }

    public prev(): void {
        this.updateIndex(this.index - 1);
    }

    protected get transform(): string {
        const x = this.transitioned ? this.computedTranslate : this.translate;

        return `translateX(${100 * x}%)`;
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
        this.transitioned = transitioned;

        if (!transitioned) {
            this.translate = this.computedTranslate;
        }
    }

    protected isDisabled(index: number): boolean {
        return index < this.index || index > this.index + this.itemsCount;
    }

    protected onIntersection(
        {intersectionRatio}: IntersectionObserverEntry,
        index: number,
    ): void {
        if (intersectionRatio && intersectionRatio >= 0.5 && !this.transitioned) {
            this.updateIndex(this.index < index ? index - this.itemsCount + 1 : index);
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
        if (!this.computedDraggable) {
            return;
        }

        const min = 1 - this.items.length / this.itemsCount;

        this.translate = tuiClamp(x / this.el.clientWidth + this.translate, min, 0);
    }

    protected onSwipe(direction: TuiSwipeDirection): void {
        if (direction === 'left') {
            this.next();
        } else if (direction === 'right') {
            this.prev();
        }
    }

    protected onAutoscroll(): void {
        this.updateIndex(this.index === this.items.length - 1 ? 0 : this.index + 1);
    }

    private get computedTranslate(): number {
        return -this.index / this.itemsCount;
    }

    private get computedDraggable(): boolean {
        return this.isMobile || this.draggable;
    }

    private updateIndex(index: number): void {
        this.index = tuiClamp(index, 0, this.items.length - 1);
        this.indexChange.emit(this.index);
        this.cdr.markForCheck();
    }
}
