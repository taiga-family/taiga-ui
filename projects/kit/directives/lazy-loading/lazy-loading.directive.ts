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
    selector: `img[loading="lazy"]`,
    providers: [TuiLazyLoadingService, IntersectionObserverService, TuiDestroyService],
})
export class TuiLazyLoadingDirective {
    @Input(`src`)
    set srcSetter(src: SafeResourceUrl | string) {
        this.src = this.supported ? src : null;
        this.src$.next(src);
    }

    @HostBinding(`style.animation`)
    animation = `tuiSkeletonVibe ease-in-out 1s infinite alternate`;

    @HostBinding(`style.background`)
    background = `var(--tui-clear-hover)`;

    @HostBinding(`attr.src`)
    src: SafeResourceUrl | string | null = null;

    constructor(
        @Inject(TuiLazyLoadingService)
        private readonly src$: TuiLazyLoadingService,
        @Inject(ElementRef)
        private readonly elementRef: ElementRef<HTMLImageElement>,
    ) {
        if (!this.supported) {
            this.src$.subscribe(src => {
                this.src = src;
            });
        }
    }

    private get supported(): boolean {
        return `loading` in this.elementRef.nativeElement;
    }

    @HostListener(`load`)
    onLoad(): void {
        this.background = ``;
        this.animation = ``;
    }
}
