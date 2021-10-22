import {Directive, Inject} from '@angular/core';
import {TuiDestroyService, TuiPanService} from '@taiga-ui/cdk/services';

// @dynamic
@Directive({
    selector: '[tuiPan]',
    outputs: ['tuiPan'],
    providers: [TuiDestroyService, TuiPanService],
})
export class TuiPanDirective {
    constructor(@Inject(TuiPanService) readonly tuiPan: TuiPanService) {}
}
