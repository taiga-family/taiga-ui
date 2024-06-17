import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiLoader, TuiTooltip} from '@taiga-ui/core';
import {interval, map, startWith} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiTooltip, TuiLoader, TuiLet, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected isLoading$ = interval(2000).pipe(
        map(i => Boolean(i % 2)),
        startWith(true),
    );
}
