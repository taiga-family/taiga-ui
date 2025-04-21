import {NgFor, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimationPipe, TuiRepeatTimesPipe} from '@taiga-ui/cdk';
import {TuiButton, tuiCrossFade, TuiLabel, tuiSlideInTop, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiElasticContainer,
    TuiFloatingContainer,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgFor,
        NgIf,
        TuiAnimationPipe,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiElasticContainer,
        TuiFloatingContainer,
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
