import {Directive, ElementRef, inject, INJECTOR, Injector, Input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WA_ANIMATION_FRAME} from '@ng-web-apis/common';
import {
    MutationObserverService,
    provideMutationObserverInit,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {
    tuiScrollFrom,
    tuiZonefree,
    tuiZonefreeScheduler,
} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {
    debounceTime,
    distinctUntilChanged,
    EMPTY,
    map,
    merge,
    type Observable,
    scan,
    throttleTime,
} from 'rxjs';

import {TuiScrollbarService} from './scrollbar.service';

const MIN_WIDTH = 24;

interface ComputedDimension {
    scrollTop: number;
    scrollHeight: number;
    clientHeight: number;
    scrollLeft: number;
    scrollWidth: number;
    clientWidth: number;
}

@Directive({
    standalone: true,
    selector: '[tuiScrollbar]',
    providers: [TuiScrollbarService],
})
export class TuiScrollbarDirective {
    private static readonly initialDimensions: ComputedDimension = {
        clientHeight: 0,
        clientWidth: 0,
        scrollHeight: 0,
        scrollWidth: 0,
        scrollTop: 0,
        scrollLeft: 0,
    };

    private readonly el = inject(TUI_SCROLL_REF).nativeElement;
    private readonly style = tuiInjectElement().style;
    private readonly injector = inject(INJECTOR);

    // Runtime-tunable flags via sessionStorage for perf experiments

    private readonly perfEnabled = false;

    private readonly transformEnabled =
        typeof window !== 'undefined' &&
        sessionStorage.getItem('tui-scrollbar-transform') === '1';

    private readonly debounceMs = Number(
        (typeof window !== 'undefined' &&
            sessionStorage.getItem('tui-scrollbar-debounce')) ??
            '50',
    );

    private readonly throttleMs = Number(
        (typeof window !== 'undefined' &&
            sessionStorage.getItem('tui-scrollbar-throttle')) ??
            '16',
    );

    private readonly mutationEnabled =
        typeof window === 'undefined' ||
        sessionStorage.getItem('tui-scrollbar-no-mutation') !== '1';

    private readonly useRafMode =
        typeof window !== 'undefined' &&
        sessionStorage.getItem('tui-scrollbar-raf') === '1';

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

    private readonly mutationObserverService = Injector.create({
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
    }).get(MutationObserverService);

    // Subscriptions should be declared before decorated public fields (lint order)
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

    protected readonly styleSub = this.useRafMode
        ? this.rafBasedSubscription
        : this.eventBasedSubscription;

    @Input()
    public tuiScrollbar: 'horizontal' | 'vertical' = 'vertical';

    // Original RAF-based implementation for baseline comparison
    private get rafBasedSubscription(): any {
        return merge(
            inject(WA_ANIMATION_FRAME).pipe(
                throttleTime(this.throttleMs, tuiZonefreeScheduler()),
            ),
            tuiScrollFrom(this.el),
        )
            .pipe(tuiZonefree(), takeUntilDestroyed())
            .subscribe(() => {
                const t0 = this.perfEnabled ? performance.now() : 0;

                const dimension: ComputedDimension = {
                    scrollTop: this.el.scrollTop,
                    scrollHeight: this.el.scrollHeight,
                    clientHeight: this.el.clientHeight,
                    scrollLeft: this.el.scrollLeft,
                    scrollWidth: this.el.scrollWidth,
                    clientWidth: this.el.clientWidth,
                };

                const thumb = `${(this.getThumb(dimension) * 100).toFixed(2)}%`;
                const view = `${(this.getView(dimension) * 100).toFixed(2)}%`;

                if (this.tuiScrollbar === 'vertical') {
                    this.style.top = thumb;
                    this.style.height = view;
                } else {
                    this.style.left = thumb;
                    (this.style as any).insetInlineStart = thumb;
                    this.style.width = view;
                }

                if (this.perfEnabled) {
                    const dt = performance.now() - t0;
                    const w = window as unknown as {
                        __tuiScrollbarPerf?: {updates: number; totalMs: number};
                    };

                    if (!w.__tuiScrollbarPerf) {
                        w.__tuiScrollbarPerf = {updates: 0, totalMs: 0};
                    }

                    w.__tuiScrollbarPerf.updates += 1;
                    w.__tuiScrollbarPerf.totalMs += dt;
                }
            });
    }

    // Event-driven implementation for optimization comparison
    private get eventBasedSubscription(): any {
        return (
            merge(
                // Dimension changes (size/content) - moderate debounce for performance
                this.resizeObserverService.pipe(
                    map(() => ({
                        clientHeight: this.el.clientHeight,
                        clientWidth: this.el.clientWidth,
                        scrollHeight: this.el.scrollHeight,
                        scrollWidth: this.el.scrollWidth,
                    })),
                    debounceTime(this.debounceMs),
                ),
                this.mutationEnabled
                    ? this.mutationObserverService.pipe(
                          map(() => ({
                              scrollHeight: this.el.scrollHeight,
                              scrollWidth: this.el.scrollWidth,
                              clientHeight: this.el.clientHeight,
                              clientWidth: this.el.clientWidth,
                          })),
                          debounceTime(this.debounceMs),
                      )
                    : (EMPTY as any),
                // Scroll position changes - immediate response with light throttling
                tuiScrollFrom(this.el).pipe(
                    throttleTime(this.throttleMs, undefined, {trailing: true}),
                    map(() => ({
                        scrollTop: this.el.scrollTop,
                        scrollLeft: this.el.scrollLeft,
                        // Also update dimensions on scroll to ensure freshness
                        clientHeight: this.el.clientHeight,
                        clientWidth: this.el.clientWidth,
                        scrollHeight: this.el.scrollHeight,
                        scrollWidth: this.el.scrollWidth,
                    })),
                ),
            ) as Observable<Partial<ComputedDimension>>
        )
            .pipe(
                scan((prev: ComputedDimension, current: Partial<ComputedDimension>) => {
                    const next = {...prev, ...current};

                    return next;
                }, TuiScrollbarDirective.initialDimensions),
                distinctUntilChanged(
                    (a: ComputedDimension, b: ComputedDimension) =>
                        a.scrollTop === b.scrollTop &&
                        a.scrollLeft === b.scrollLeft &&
                        a.clientHeight === b.clientHeight &&
                        a.clientWidth === b.clientWidth &&
                        a.scrollHeight === b.scrollHeight &&
                        a.scrollWidth === b.scrollWidth,
                ),
                tuiZonefree(),
                takeUntilDestroyed(),
            )
            .subscribe((dimension) => {
                const t0 = this.perfEnabled ? performance.now() : 0;

                this.updateThumbStyles(dimension);

                if (this.perfEnabled) {
                    const dt = performance.now() - t0;
                    const w = window as unknown as {
                        __tuiScrollbarPerf?: {updates: number; totalMs: number};
                    };

                    if (!w.__tuiScrollbarPerf) {
                        w.__tuiScrollbarPerf = {updates: 0, totalMs: 0};
                    }

                    w.__tuiScrollbarPerf.updates += 1;
                    w.__tuiScrollbarPerf.totalMs += dt;
                }
            });
    }

    private updateThumbStyles(dimension: ComputedDimension): void {
        const thumbValue = this.getThumb(dimension);
        const viewValue = this.getView(dimension);
        // Clamp to avoid overflow beyond the track due to rounding
        const clampedThumb = Math.max(0, Math.min(thumbValue, 1 - viewValue));

        if (this.transformEnabled) {
            // Prefer GPU-friendly transforms to avoid layout writes on scroll
            (this.style as any).willChange = 'transform';

            if (this.tuiScrollbar === 'vertical') {
                this.style.transform = `translateY(${clampedThumb * 100}%) scaleY(${viewValue})`;
                this.style.top = '';
                this.style.height = '';
            } else {
                this.style.transform = `translateX(${clampedThumb * 100}%) scaleX(${viewValue})`;
                this.style.left = '';
                (this.style as any).insetInlineStart = '';
                this.style.width = '';
            }
        } else {
            // Fallback to top/left + size updates
            (this.style as any).willChange = '';
            const thumb = `${(clampedThumb * 100).toFixed(2)}%`;
            const view = `${(viewValue * 100).toFixed(2)}%`;

            if (this.tuiScrollbar === 'vertical') {
                this.style.top = thumb;
                this.style.height = view;
                this.style.transform = '';
            } else {
                this.style.left = thumb;
                (this.style as any).insetInlineStart = thumb;
                this.style.width = view;
                this.style.transform = '';
            }
        }
    }

    private getScrolled(dimension: ComputedDimension): number {
        return this.tuiScrollbar === 'vertical'
            ? dimension.scrollTop / (dimension.scrollHeight - dimension.clientHeight)
            : dimension.scrollLeft / (dimension.scrollWidth - dimension.clientWidth);
    }

    private getCompensation(dimension: ComputedDimension): number {
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

    private getThumb(dimension: ComputedDimension): number {
        const compensation = this.getCompensation(dimension) || this.getView(dimension);

        return Math.abs(this.getScrolled(dimension) * (1 - compensation));
    }

    private getView(dimension: ComputedDimension): number {
        return this.tuiScrollbar === 'vertical'
            ? Math.ceil((dimension.clientHeight / dimension.scrollHeight) * 100) / 100
            : Math.ceil((dimension.clientWidth / dimension.scrollWidth) * 100) / 100;
    }
}
