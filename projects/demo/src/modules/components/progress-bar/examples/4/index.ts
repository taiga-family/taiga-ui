import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E} from '@taiga-ui/cdk';
import {map, of, startWith, takeWhile, timer} from 'rxjs';

@Component({
    selector: 'tui-progress-bar-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiProgressBarExample4 {
    private readonly isE2E = inject(TUI_IS_E2E);

    readonly max = 100;
    readonly value$ = this.isE2E
        ? of(30)
        : timer(300, 300).pipe(
              map(i => i + 30),
              startWith(30),
              takeWhile(value => value <= this.max),
          );
}
