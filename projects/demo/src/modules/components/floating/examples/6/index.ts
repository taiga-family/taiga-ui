import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiButton,
    tuiCrossFadeIn,
    TuiLabel,
    tuiSlideInTop,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiFloating, TuiSwitch} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiFloating,
        TuiLabel,
        TuiRepeatTimes,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiSlideInTop, tuiCrossFadeIn],
})
export default class Example {
    protected floating = false;
    protected action = false;
}
