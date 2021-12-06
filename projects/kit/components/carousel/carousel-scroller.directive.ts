import {
    Directive,
    ElementRef,
    HostListener,
    Inject,
    Input,
    Optional,
} from '@angular/core';
import {INTERSECTION_ROOT} from '@ng-web-apis/intersection-observer';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {shouldCall} from '@tinkoff/ng-event-plugins';

import {TuiCarouselDirective} from './carousel.directive';
import {TuiCarouselDraggableDirective} from './carousel-draggable.directive';

export function shouldScroll(this: TuiCarouselScrollerDirective): boolean {
    return !this.isMobile && !!this.draggable?.draggable && this.index === this.current;
}

// @dynamic
@Directive({
    selector: '[tuiCarouselScroller]',
})
export class TuiCarouselScrollerDirective {
    @Input()
    set scroll(scroll: boolean) {
        if (scroll) {
            this.scrollTo(this.directive.inited ? 'smooth' : 'auto');
        }
    }

    @Input()
    index = 0;

    @Input()
    current = 0;

    constructor(
        @Optional()
        @Inject(TuiCarouselDraggableDirective)
        readonly draggable: TuiCarouselDraggableDirective | null,
        @Inject(TUI_IS_MOBILE) readonly isMobile: boolean,
        @Inject(TuiCarouselDirective) private readonly directive: TuiCarouselDirective,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(INTERSECTION_ROOT) private readonly root: ElementRef<HTMLElement>,
    ) {}

    @HostListener('document:mouseup.init', ['$event'])
    @HostListener('document:mouseup.silent', ['$event'])
    @shouldCall(shouldScroll)
    onMouseUp(_e: unknown) {
        const {left} = this.root.nativeElement.getBoundingClientRect();
        const rect = this.elementRef.nativeElement.getBoundingClientRect();
        const {parentElement} = this.elementRef.nativeElement;

        parentElement!.style.transform = `translateX(${rect.left - left}px)`;
        this.scrollTo();
    }

    private scrollTo(behavior: ScrollBehavior = 'auto') {
        this.directive.inited = true;
        this.root.nativeElement.scrollTo({
            left: this.elementRef.nativeElement.offsetLeft,
            behavior,
        });
    }
}
