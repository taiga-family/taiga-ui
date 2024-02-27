import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBreakpointService} from '@taiga-ui/core';

@Component({
    selector: 'tui-breakpoint-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiBreakpointExample1 {
    protected readonly breakpoint$ = inject(TuiBreakpointService);
}
