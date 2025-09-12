import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBreakpointService} from '@taiga-ui/core';

@Component({
    imports: [AsyncPipe, NgIf],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly breakpoint$ = inject(TuiBreakpointService);
}
