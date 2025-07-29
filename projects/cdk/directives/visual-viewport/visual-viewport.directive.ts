import {Directive, inject, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WA_WINDOW} from '@ng-web-apis/common';
import {ViewportService} from '@ng-web-apis/screen-orientation';
import {tuiPx} from '@taiga-ui/cdk/utils';

@Directive({
    standalone: true,
    selector: '[tuiVisualViewport]',
    host: {
        '[style.--tui-viewport-x]': 'x()',
        '[style.--tui-viewport-y]': 'y()',
        '[style.--tui-viewport-height]': 'height()',
        '[style.--tui-viewport-width]': 'width()',
        '[style.--tui-viewport-scale]': 'scale()',
        '[style.--tui-viewport-vh]': 'vh()',
        '[style.--tui-viewport-vw]': 'vw()',
    },
})
export class TuiVisualViewport {
    private readonly w = inject(WA_WINDOW);
    protected readonly x = signal('');
    protected readonly y = signal('');
    protected readonly height = signal('');
    protected readonly width = signal('');
    protected readonly scale = signal('');
    protected readonly vh = signal('');
    protected readonly vw = signal('');

    protected readonly $ = inject(ViewportService)
        .pipe(takeUntilDestroyed())
        .subscribe(({offsetLeft, offsetTop, height, width, scale}) => {
            this.x.set(tuiPx(offsetLeft));
            this.y.set(tuiPx(offsetTop));
            this.height.set(tuiPx(height));
            this.width.set(tuiPx(width));
            this.scale.set(String(scale));
            this.vh.set(tuiPx(this.w.innerHeight / 100));
            this.vw.set(tuiPx(this.w.innerWidth / 100));
        });
}
