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
import {animationFrameScheduler, auditTime, merge} from 'rxjs';

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
        return merge(
            this.resizeObserverService,
            this.mutationObserverService,
            tuiScrollFrom(this.el),
        )
            .pipe(auditTime(0, animationFrameScheduler))
            .subscribe(() => {
                const el = this.el;
                const dimension: ComputedDimension = {
                    scrollTop: el.scrollTop,
                    scrollHeight: el.scrollHeight,
                    clientHeight: el.clientHeight,
                    scrollLeft: el.scrollLeft,
                    scrollWidth: el.scrollWidth,
                    clientWidth: el.clientWidth,
                };

                this.updateThumbStyles(dimension);
            });
    }

    private updateThumbStyles(dimension: ComputedDimension): void {
        const viewValue = this.getView(dimension);
        const thumbValue = this.getThumb(dimension, viewValue);
        const clampedThumb = Math.max(0, Math.min(thumbValue, 1 - viewValue));
        const thumb = `${clampedThumb * 100}%`;
        const view = `${viewValue * 100}%`;

        (this.style as any).willChange = '';

        if (this.tuiScrollbar === 'vertical') {
            this.style.top = thumb;
            this.style.height = view;
        } else {
            this.style.left = thumb;
            (this.style as any).insetInlineStart = thumb;
            this.style.width = view;
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
