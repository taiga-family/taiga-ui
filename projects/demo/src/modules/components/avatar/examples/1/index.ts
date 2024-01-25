import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFallbackSrcModule} from '@taiga-ui/experimental';
import {TuiAvatarComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-avatar-example-1',
    imports: [TuiAvatarComponent, TuiFallbackSrcModule, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiAvatarExample1 {}
