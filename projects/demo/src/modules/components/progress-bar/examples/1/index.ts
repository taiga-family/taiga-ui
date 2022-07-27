import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';
import {of, timer} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
    selector: `tui-progress-bar-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiProgressBarExample1 {
    readonly value$ = this.isCypress
        ? of(40)
        : timer(300, 300).pipe(
              map(i => i + 30),
              startWith(30),
          );

    constructor(@Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean) {}
}
