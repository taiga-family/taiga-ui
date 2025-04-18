import {NgFor, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimesPipe} from '@taiga-ui/cdk';
import {TuiButton, TuiIcon, TuiLabel, tuiSlideInTop, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiFloatingContainer, TuiSwitch} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgFor,
        NgIf,
        TuiAvatar,
        TuiButton,
        TuiCell,
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
    animations: [tuiSlideInTop],
})
export default class Example {
    protected floating = true;
}
