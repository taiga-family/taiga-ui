import {Component} from '@angular/core';
import {interval} from 'rxjs';
import {startWith} from 'rxjs/operators';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-let-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiLetExample1 {
    timer$ = interval(1000).pipe(startWith(0));
}
