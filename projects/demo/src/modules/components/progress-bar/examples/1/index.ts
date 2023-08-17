import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {of, timer} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
    selector: 'tui-progress-bar-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiProgressBarExample1 {
    readonly value$ = this.isE2E
        ? of(40)
        : timer(300, 300).pipe(
              map(i => i + 30),
              startWith(30),
          );

    constructor(@Inject(TUI_IS_E2E) private readonly isE2E: boolean) {}
}
