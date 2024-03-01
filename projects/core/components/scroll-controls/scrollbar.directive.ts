import {Directive, ElementRef, inject, Input, NgZone} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {POLLING_TIME, TuiDestroyService, tuiScrollFrom, tuiZonefree} from '@taiga-ui/cdk';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {merge, takeUntil, throttleTime} from 'rxjs';

import {TuiScrollbarService} from './scrollbar.service';

const MIN_WIDTH = 24;

@Directive({
    standalone: true,
    selector: '[tuiScrollbar]',
    providers: [TuiScrollbarService, TuiDestroyService],
})
export class TuiScrollbarDirective {
    private readonly el: HTMLElement = inject(TUI_SCROLL_REF).nativeElement;
    private readonly style: CSSStyleDeclaration = inject(ElementRef).nativeElement.style;

    @Input()
    public tuiScrollbar: 'horizontal' | 'vertical' = 'vertical';

    protected readonly scrollSub = inject(TuiScrollbarService)
        .pipe(takeUntil(inject(TuiDestroyService)))
        .subscribe(([top, left]) => {
            this.el.style.scrollBehavior = 'auto';
            this.el.scrollTo({top, left});
            this.el.style.scrollBehavior = '';
        });

    protected readonly styleSub = merge(
        inject(ANIMATION_FRAME).pipe(throttleTime(POLLING_TIME)),
        tuiScrollFrom(this.el),
    )
        .pipe(tuiZonefree(inject(NgZone)), takeUntil(inject(TuiDestroyService)))
        .subscribe(() => {
            if (this.tuiScrollbar === 'vertical') {
                this.style.top = `${this.thumb * 100}%`;
                this.style.height = `${this.view * 100}%`;
            } else {
                this.style.left = `${this.thumb * 100}%`;
                this.style.width = `${this.view * 100}%`;
            }
        });

    private get scrolled(): number {
        const {
            scrollTop,
            scrollHeight,
            clientHeight,
            scrollLeft,
            scrollWidth,
            clientWidth,
        } = this.el;

        return this.tuiScrollbar === 'vertical'
            ? scrollTop / (scrollHeight - clientHeight)
            : scrollLeft / (scrollWidth - clientWidth);
    }

    private get compensation(): number {
        const {clientHeight, scrollHeight, clientWidth, scrollWidth} = this.el;

        if (
            ((clientHeight * clientHeight) / scrollHeight > MIN_WIDTH &&
                this.tuiScrollbar === 'vertical') ||
            ((clientWidth * clientWidth) / scrollWidth > MIN_WIDTH &&
                this.tuiScrollbar === 'horizontal')
        ) {
            return 0;
        }

        return this.tuiScrollbar === 'vertical'
            ? MIN_WIDTH / clientHeight
            : MIN_WIDTH / clientWidth;
    }

    private get thumb(): number {
        const compensation = this.compensation || this.view;

        return this.scrolled * (1 - compensation);
    }

    private get view(): number {
        const {clientHeight, scrollHeight, clientWidth, scrollWidth} = this.el;

        return this.tuiScrollbar === 'vertical'
            ? Math.ceil((clientHeight / scrollHeight) * 100) / 100
            : Math.ceil((clientWidth / scrollWidth) * 100) / 100;
    }
}
