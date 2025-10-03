import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimationPipe, TuiRepeatTimesPipe} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiCell,
    tuiCrossFade,
    TuiIcon,
    TuiLabel,
    tuiSlideInTop,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiElasticContainer,
    TuiFloatingContainer,
    TuiSwitch,
} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAnimationPipe,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiElasticContainer,
        TuiFloatingContainer,
        TuiIcon,
        TuiLabel,
        TuiRepeatTimesPipe,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiSlideInTop, tuiCrossFade],
})
export default class Example {
    protected floating = true;
    protected additional = false;
}
