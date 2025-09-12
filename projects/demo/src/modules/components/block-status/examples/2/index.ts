import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBreakpointService, TuiButton, type TuiSizeL} from '@taiga-ui/core';
import {TuiBlockStatus} from '@taiga-ui/layout';
import {map, type Observable} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiBlockStatus, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly breakpointService = inject(TuiBreakpointService);

    protected size$: Observable<TuiSizeL> = this.breakpointService.pipe(
        map((key) => (key === 'mobile' ? 'm' : 'l')),
    );
}
