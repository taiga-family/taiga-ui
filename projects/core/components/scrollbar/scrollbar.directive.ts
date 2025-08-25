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
import {merge} from 'rxjs';

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

    private readonly transformEnabled = false;
    private lastDim?: ComputedDimension;
    private pending = false;

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
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.requestUpdate());
    }

    private requestUpdate(): void {
        if (this.pending) {
            return;
        }

        this.pending = true;
        queueMicrotask(() => {
            this.pending = false;
            const dim: ComputedDimension = {
                scrollTop: this.el.scrollTop,
                scrollHeight: this.el.scrollHeight,
                clientHeight: this.el.clientHeight,
                scrollLeft: this.el.scrollLeft,
                scrollWidth: this.el.scrollWidth,
                clientWidth: this.el.clientWidth,
            };

            if (this.lastDim && !this.dimChanged(this.lastDim, dim)) {
                return;
            }

            this.lastDim = dim;

            this.updateThumbStyles(dim);
        });
    }

    private dimChanged(a: ComputedDimension, b: ComputedDimension): boolean {
        return (
            a.scrollTop !== b.scrollTop ||
            a.scrollLeft !== b.scrollLeft ||
            a.scrollHeight !== b.scrollHeight ||
            a.scrollWidth !== b.scrollWidth ||
            a.clientHeight !== b.clientHeight ||
            a.clientWidth !== b.clientWidth
        );
    }

    private updateThumbStyles(dimension: ComputedDimension): void {
        const thumbValue = this.getThumb(dimension);
        const viewValue = this.getView(dimension);
        const clampedThumb = Math.max(0, Math.min(thumbValue, 1 - viewValue));

        if (this.transformEnabled) {
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
            (this.style as any).willChange = '';

            const thumb = `${this.getThumb(dimension) * 100}%`;
            const view = `${this.getView(dimension) * 100}%`;

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
