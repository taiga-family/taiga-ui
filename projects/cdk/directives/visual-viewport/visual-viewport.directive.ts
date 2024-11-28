import {Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WA_WINDOW} from '@ng-web-apis/common';
import {ViewportService} from '@ng-web-apis/screen-orientation';
import {tuiInjectElement, tuiPx} from '@taiga-ui/cdk/utils';

@Directive({
    standalone: true,
    selector: '[tuiVisualViewport]',
})
export class TuiVisualViewport {
    private readonly w = inject(WA_WINDOW);
    private readonly style = tuiInjectElement().style;

    protected readonly $ = inject(ViewportService)
        .pipe(takeUntilDestroyed())
        .subscribe(({offsetLeft, offsetTop, height, width, scale}) => {
            this.style.setProperty('--tui-viewport-x', tuiPx(offsetLeft));
            this.style.setProperty('--tui-viewport-y', tuiPx(offsetTop));
            this.style.setProperty('--tui-viewport-height', tuiPx(height));
            this.style.setProperty('--tui-viewport-width', tuiPx(width));
            this.style.setProperty('--tui-viewport-scale', String(scale));
            this.style.setProperty('--tui-viewport-vh', tuiPx(this.w.innerHeight / 100));
            this.style.setProperty('--tui-viewport-vw', tuiPx(this.w.innerWidth / 100));
        });
}
