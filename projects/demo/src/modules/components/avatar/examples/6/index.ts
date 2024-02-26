import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFadeModule, TuiFallbackSrcModule} from '@taiga-ui/experimental';
import {TuiAvatarComponent, TuiAvatarLabeledComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-avatar-example-6',
    imports: [
        AsyncPipe,
        TuiFallbackSrcModule,
        TuiAvatarLabeledComponent,
        TuiAvatarComponent,
        TuiFadeModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiAvatarExample6 {}
