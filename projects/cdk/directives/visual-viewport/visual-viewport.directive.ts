import {Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ViewportService} from '@ng-web-apis/screen-orientation';
import {tuiInjectElement, tuiPx} from '@taiga-ui/cdk/utils';

@Directive({
    standalone: true,
    selector: '[tuiVisualViewport]',
})
export class TuiVisualViewport {
    private readonly style = tuiInjectElement().style;

    protected readonly $ = inject(ViewportService)
        .pipe(takeUntilDestroyed())
        .subscribe(({offsetLeft, offsetTop, height, width, scale}) => {
            this.style.setProperty('--tui-viewport-x', tuiPx(offsetLeft));
            this.style.setProperty('--tui-viewport-y', tuiPx(offsetTop));
            this.style.setProperty('--tui-viewport-height', tuiPx(height));
            this.style.setProperty('--tui-viewport-width', tuiPx(width));
            this.style.setProperty('--tui-viewport-scale', String(scale));
        });
}
