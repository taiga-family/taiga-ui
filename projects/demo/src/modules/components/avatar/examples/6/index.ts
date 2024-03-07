import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFallbackSrcPipe} from '@taiga-ui/core';
import {
    TuiAvatarComponent,
    TuiAvatarLabeledComponent,
    TuiFadeDirective,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-avatar-example-6',
    imports: [
        AsyncPipe,
        TuiFallbackSrcPipe,
        TuiAvatarLabeledComponent,
        TuiAvatarComponent,
        TuiFadeDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiAvatarExample6 {}
