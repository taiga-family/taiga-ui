import {Directive, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {WA_WINDOW} from '@ng-web-apis/common';
import {ViewportService} from '@ng-web-apis/screen-orientation';

@Directive({
    standalone: true,
    selector: '[tuiVisualViewport]',
    host: {
        '[style.--tui-viewport-x.px]': 'viewport().offsetLeft',
        '[style.--tui-viewport-y.px]': 'viewport().offsetTop',
        '[style.--tui-viewport-height.px]': 'viewport().height',
        '[style.--tui-viewport-width.px]': 'viewport().width',
        '[style.--tui-viewport-scale]': 'viewport().scale',
    },
})
export class TuiVisualViewport {
    protected readonly viewport = toSignal(inject(ViewportService), {
        initialValue: inject(WA_WINDOW).visualViewport,
    });
}
