import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBreakpointService, TuiSizeL} from '@taiga-ui/core';
import {map, Observable} from 'rxjs';

@Component({
    selector: 'tui-block-status-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiBlockStatusExample2 {
    protected readonly breakpointService = inject(TuiBreakpointService);

    protected size$: Observable<TuiSizeL> = this.breakpointService.pipe(
        map(key => (key === 'mobile' ? 'm' : 'l')),
    );
}
