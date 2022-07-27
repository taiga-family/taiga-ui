import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {interval} from 'rxjs';
import {startWith} from 'rxjs/operators';

@Component({
    selector: `tui-let-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiLetExample1 {
    timer$ = interval(1000).pipe(startWith(0));
}
