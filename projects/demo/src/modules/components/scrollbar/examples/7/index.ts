import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiScrollbarOptionsProvider} from '@taiga-ui/core';

@Component({
    selector: 'tui-scrollbar-example-7',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiScrollbarOptionsProvider({
            mode: 'hover',
        }),
    ],
})
export class TuiScrollbarExample7Component {}
