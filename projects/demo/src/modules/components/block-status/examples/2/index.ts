import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBreakpointService, TuiSizeL} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-block-status-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiBlockStatusExample2 {
    buttonSize$: Observable<TuiSizeL> = this.breakpointService$.pipe(
        map(breakpoint => (breakpoint === 'mobile' ? 'm' : 'l')),
    );

    constructor(
        @Inject(TuiBreakpointService) readonly breakpointService$: TuiBreakpointService,
    ) {}
}
