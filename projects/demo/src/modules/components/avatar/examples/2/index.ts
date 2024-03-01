import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoColorModule} from '@taiga-ui/experimental';
import {TuiAvatarComponent, TuiFadeDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-avatar-example-2',
    imports: [TuiAvatarComponent, TuiAutoColorModule, TuiFadeDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiAvatarExample2 {}
