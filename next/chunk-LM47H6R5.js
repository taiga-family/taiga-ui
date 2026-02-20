import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiAvatarStack,
    TuiBadge,
    TuiChip,
    TuiProgressCircle,
    TuiSkeleton,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiAvatarStack,
        TuiBadge,
        TuiButton,
        TuiCardLarge,
        TuiChip,
        TuiHeader,
        TuiLabel,
        TuiProgressCircle,
        TuiSkeleton,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected skeleton = false;
}
`;export{t as default};
