import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {interval, map} from 'rxjs';

@Component({
    selector: 'tui-dropdown-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiDropdownExample3 {
    protected open = false;

    protected value = 'some data';

    protected showBigText$ = interval(3000).pipe(map(i => !(i % 2)));
}
