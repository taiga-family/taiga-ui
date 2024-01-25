import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatarComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-avatar-example-3',
    imports: [TuiAvatarComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiAvatarExample3 {
    readonly names = ['Jason Statham', 'Silvester Stallone', 'Jackie Chan'];
}
