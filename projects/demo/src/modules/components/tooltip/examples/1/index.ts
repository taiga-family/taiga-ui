import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {interval, map, startWith} from 'rxjs';

@Component({
    selector: 'tui-tooltip-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiTooltipExample1 {
    protected isLoading$ = interval(2000).pipe(
        map(i => Boolean(i % 2)),
        startWith(true),
    );
}
