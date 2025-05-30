/* eslint-disable @taiga-ui/experience-next/decorator-key-sort */
/* eslint-disable @typescript-eslint/member-ordering */
import {AsyncPipe, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import type {AfterContentInit, QueryList} from '@angular/core';
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
    templateUrl: './carousel.template.html',
    styleUrls: ['./carousel.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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
export class TuiCarouselComponent implements AfterContentInit {
    /* ------------------------------------------------------------------
     * 1.  Private readonly injections / fields
     * ------------------------------------------------------------------ */
    private readonly el: HTMLElement = tuiInjectElement();
    private readonly cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
    private readonly isMobile: boolean = inject(TUI_IS_MOBILE);
    private readonly directive: TuiCarouselDirective = inject(TuiCarouselDirective);

    /** pixel-free translate used while user is dragging */
    private translate = 0;

    /* ------------------------------------------------------------------
     * 2.  Content projected items
     * ------------------------------------------------------------------ */
    @ContentChildren(TuiItem, {read: TemplateRef})
    protected readonly items: QueryList<TemplateRef<Record<string, unknown>>> =
        EMPTY_QUERY;

    /* ------------------------------------------------------------------
     * 3.  Public API inputs / outputs
     * ------------------------------------------------------------------ */
    /** show grab cursor / enable pan on desktop */
    @Input()
    public draggable = false;

    /** elements visible at once */
    @Input()
    public itemsCount = 1;

    /** seamless infinite loop */
    @Input()
    public loop = false;

    @Output()
    public readonly indexChange = new EventEmitter<number>();

    @Output()
    public readonly shift = new EventEmitter<number>();

    /* ------------------------------------------------------------------
     * 4.  Two-way bound index
     * ------------------------------------------------------------------ */
    @Input('index')
    public set indexSetter(i: number) {
        this.real = i;
        this.index = this.loop ? i + this.offset : i;
        this.directive.duration = Number.NaN; // pause autoscroll momentarily
    }

    /* ------------------------------------------------------------------
     * 5.  Protected state used in template
     * ------------------------------------------------------------------ */
    /** visual index inside the `view` array (includes clones) */
    protected index = 0;

    /** when `false`, CSS transition is disabled */
    protected transitioned = true;

    /* ------------------------------------------------------------------
     * 6.  Private state
     * ------------------------------------------------------------------ */
    /** real index inside the *original* array (what the outside world sees) */
    private real = 0;

    /* ------------------------------------------------------------------
     * 7.  Derived data — getters
     * ------------------------------------------------------------------ */
    /** original templates as a flat array */
    private get src(): Array<TemplateRef<Record<string, unknown>>> {
        return this.items?.toArray() ?? [];
    }

    /** how many helper items are prepended for smooth wrap */
    private get offset(): number {
        return this.loop ? this.itemsCount : 0;
    }

    /** templates actually rendered (with cloned head+tail in loop mode) */
    @tuiPure
    protected get view(): Array<TemplateRef<Record<string, unknown>>> {
        if (!this.loop || this.src.length === 0) {
            return this.src;
        }

        const head = this.src.slice(0, this.itemsCount);
        const tail = this.src.slice(-this.itemsCount);

        return [...tail, ...this.src, ...head];
    }

    /* ------------------------------------------------------------------
     * 8.  Angular lifecycle
     * ------------------------------------------------------------------ */
    public ngAfterContentInit(): void {
        if (this.loop && this.view.length > 0) {
            // teleport cursor after prepended tail clones
            this.index = this.offset;
            this.real = 0;
            this.cdr.detectChanges(); // ensure initial translate is correct
        }
    }

    /* ------------------------------------------------------------------
     * 9.  Navigation API (public)
     * ------------------------------------------------------------------ */
    public next(): void {
        if (!this.loop && this.index === this.view.length - this.itemsCount) {
            return;
        }

        this.updateIndex(this.index + 1);
    }

    public prev(): void {
        if (!this.loop && this.index === 0) {
            return;
        }

        this.updateIndex(this.index - 1);
    }

    /* ------------------------------------------------------------------
     * 10.  Template bindings / helpers
     * ------------------------------------------------------------------ */
    protected get transform(): string {
        return `translateX(${100 * this.currentTranslate}%)`;
    }

    @tuiPure
    protected getStyle(count: number): Partial<CSSStyleDeclaration> {
        const width = `${100 / count}%`;

        return {
            flexBasis: width,
            minWidth: width,
            maxWidth: width,
        };
    }

    /* ------------------------------------------------------------------
     * 11.  Event handlers
     * ------------------------------------------------------------------ */
    protected onTransitioned(done: boolean): void {
        this.transitioned = done;

        if (!done) {
            this.translate = this.computedTranslate; // unchanged
        }

        if (done && !this.transitioned /* still false inside this block */) {
            const snapped = Math.round(-this.translate * this.itemsCount);

            this.updateIndex(snapped);

            return;
        }

        if (this.loop && done) {
            const crossedLeft = this.index <= this.itemsCount - 1;
            const crossedRight = this.index >= this.src.length + this.offset;

            if (crossedLeft || crossedRight) {
                this.transitioned = false;
                this.index = this.real + this.offset;
                this.translate = this.computedTranslate;

                this.cdr.detectChanges();
                requestAnimationFrame(() => {
                    this.transitioned = true;
                });
            }
        }

        this.onShift();
    }

    protected isDisabled(i: number): boolean {
        if (this.loop) {
            return false; // keep all items active so no shrinking occurs
        }

        return i < this.index || i >= this.index + this.itemsCount;
    }

    protected onIntersection(
        {intersectionRatio}: IntersectionObserverEntry,
        i: number,
    ): void {
        if (intersectionRatio >= 0.5 && !this.transitioned) {
            const delta = this.index < i ? i - this.itemsCount + 1 : i;

            this.updateIndex(delta);
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

        const min = 1 - this.view.length / this.itemsCount;

        this.translate = tuiClamp(x / this.el.clientWidth + this.translate, min, 0);
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
        if (!this.transitioned) {
            return;
        }

        this.updateIndex(this.index + 1);
    }

    protected onShift(): void {
        this.shift.emit(Math.abs((this.currentTranslate % 1) + 0.5) * 2);
    }

    /* ------------------------------------------------------------------
     * 12.  Pure computed helpers
     * ------------------------------------------------------------------ */
    private get currentTranslate(): number {
        return this.transitioned ? this.computedTranslate : this.translate;
    }

    private get computedTranslate(): number {
        return -this.index / this.itemsCount;
    }

    private get computedDraggable(): boolean {
        return this.isMobile || this.draggable;
    }

    /* ------------------------------------------------------------------
     * 13.  Central index updater
     * ------------------------------------------------------------------ */
    private updateIndex(i: number): void {
        if (this.loop) {
            const min = 0;
            const max = this.view.length - this.itemsCount;

            if (i < min) {
                this.index = max;
            } else if (i > max) {
                this.index = min;
            } else {
                this.index = i;
            }

            this.real = (this.index - this.offset + this.src.length) % this.src.length;
        } else {
            this.index = tuiClamp(i, 0, this.view.length - 1);
            this.real = this.index;
        }

        this.indexChange.emit(this.real);
        this.cdr.markForCheck();
    }
}
