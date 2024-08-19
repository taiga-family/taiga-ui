import {Directive, inject, Input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {SafeResourceUrl} from '@angular/platform-browser';
import {IntersectionObserverService} from '@ng-web-apis/intersection-observer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

import {TuiLazyLoadingService} from './lazy-loading.service';

@Directive({
    standalone: true,
    selector: 'img[loading="lazy"]',
    providers: [TuiLazyLoadingService, IntersectionObserverService],
    host: {
        '[style.animation]': 'animation',
        '[style.background]': 'background',
        '[attr.src]': 'src',
        '(load)': 'onLoad()',
    },
})
export class TuiImgLazyLoading {
    private readonly el = tuiInjectElement<HTMLImageElement>();
    private readonly src$ = inject(TuiLazyLoadingService);
    protected animation = 'tuiSkeletonVibe ease-in-out 1s infinite alternate';
    protected background = 'var(--tui-background-neutral-2)';
    protected src: SafeResourceUrl | string | null = null;

    constructor() {
        if (this.supported) {
            return;
        }

        this.src$.pipe(takeUntilDestroyed()).subscribe((src) => {
            this.src = src;
        });
    }

    @Input('src')
    public set srcSetter(src: SafeResourceUrl | string) {
        this.src = this.supported ? src : null;
        this.src$.next(src);
    }

    protected onLoad(): void {
        this.background = '';
        this.animation = '';
    }

    private get supported(): boolean {
        return 'loading' in this.el;
    }
}
