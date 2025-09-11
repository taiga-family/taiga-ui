import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLoader, tuiLoaderOptionsProvider} from '@taiga-ui/core';

@Component({
    imports: [TuiLoader],
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
export default class Example {}
