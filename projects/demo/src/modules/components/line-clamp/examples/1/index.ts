import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-line-clamp-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiLineClampExample1 {
    value$ = timer(this.isE2E ? 0 : 4000).pipe(
        map(() => `${'async fake value, '.repeat(10)}end!`),
    );

    constructor(@Inject(TUI_IS_E2E) private readonly isE2E: boolean) {}
}
