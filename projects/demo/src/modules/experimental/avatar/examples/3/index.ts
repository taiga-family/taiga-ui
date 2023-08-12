import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-avatar-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiAvatarExample3 {
    readonly names = ['Jason Statham', 'Silvester Stallone', 'Jackie Chan'];
}
