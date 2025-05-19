import {Directive, ElementRef, inject, INJECTOR, Injector, Input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    MutationObserverService,
    provideMutationObserverInit,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiScrollFrom, tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    merge,
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
    private readonly el = inject(TUI_SCROLL_REF).nativeElement;
    private readonly style = tuiInjectElement().style;
    private readonly injector = inject(INJECTOR);

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
                // childList: true,
                // characterData: true,
                // subtree: true,

                // attributes: true,
                // attributeFilter: ['style', 'class'],

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

    protected readonly styleSub = merge(
        this.resizeObserverService.pipe(
            filter(([entry]) => !!entry),
            map(([entry]) => ({
                clientHeight: entry!.contentRect.height,
                clientWidth: entry!.contentRect.width,
            })),
            debounceTime(100),
        ),
        this.mutationObserverService.pipe(
            map(() => ({
                scrollHeight: this.el.scrollHeight,
                scrollWidth: this.el.scrollWidth,
                clientHeight: this.el.clientHeight,
                clientWidth: this.el.clientWidth,
            })),
            debounceTime(100),
        ),
        tuiScrollFrom(this.el).pipe(
            throttleTime(16, undefined, {trailing: true}),
            map(() => ({
                scrollTop: this.el.scrollTop,
                scrollLeft: this.el.scrollLeft,
            })),
        ),
    )
        .pipe(
            scan((prev, current) => ({...prev, ...current}), {
                clientHeight: 0,
                clientWidth: 0,
                scrollHeight: 0,
                scrollWidth: 0,
                scrollTop: 0,
                scrollLeft: 0,
            }),
            distinctUntilChanged(
                (a, b) =>
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
            // eslint-disable-next-line
            console.log('[dimension]', dimension);

            this.updateThumbStyles(dimension);
        });

    @Input()
    public tuiScrollbar: 'horizontal' | 'vertical' = 'vertical';

    private updateThumbStyles(dimension: ComputedDimension): void {
        const thumb = `${this.getThumb(dimension) * 100}%`;
        const view = `${this.getView(dimension) * 100}%`;

        if (this.tuiScrollbar === 'vertical') {
            this.style.top = thumb;
            this.style.height = view;
        } else {
            this.style.left = thumb;
            this.style.insetInlineStart = thumb;
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
