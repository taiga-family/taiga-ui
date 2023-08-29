import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiLoaderOptionsProvider} from '@taiga-ui/core';

@Component({
    selector: 'tui-loader-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
    providers: [
        tuiLoaderOptionsProvider({
            inheritColor: false,
            overlay: true,
            size: 'l',
        }),
    ],
})
export class TuiLoaderExample4 {}
