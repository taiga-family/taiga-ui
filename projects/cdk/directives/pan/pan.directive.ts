import {Directive, Inject} from '@angular/core';
import {TuiPanService} from '@taiga-ui/cdk/services';

// @dynamic
@Directive({
    selector: '[tuiPan]',
    outputs: ['tuiPan'],
    providers: [TuiPanService],
})
export class TuiPanDirective {
    constructor(@Inject(TuiPanService) readonly tuiPan: TuiPanService) {}
}
