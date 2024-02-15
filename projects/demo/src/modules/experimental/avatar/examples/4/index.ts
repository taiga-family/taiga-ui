import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';

@Component({
    selector: 'tui-avatar-example-4',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiAvatarExample4 {
    readonly names = ['Jason Statham', 'Silvester Stallone', 'Jackie Chan'];
    readonly sizes: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [
        'xxl',
        'xl',
        'l',
        'm',
        's',
        'xs',
    ];
}
