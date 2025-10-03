import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollbar, tuiScrollbarOptionsProvider} from '@taiga-ui/core';

@Component({
    imports: [TuiScrollbar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiScrollbarOptionsProvider({
            mode: 'native',
        }),
    ],
})
export default class Example {}
