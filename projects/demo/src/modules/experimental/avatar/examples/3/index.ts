import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-avatar-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiAvatarExample3 {
    readonly sizes = ['xxl', 'xl', 'l', 'm', 's', 'xs'] as const;
    readonly names = ['Jason Statham', 'Silvester Stallone', 'Jackie Chan'];
}
