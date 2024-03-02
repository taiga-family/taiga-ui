import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    inject,
    Input,
} from '@angular/core';
import {type SafeResourceUrl} from '@angular/platform-browser';
import {IntersectionObserverService} from '@ng-web-apis/intersection-observer';
import {TuiDestroyService} from '@taiga-ui/cdk';

import {TuiLazyLoadingService} from './lazy-loading.service';

@Directive({
    selector: 'img[loading="lazy"]',
    providers: [TuiLazyLoadingService, IntersectionObserverService, TuiDestroyService],
})
export class TuiLazyLoadingDirective {
    private readonly el: HTMLImageElement = inject(ElementRef).nativeElement;
    private readonly src$ = inject(TuiLazyLoadingService);

    @HostBinding('style.animation')
    protected animation = 'tuiSkeletonVibe ease-in-out 1s infinite alternate';

    @HostBinding('style.background')
    protected background = 'var(--tui-clear-hover)';

    @HostBinding('attr.src')
    protected src: SafeResourceUrl | string | null = null;

    constructor() {
        if (!this.supported) {
            this.src$.subscribe(src => {
                this.src = src;
            });
        }
    }

    @Input('src')
    public set srcSetter(src: SafeResourceUrl | string) {
        this.src = this.supported ? src : null;
        this.src$.next(src);
    }

    @HostListener('load')
    protected onLoad(): void {
        this.background = '';
        this.animation = '';
    }

    private get supported(): boolean {
        return 'loading' in this.el;
    }
}
