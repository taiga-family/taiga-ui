import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Output,
    QueryList,
    TemplateRef,
} from '@angular/core';
import {INTERSECTION_ROOT} from '@ng-web-apis/intersection-observer';
import type {TuiSwipeDirection} from '@taiga-ui/cdk';
import {
    EMPTY_QUERY,
    TUI_IS_MOBILE,
    tuiClamp,
    tuiDefaultProp,
    TuiItemDirective,
    tuiPure,
} from '@taiga-ui/cdk';

@Component({
    selector: `tui-carousel`,
    templateUrl: `carousel.template.html`,
    styleUrls: [`carousel.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: INTERSECTION_ROOT,
            useExisting: ElementRef,
        },
    ],
})
export class TuiCarouselComponent {
    private translate = 0;

    @Input()
    @HostBinding(`class._draggable`)
    @tuiDefaultProp()
    draggable = false;

    @Input()
    @tuiDefaultProp()
    itemsCount = 1;

    @Input()
    @tuiDefaultProp()
    index = 0;

    @Output()
    readonly indexChange = new EventEmitter<number>();

    @ContentChildren(TuiItemDirective, {read: TemplateRef})
    readonly items: QueryList<TemplateRef<Record<string, unknown>>> = EMPTY_QUERY;

    @HostBinding(`class._transitioned`)
    transitioned = true;

    constructor(
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
    ) {}

    get transform(): string {
        const x = this.transitioned ? this.computedTranslate : this.translate;

        return `translateX(${100 * x}%)`;
    }

    @HostListener(`touchstart`, [`false`])
    @HostListener(`touchend`, [`true`])
    @HostListener(`mousedown`, [`false`])
    @HostListener(`document:mouseup.silent`, [`true`])
    onTransitioned(transitioned: boolean): void {
        this.transitioned = transitioned;

        if (!transitioned) {
            this.translate = this.computedTranslate;
        }
    }

    @tuiPure
    getStyle(itemsCount: number): Partial<CSSStyleDeclaration> {
        const percent = `${100 / itemsCount}%`;

        return {
            flexBasis: percent,
            minWidth: percent,
            maxWidth: percent,
        };
    }

    next(): void {
        this.updateIndex(this.index + 1);
    }

    prev(): void {
        this.updateIndex(this.index - 1);
    }

    isDisabled(index: number): boolean {
        return index < this.index || index > this.index + this.itemsCount;
    }

    onIntersection({intersectionRatio}: IntersectionObserverEntry, index: number): void {
        if (intersectionRatio && intersectionRatio !== 1 && !this.transitioned) {
            this.updateIndex(index - Math.floor(this.itemsCount / 2));
        }
    }

    onScroll(delta: number): void {
        if (!this.isMobile) {
            this.updateIndex(this.index + delta);
        }
    }

    onPan(x: number): void {
        if (!this.computedDraggable) {
            return;
        }

        const {clientWidth} = this.elementRef.nativeElement;
        const min = 1 - this.items.length / this.itemsCount;

        this.translate = tuiClamp(x / clientWidth + this.translate, min, 0);
    }

    onSwipe(direction: TuiSwipeDirection): void {
        if (Math.round(this.translate) !== -this.index || !this.computedDraggable) {
            return;
        } else if (direction === `left`) {
            this.next();
        } else if (direction === `right`) {
            this.prev();
        }
    }

    onAutoscroll(): void {
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
        this.changeDetectorRef.markForCheck();
    }
}
