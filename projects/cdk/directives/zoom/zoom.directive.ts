import {Directive, Inject} from '@angular/core';
import {TuiZoomService} from '@taiga-ui/cdk/services';

@Directive({
    selector: `[tuiZoom]`,
    outputs: [`tuiZoom`],
    providers: [TuiZoomService],
    host: {
        '[style.touch-action]': `"none"`,
    },
})
export class TuiZoomDirective {
    constructor(@Inject(TuiZoomService) readonly tuiZoom: TuiZoomService) {}
}
