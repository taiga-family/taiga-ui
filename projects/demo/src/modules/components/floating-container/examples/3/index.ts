import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimated, TuiAnimatedParent} from '@taiga-ui/cdk';
import {TuiButton, TuiCell, TuiIcon, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiElasticContainer,
    TuiFloatingContainer,
    TuiSwitch,
} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAnimated,
        TuiAnimatedParent,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiElasticContainer,
        TuiFloatingContainer,
        TuiIcon,
        TuiLabel,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected floating = true;
    protected additional = false;
}
