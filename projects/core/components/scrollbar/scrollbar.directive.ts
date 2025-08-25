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
import {animationFrameScheduler, auditTime, filter, map, merge, scan} from 'rxjs';

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

interface ScrollbarState {
    dim: ComputedDimension;
    view: number; // proportion of track occupied by thumb
    compensation: number; // min thumb size compensation
    thumb: number; // 0..1 start position
    sizeChanged: boolean;
    scrollChanged: boolean;
    visualChanged: boolean;
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

    protected readonly styleSub = this.eventBasedSubscription;

    @Input()
    public tuiScrollbar: 'horizontal' | 'vertical' = 'vertical';

    private get eventBasedSubscription(): any {
        const el = this.el;
        const source$ = merge(
            this.resizeObserverService,
            this.mutationObserverService,
            tuiScrollFrom(el),
        ).pipe(auditTime(0, animationFrameScheduler));

        return source$
            .pipe(
                map(
                    (): ComputedDimension => ({
                        scrollTop: el.scrollTop,
                        scrollHeight: el.scrollHeight,
                        clientHeight: el.clientHeight,
                        scrollLeft: el.scrollLeft,
                        scrollWidth: el.scrollWidth,
                        clientWidth: el.clientWidth,
                    }),
                ),
                scan<ComputedDimension, ScrollbarState | null>(
                    (
                        prev: ScrollbarState | null,
                        dim: ComputedDimension,
                    ): ScrollbarState | null => {
                        if (!prev) {
                            const view = this.getView(dim);
                            const compensation = this.getCompensation(dim) || view;
                            const thumb = this.clampThumb(dim, view, compensation);

                            return {
                                dim,
                                view,
                                compensation,
                                thumb,
                                sizeChanged: true,
                                scrollChanged: true,
                                visualChanged: true,
                            };
                        }

                        const sizeChanged =
                            prev.dim.clientHeight !== dim.clientHeight ||
                            prev.dim.clientWidth !== dim.clientWidth ||
                            prev.dim.scrollHeight !== dim.scrollHeight ||
                            prev.dim.scrollWidth !== dim.scrollWidth;
                        const scrollChanged =
                            prev.dim.scrollTop !== dim.scrollTop ||
                            prev.dim.scrollLeft !== dim.scrollLeft;

                        if (!sizeChanged && !scrollChanged) {
                            return {
                                ...prev,
                                dim,
                                sizeChanged,
                                scrollChanged,
                                visualChanged: false,
                            };
                        }

                        const view = sizeChanged ? this.getView(dim) : prev.view;
                        const compensation = sizeChanged
                            ? this.getCompensation(dim) || view
                            : prev.compensation;
                        const thumb = this.clampThumb(dim, view, compensation);
                        const visualChanged =
                            sizeChanged ||
                            Math.abs(thumb - prev.thumb) > TuiScrollbarDirective.eps;

                        return {
                            dim,
                            view,
                            compensation,
                            thumb,
                            sizeChanged,
                            scrollChanged,
                            visualChanged,
                        };
                    },
                    null,
                ),
                filter(
                    (state): state is ScrollbarState => !!state && state.visualChanged,
                ),
            )
            .subscribe((state: ScrollbarState) =>
                this.applyStyles(state.thumb, state.view),
            );
    }

    private clampThumb(
        dim: ComputedDimension,
        view: number,
        compensation: number,
    ): number {
        const raw = Math.abs(this.getScrolled(dim) * (1 - compensation));

        return Math.max(0, Math.min(raw, 1 - view));
    }

    private applyStyles(thumb: number, view: number): void {
        const thumbPct = `${thumb * 100}%`;
        const viewPct = `${view * 100}%`;

        (this.style as any).willChange = '';

        if (this.tuiScrollbar === 'vertical') {
            this.style.top = thumbPct;
            this.style.height = viewPct;
        } else {
            this.style.left = thumbPct;
            (this.style as any).insetInlineStart = thumbPct;
            this.style.width = viewPct;
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

    private getThumb(dimension: ComputedDimension, viewValue?: number): number {
        const view = viewValue ?? this.getView(dimension);
        const compensation = this.getCompensation(dimension) || view;

        return Math.abs(this.getScrolled(dimension) * (1 - compensation));
    }

    private getView(dimension: ComputedDimension): number {
        return this.tuiScrollbar === 'vertical'
            ? Math.ceil((dimension.clientHeight / dimension.scrollHeight) * 100) / 100
            : Math.ceil((dimension.clientWidth / dimension.scrollWidth) * 100) / 100;
    }
}
