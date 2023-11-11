import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import {IntersectionObserverService} from '@ng-web-apis/intersection-observer';
import {TuiDestroyService} from '@taiga-ui/cdk';

import {TuiLazyLoadingService} from './lazy-loading.service';

@Directive({
    selector: 'img[loading="lazy"]',
    providers: [TuiLazyLoadingService, IntersectionObserverService, TuiDestroyService],
})
export class TuiLazyLoadingDirective {
    @HostBinding('attr.src')
    private internalSrc: SafeResourceUrl | string | null = null;

    /**
     * @deprecated: use {@link src}
     * @param src
     */
    set srcSetter(src: SafeResourceUrl | string) {
        this.src = src;
    }

    @Input()
    set src(src: SafeResourceUrl | string) {
        this.internalSrc = this.supported ? src : null;
        this.src$.next(src);
    }

    get src(): SafeResourceUrl | string {
        return this.internalSrc ?? '';
    }

    @HostBinding('style.animation')
    animation = 'tuiSkeletonVibe ease-in-out 1s infinite alternate';

    @HostBinding('style.background')
    background = 'var(--tui-clear-hover)';

    constructor(
        @Inject(TuiLazyLoadingService)
        private readonly src$: TuiLazyLoadingService,
        @Inject(ElementRef)
        private readonly el: ElementRef<HTMLImageElement>,
    ) {
        if (!this.supported) {
            this.src$.subscribe(src => {
                this.src = src;
            });
        }
    }

    private get supported(): boolean {
        return 'loading' in this.el.nativeElement;
    }

    @HostListener('load')
    onLoad(): void {
        this.background = '';
        this.animation = '';
    }
}
