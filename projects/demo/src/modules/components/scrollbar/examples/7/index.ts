import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollbar, tuiScrollbarOptionsProvider} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiScrollbar],
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
export default class Example {}
