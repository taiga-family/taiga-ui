import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoColorModule, TuiFadeModule} from '@taiga-ui/experimental';
import {TuiAvatarComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-avatar-example-2',
    imports: [TuiAvatarComponent, TuiAutoColorModule, TuiFadeModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiAvatarExample2 {}
