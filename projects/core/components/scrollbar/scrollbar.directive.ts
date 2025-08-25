import {
    computed,
    Directive,
    effect,
    ElementRef,
    inject,
    INJECTOR,
    Injector,
    Input,
    signal,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    MutationObserverService,
    provideMutationObserverInit,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiScrollFrom} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {map, merge} from 'rxjs';

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
    private readonly dimension = signal<ComputedDimension>({
        scrollTop: 0,
        scrollHeight: 0,
        clientHeight: 0,
        scrollLeft: 0,
        scrollWidth: 0,
        clientWidth: 0,
    });

    private readonly view = computed(() => this.getView(this.dimension()));

    private readonly comp = computed(
        () => this.getCompensation(this.dimension()) || this.view(),
    );

    private readonly thumb = computed(() => {
        const dim = this.dimension();
        const raw = Math.abs(this.getScrolled(dim) * (1 - this.comp()));

        return Math.max(0, Math.min(raw, 1 - this.view()));
    });

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

    constructor() {
        effect(() => {
            const thumb = this.thumb();
            const view = this.view();

            this.applyStylesFromSignals(thumb, view);
        });
    }

    private get eventBasedSubscription(): any {
        // Merge streams producing partial patches with minimal property reads per source
        const patches$ = merge(
            this.resizeObserverService.pipe(
                map(() => ({
                    clientHeight: this.el.clientHeight,
                    clientWidth: this.el.clientWidth,
                    scrollHeight: this.el.scrollHeight,
                    scrollWidth: this.el.scrollWidth,
                })),
            ),
            this.mutationObserverService.pipe(
                map(() => ({
                    scrollHeight: this.el.scrollHeight,
                    scrollWidth: this.el.scrollWidth,
                })),
            ),
            tuiScrollFrom(this.el).pipe(
                map(() => ({
                    scrollTop: this.el.scrollTop,
                    scrollLeft: this.el.scrollLeft,
                })),
            ),
        );

        return patches$
            .pipe(takeUntilDestroyed())
            .subscribe((patch) => this.patchDimension(patch));
    }

    private patchDimension(patch: Partial<ComputedDimension>): void {
        const prev = this.dimension();
        const next: ComputedDimension = {...prev, ...patch};

        if (
            prev.scrollTop === next.scrollTop &&
            prev.scrollLeft === next.scrollLeft &&
            prev.scrollHeight === next.scrollHeight &&
            prev.scrollWidth === next.scrollWidth &&
            prev.clientHeight === next.clientHeight &&
            prev.clientWidth === next.clientWidth
        ) {
            return;
        }

        this.dimension.set(next);
    }

    private applyStylesFromSignals(thumb: number, view: number): void {
        if (this.transformEnabled) {
            (this.style as any).willChange = 'transform';

            if (this.tuiScrollbar === 'vertical') {
                this.style.transform = `translateY(${thumb * 100}%) scaleY(${view})`;
                this.style.top = '';
                this.style.height = '';
            } else {
                this.style.transform = `translateX(${thumb * 100}%) scaleX(${view})`;
                this.style.left = '';
                (this.style as any).insetInlineStart = '';
                this.style.width = '';
            }

            return;
        }

        (this.style as any).willChange = '';
        const thumbPct = `${thumb * 100}%`;
        const viewPct = `${view * 100}%`;

        if (this.tuiScrollbar === 'vertical') {
            this.style.top = thumbPct;
            this.style.height = viewPct;
            this.style.transform = '';
        } else {
            this.style.left = thumbPct;
            (this.style as any).insetInlineStart = thumbPct;
            this.style.width = viewPct;
            this.style.transform = '';
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

    private getView(dimension: ComputedDimension): number {
        return this.tuiScrollbar === 'vertical'
            ? Math.ceil((dimension.clientHeight / dimension.scrollHeight) * 100) / 100
            : Math.ceil((dimension.clientWidth / dimension.scrollWidth) * 100) / 100;
    }
}
