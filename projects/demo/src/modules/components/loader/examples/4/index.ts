import {Component} from '@angular/core';
import {tuiLoaderOptionsProvider} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-loader-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiLoaderOptionsProvider({
            size: 'l',
            inheritColor: false,
            overlay: true,
        }),
    ],
})
export class TuiLoaderExample4 {}
