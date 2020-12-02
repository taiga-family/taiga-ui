import {Directive, ElementRef, HostBinding, Inject, Input} from '@angular/core';
import {IntersectionObserverService} from '@ng-web-apis/intersection-observer';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiLazyLoadingService} from './lazy-loading.service';

@Directive({
    selector: 'img[loading="lazy"]',
    providers: [TuiLazyLoadingService, IntersectionObserverService, TuiDestroyService],
    host: {
        '[style.animation]':
            '"tuiSkeletonBackgroundVibe ease-in-out 1s infinite alternate"',
    },
})
export class TuiLazyLoadingDirective {
    @Input('src')
    set srcSetter(src: string) {
        this.src = this.supported ? src : null;
        this.src$.next(src);
    }

    @HostBinding('attr.src')
    src: string | null = null;

    private readonly supported = 'loading' in this.elementRef.nativeElement;

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
}
