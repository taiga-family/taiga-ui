import {Directive, Inject} from '@angular/core';
import {TuiPanService} from '@taiga-ui/cdk/services';

@Directive({
    selector: `[tuiPan]`,
    outputs: [`tuiPan`],
    providers: [TuiPanService],
})
export class TuiPanDirective {
    constructor(@Inject(TuiPanService) readonly tuiPan: TuiPanService) {}
}
