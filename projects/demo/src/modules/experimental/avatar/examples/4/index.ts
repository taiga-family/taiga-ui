import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';

@Component({
    selector: 'tui-avatar-example-4',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiAvatarExample4 {
    readonly names = ['Jason Statham', 'Silvester Stallone', 'Jackie Chan'];
    readonly sizes: ReadonlyArray<TuiSizeXXL | TuiSizeXXS> = [
        'xxl',
        'xl',
        'l',
        'm',
        's',
        'xs',
        'xxs',
    ];
}
