import {Component} from '@angular/core';
import {tuiLoaderOptionsProvider} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-loader-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiLoaderOptionsProvider({size: 'xl'})],
})
export class TuiLoaderExample5 {}
