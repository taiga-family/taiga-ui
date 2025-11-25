import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButton,
    TuiCell,
    tuiHeightCollapse,
    TuiLabel,
    tuiSlideInTop,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiFloatingContainer,
    TuiInputColor,
    tuiInputColorOptionsProvider,
    TuiSwitch,
} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiFloatingContainer,
        TuiInputColor,
        TuiLabel,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiInputColorOptionsProvider({format: 'hexa', align: 'right'})],
    animations: [tuiSlideInTop, tuiHeightCollapse],
})
export default class Example {
    protected floating = true;
    protected secondAction = false;

    protected background = true;

    protected color = 'rgba(255, 221, 45, 0.8)';
}
