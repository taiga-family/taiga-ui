import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiButtonClose} from '@taiga-ui/kit';
import {TuiAsideItemDirective, TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAsideItemDirective,
        TuiButton,
        TuiButtonClose,
        TuiCardLarge,
        TuiHeader,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
