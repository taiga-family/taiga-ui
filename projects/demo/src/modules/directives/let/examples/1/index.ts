import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {interval, startWith} from 'rxjs';

@Component({
    selector: 'tui-let-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiLetExample1 {
    protected timer$ = interval(1000).pipe(startWith(0));
}
