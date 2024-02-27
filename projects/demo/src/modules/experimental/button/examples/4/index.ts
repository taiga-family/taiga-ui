import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {ALWAYS_FALSE_HANDLER} from '@taiga-ui/cdk';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

@Component({
    selector: 'tui-button-example-4',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiButtonExample4 {
    protected readonly trigger$ = new Subject<void>();
    protected readonly loading$ = this.trigger$.pipe(
        switchMap(() =>
            timer(2000).pipe(map(ALWAYS_FALSE_HANDLER), startWith('Loading')),
        ),
    );
}
