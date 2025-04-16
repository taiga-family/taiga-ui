import {NgFor, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimationPipe, TuiRepeatTimesPipe} from '@taiga-ui/cdk';
import {
    TuiButton,
    tuiCrossFadeIn,
    TuiLabel,
    tuiSlideInTop,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiElasticContainer, TuiFloating, TuiSwitch} from '@taiga-ui/kit';
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
        TuiFloating,
        TuiLabel,
        TuiRepeatTimesPipe,
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
    protected floating = true;
    protected additional = false;
}
