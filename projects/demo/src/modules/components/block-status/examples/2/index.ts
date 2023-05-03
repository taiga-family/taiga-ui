import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBreakpointService, TuiSizeL} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-block-status-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiBlockStatusExample2 {
    size$: Observable<TuiSizeL> = this.breakpointService.pipe(
        map(key => (key === 'mobile' ? 'm' : 'l')),
    );

    constructor(
        @Inject(TuiBreakpointService) readonly breakpointService: TuiBreakpointService,
    ) {}
}
