import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiIcon, TuiLoader} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';
import {interval, map, startWith} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiIcon, TuiLet, TuiLoader, TuiTooltip],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected isLoading$ = interval(2000).pipe(
        map((i) => Boolean(i % 2)),
        startWith(true),
    );
}
