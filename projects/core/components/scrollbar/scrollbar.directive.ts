import {Directive, ElementRef, inject, INJECTOR, Injector, Input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    MutationObserverService,
    provideMutationObserverInit,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiScrollFrom} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {
    animationFrameScheduler,
    auditTime,
    combineLatest,
    distinctUntilChanged,
    map,
    merge,
    startWith,
} from 'rxjs';

import {TUI_SCROLLBAR_OPTIONS} from './scrollbar.options';
import {TuiScrollbarService} from './scrollbar.service';

const MIN_WIDTH = 24;

interface SizeMetrics {
    scrollHeight: number;
    clientHeight: number;
    scrollWidth: number;
    clientWidth: number;
    view: number; // normalized visible fraction 0..1 (rounded to 2 decimals)
    comp: number; // compensation ratio used for minimum thumb size
}

interface ScrollMetrics {
    scrollTop: number;
    scrollLeft: number;
}

@Directive({
    standalone: true,
    selector: '[tuiScrollbar]',
    providers: [TuiScrollbarService],
})
export class TuiScrollbarDirective {
    private static readonly eps = 0.0005;

    private readonly el = inject(TUI_SCROLL_REF).nativeElement;
    private readonly style = tuiInjectElement().style;
    private readonly injector = inject(INJECTOR);
    private readonly options = inject(TUI_SCROLLBAR_OPTIONS);

    // private readonly initialDimensions: ComputedDimension = {
    //     scrollTop: this.el.scrollTop,
    //     scrollLeft: this.el.scrollLeft,
    //     clientHeight: this.el.clientHeight,
    //     clientWidth: this.el.clientWidth,
    //     scrollHeight: this.el.scrollHeight,
    //     scrollWidth: this.el.scrollWidth,
    // };

    private readonly resizeObserverService = Injector.create({
        providers: [
            ResizeObserverService,
            {
                provide: ElementRef,
                useFactory: () => new ElementRef(this.el),
            },
        ],
        parent: this.injector,
    }).get(ResizeObserverService);

    private readonly mutationObserverService = this.options.observeMutations
        ? Injector.create({
              providers: [
                  MutationObserverService,
                  provideMutationObserverInit({
                      childList: true,
                      characterData: true,
                      subtree: true,
                  }),
                  {
                      provide: ElementRef,
                      useFactory: () => new ElementRef(this.el),
                  },
              ],
              parent: this.injector,
          }).get(MutationObserverService)
        : null;

    protected readonly scrollSub = inject(TuiScrollbarService)
        .pipe(takeUntilDestroyed())
        .subscribe(([top, left]) => {
            this.el.style.scrollBehavior = 'auto';

            if (this.tuiScrollbar === 'horizontal') {
                this.el.scrollLeft = left;
            } else {
                this.el.scrollTop = top;
            }

            this.el.style.scrollBehavior = '';
        });

    protected readonly styleSub = this.subscribeStyles();

    @Input()
    public tuiScrollbar: 'horizontal' | 'vertical' = 'vertical';

    private subscribeStyles(): any {
        const el = this.el;
        const mutation$ = this.mutationObserverService;

        const size$ = merge(this.resizeObserverService, mutation$ || []).pipe(
            startWith(null),
            auditTime(0, animationFrameScheduler),
            map<unknown, SizeMetrics>(() => {
                const scrollHeight = el.scrollHeight;
                const clientHeight = el.clientHeight;
                const scrollWidth = el.scrollWidth;
                const clientWidth = el.clientWidth;
                const view = this.getView({
                    scrollHeight,
                    clientHeight,
                    scrollWidth,
                    clientWidth,
                } as any);
                const comp =
                    this.getCompensation({
                        scrollHeight,
                        clientHeight,
                        scrollWidth,
                        clientWidth,
                    } as any) || view;

                return {scrollHeight, clientHeight, scrollWidth, clientWidth, view, comp};
            }),
            distinctUntilChanged(
                (a, b) =>
                    a.clientHeight === b.clientHeight &&
                    a.clientWidth === b.clientWidth &&
                    a.scrollHeight === b.scrollHeight &&
                    a.scrollWidth === b.scrollWidth &&
                    a.view === b.view &&
                    a.comp === b.comp,
            ),
        );

        const scroll$ = (tuiScrollFrom(el) as any).pipe(
            startWith(null),
            auditTime(0, animationFrameScheduler),
            map<any, ScrollMetrics>(() => ({
                scrollTop: el.scrollTop,
                scrollLeft: el.scrollLeft,
            })),
            distinctUntilChanged(
                (a: ScrollMetrics, b: ScrollMetrics) =>
                    a.scrollTop === b.scrollTop && a.scrollLeft === b.scrollLeft,
            ),
        );

        return combineLatest([size$, scroll$])
            .pipe(
                map(([size, scrolled]: any[]) => {
                    const dim = {
                        scrollTop: scrolled.scrollTop,
                        scrollLeft: scrolled.scrollLeft,
                        scrollHeight: size.scrollHeight,
                        clientHeight: size.clientHeight,
                        scrollWidth: size.scrollWidth,
                        clientWidth: size.clientWidth,
                    } as any;
                    const thumb = this.clampThumb(dim, size.view, size.comp);

                    return {thumb, view: size.view};
                }),
                distinctUntilChanged(
                    (a, b) =>
                        Math.abs(a.thumb - b.thumb) <= TuiScrollbarDirective.eps &&
                        a.view === b.view,
                ),
            )
            .subscribe(({thumb, view}) => this.applyStyles(thumb, view));
    }

    private clampThumb(dim: any, view: number, comp: number): number {
        const raw = Math.abs(this.getScrolled(dim) * (1 - comp));

        return Math.max(0, Math.min(raw, 1 - view));
    }

    private applyStyles(thumb: number, view: number): void {
        const axis = this.tuiScrollbar;
        const translate =
            axis === 'vertical' ? `0, ${thumb * 100}%` : `${thumb * 100}%, 0`;
        const sizePct = `${view * 100}%`;

        this.style.transform = `translate(${translate})`;

        if (axis === 'vertical') {
            this.style.height = sizePct;
        } else {
            this.style.width = sizePct;
        }
    }

    private getScrolled(dimension: any): number {
        return this.tuiScrollbar === 'vertical'
            ? dimension.scrollTop / (dimension.scrollHeight - dimension.clientHeight)
            : dimension.scrollLeft / (dimension.scrollWidth - dimension.clientWidth);
    }

    private getCompensation(dimension: any): number {
        if (
            ((dimension.clientHeight * dimension.clientHeight) / dimension.scrollHeight >
                MIN_WIDTH &&
                this.tuiScrollbar === 'vertical') ||
            ((dimension.clientWidth * dimension.clientWidth) / dimension.scrollWidth >
                MIN_WIDTH &&
                this.tuiScrollbar === 'horizontal')
        ) {
            return 0;
        }

        return this.tuiScrollbar === 'vertical'
            ? MIN_WIDTH / dimension.clientHeight
            : MIN_WIDTH / dimension.clientWidth;
    }

    // private getThumb(dimension: ComputedDimension, viewValue?: number): number {
    //     const view = viewValue ?? this.getView(dimension);
    //     const comp = this.getCompensation(dimension) || view;

    //     return Math.abs(this.getScrolled(dimension) * (1 - comp));
    // }

    private getView(dimension: any): number {
        return this.tuiScrollbar === 'vertical'
            ? Math.ceil((dimension.clientHeight / dimension.scrollHeight) * 100) / 100
            : Math.ceil((dimension.clientWidth / dimension.scrollWidth) * 100) / 100;
    }
}
