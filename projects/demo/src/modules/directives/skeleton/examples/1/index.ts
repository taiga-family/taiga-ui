import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButtonDirective,
    TuiLabelDirective,
    TuiSurfaceDirective,
    TuiTitleDirective,
} from '@taiga-ui/core';
import {
    TuiAvatarComponent,
    TuiBadgeDirective,
    TuiChipDirective,
    TuiSkeletonDirective,
    TuiSwitchComponent,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeaderDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiLabelDirective,
        TuiSwitchComponent,
        FormsModule,
        TuiAvatarComponent,
        TuiSkeletonDirective,
        TuiButtonDirective,
        TuiChipDirective,
        TuiBadgeDirective,
        TuiCardLarge,
        TuiSurfaceDirective,
        TuiHeaderDirective,
        TuiTitleDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected skeleton = false;
}
