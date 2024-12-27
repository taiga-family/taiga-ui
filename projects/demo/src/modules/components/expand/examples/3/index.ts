import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_FALSE_HANDLER, TuiItem} from '@taiga-ui/cdk';
import {TuiButton, TuiLoader} from '@taiga-ui/core';
import {TuiExpand} from '@taiga-ui/experimental';
import {TuiElasticContainer} from '@taiga-ui/kit';
import {map, startWith, timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgIf,
        TuiButton,
        TuiElasticContainer,
        TuiExpand,
        TuiItem,
        TuiLoader,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly loading$ = timer(2000).pipe(
        map(TUI_FALSE_HANDLER),
        startWith(true),
    );

    protected expanded = false;
}
