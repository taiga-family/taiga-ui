import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';
import {TuiAutoColorModule, TuiInitialsModule} from '@taiga-ui/experimental';
import {TuiAvatarComponent, TuiAvatarStackComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-avatar-example-4',
    imports: [
        TuiAvatarStackComponent,
        NgForOf,
        TuiAvatarComponent,
        TuiInitialsModule,
        TuiAutoColorModule,
    ],
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
