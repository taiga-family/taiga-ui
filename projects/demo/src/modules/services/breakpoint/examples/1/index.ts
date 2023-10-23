import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBreakpointService} from '@taiga-ui/core';

@Component({
    selector: 'tui-breakpoint-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiBreakpointExample1 {
    constructor(
        @Inject(TuiBreakpointService)
        readonly breakpoint$: TuiBreakpointService,
    ) {}
}
