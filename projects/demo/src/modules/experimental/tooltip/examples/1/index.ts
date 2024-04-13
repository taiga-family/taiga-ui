import {Component} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {interval, map, startWith} from 'rxjs';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-tooltip-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [TuiDestroyService],
})
export class TuiTooltipExample1 {
    protected isLoading$ = interval(2000).pipe(
        map(i => Boolean(i % 2)),
        startWith(true),
    );
}
