import {Component} from '@angular/core';
import {tuiIconResolverProvider} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-icon-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiIconResolverProvider(icon =>
            icon.includes('/') ? icon : `/assets/icons/${icon}.svg`,
        ),
    ],
})
export class TuiIconExample2 {}
