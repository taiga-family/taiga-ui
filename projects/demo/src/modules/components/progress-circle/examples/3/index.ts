import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';
import {of, timer} from 'rxjs';
import {map, startWith, takeWhile} from 'rxjs/operators';

@Component({
    selector: `tui-progress-circle-example-3`,
    templateUrl: `./index.html`,
    styleUrls: [`index.less`],
    changeDetection,
    encapsulation,
})
export class TuiProgressCircleExample3 {
    readonly max = 100;
    readonly value$ = this.isCypress
        ? of(30)
        : timer(300, 200).pipe(
              map(i => i + 30),
              startWith(30),
              takeWhile(value => value <= this.max),
          );

    constructor(@Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean) {}
}
