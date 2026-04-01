import"./chunk-HU6DUUP4.js";var o=`import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_FALSE_HANDLER, TuiItem} from '@taiga-ui/cdk';
import {TuiButton, TuiExpand, TuiLoader} from '@taiga-ui/core';
import {TuiElasticContainer} from '@taiga-ui/layout';
import {map, startWith, timer} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiButton, TuiElasticContainer, TuiExpand, TuiItem, TuiLoader],
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
`;export{o as default};
