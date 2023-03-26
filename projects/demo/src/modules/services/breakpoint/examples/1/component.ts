import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBreakpointService} from '@taiga-ui/core';

@Component({
    selector: `tui-breakpoint-example`,
    templateUrl: `./template.html`,
    styleUrls: [`./style.less`],
    changeDetection,
    encapsulation,
    providers: [TuiBreakpointService],
})
export class TuiBreakpointExample {
    constructor(
        @Inject(TuiBreakpointService)
        readonly breakpoint$: TuiBreakpointService,
    ) {}
}
