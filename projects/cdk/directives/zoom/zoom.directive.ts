import {Directive, inject} from '@angular/core';

import {TuiZoomService} from './zoom.service';

@Directive({
    standalone: true,
    selector: '[tuiZoom]',
    outputs: ['tuiZoom'],
    providers: [TuiZoomService],
    host: {
        '[style.touch-action]': '"none"',
    },
})
export class TuiZoom {
    protected readonly tuiZoom = inject(TuiZoomService);
}
