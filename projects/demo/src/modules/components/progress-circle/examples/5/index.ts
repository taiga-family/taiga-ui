import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {map, of, repeat, share, takeWhile, timer} from 'rxjs';

@Component({
    selector: 'tui-progress-circle-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiProgressCircleExample5 {
    private readonly isE2E = inject(TUI_IS_E2E);

    protected readonly max = 100;

    protected readonly value$ = this.isE2E
        ? of(30)
        : timer(300, 200).pipe(
              takeWhile(value => value <= this.max),
              share(),
              repeat(),
          );

    protected readonly color$ = this.value$.pipe(
        map(value => {
            if (value < 33) {
                return 'red';
            }

            if (value < 66) {
                return 'yellow';
            }

            return 'green';
        }),
    );
}
