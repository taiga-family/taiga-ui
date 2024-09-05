import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiLabel, TuiOption, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiChip,
    TuiSkeleton,
    TuiStep,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiLabel,
        TuiSwitch,
        FormsModule,
        TuiAvatar,
        TuiSkeleton,
        TuiButton,
        TuiChip,
        TuiBadge,
        TuiCardLarge,
        TuiSurface,
        TuiHeader,
        TuiTitle,
        TuiOption,
        TuiStep,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected skeleton = false;
}
