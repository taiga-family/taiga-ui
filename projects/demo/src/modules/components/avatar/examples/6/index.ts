import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {TuiFallbackSrcPipe} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiAvatarLabeledComponent} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        TuiFallbackSrcPipe,
        TuiAvatarLabeledComponent,
        TuiAvatarComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
