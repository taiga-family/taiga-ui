import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {ALWAYS_FALSE_HANDLER} from '@taiga-ui/cdk';
import {Subject, timer} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';

@Component({
    selector: 'tui-button-example-4',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiButtonExample4 {
    readonly trigger$ = new Subject();
    readonly loading$ = this.trigger$.pipe(
        switchMap(() =>
            timer(2000).pipe(map(ALWAYS_FALSE_HANDLER), startWith('Loading')),
        ),
    );
}
