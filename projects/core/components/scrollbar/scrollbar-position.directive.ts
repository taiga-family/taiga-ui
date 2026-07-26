import {Directive, inject, input} from '@angular/core';
import {WA_ANIMATION_FRAME} from '@ng-web-apis/common';
import {
    tuiScrollFrom,
    tuiZonefree,
    tuiZonefreeScheduler,
} from '@taiga-ui/cdk/observables';
import {map, merge, Observable, throttleTime} from 'rxjs';

import {TUI_SCROLL_REF} from './scroll-ref.directive';

const MIN_WIDTH = 24;

interface ComputedDimension {
    scrollTop: number;
    scrollHeight: number;
    clientHeight: number;
    scrollLeft: number;
    scrollWidth: number;
    clientWidth: number;
}

@Directive()
export class TuiScrollbarPosition extends Observable<Partial<CSSStyleDeclaration>> {
    private readonly scrollRef = inject(TUI_SCROLL_REF);

    private readonly stream$ = merge(
        inject(WA_ANIMATION_FRAME).pipe(throttleTime(100, tuiZonefreeScheduler())),
        tuiScrollFrom(this.el),
    ).pipe(
        tuiZonefree(),
        map(() => {
            const dimension: ComputedDimension = {
                scrollTop: this.el.scrollTop,
                scrollHeight: this.el.scrollHeight,
                clientHeight: this.el.clientHeight,
                scrollLeft: this.el.scrollLeft,
                scrollWidth: this.el.scrollWidth,
                clientWidth: this.el.clientWidth,
            };

            const thumb = `${this.getThumb(dimension) * 100}%`;
            const view = `${this.getView(dimension) * 100}%`;

            return this.tuiScrollbar() === 'vertical'
                ? {
                      top: thumb,
                      height: view,
                  }
                : {
                      insetInlineStart: thumb,
                      width: view,
                  };
        }),
    );

    public readonly tuiScrollbar = input<'horizontal' | 'vertical'>('vertical');

    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
    }

    private get el(): HTMLElement {
        return this.scrollRef.nativeElement;
    }

    private getThumb(dimension: ComputedDimension): number {
        const compensation = this.getCompensation(dimension) || this.getView(dimension);

        return Math.abs(this.getScrolled(dimension) * (1 - compensation));
    }

    private getView(dimension: ComputedDimension): number {
        return this.tuiScrollbar() === 'vertical'
            ? Math.ceil((dimension.clientHeight / dimension.scrollHeight) * 100) / 100
            : Math.ceil((dimension.clientWidth / dimension.scrollWidth) * 100) / 100;
    }

    private getScrolled(dimension: ComputedDimension): number {
        return this.tuiScrollbar() === 'vertical'
            ? dimension.scrollTop / (dimension.scrollHeight - dimension.clientHeight)
            : dimension.scrollLeft / (dimension.scrollWidth - dimension.clientWidth);
    }

    private getCompensation(dimension: ComputedDimension): number {
        if (
            ((dimension.clientHeight * dimension.clientHeight) / dimension.scrollHeight >
                MIN_WIDTH &&
                this.tuiScrollbar() === 'vertical') ||
            ((dimension.clientWidth * dimension.clientWidth) / dimension.scrollWidth >
                MIN_WIDTH &&
                this.tuiScrollbar() === 'horizontal')
        ) {
            return 0;
        }

        return this.tuiScrollbar() === 'vertical'
            ? MIN_WIDTH / dimension.clientHeight
            : MIN_WIDTH / dimension.clientWidth;
    }
}
