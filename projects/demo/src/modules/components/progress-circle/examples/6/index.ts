import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {of, repeat, takeWhile, timer} from 'rxjs';

@Component({
    selector: 'tui-progress-circle-example-6',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiProgressCircleExample6 {
    private readonly isE2E = inject(TUI_IS_E2E);

    protected readonly max = 100;
    protected readonly value$ = this.isE2E
        ? of(30)
        : timer(300, 200).pipe(
              takeWhile(value => value <= this.max),
              repeat(),
          );
}
