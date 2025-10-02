import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiCell,
    tuiHeightCollapse,
    TuiLabel,
    tuiSlideInTop,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiFloatingContainer, TuiSwitch} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiFloatingContainer,
        TuiLabel,
        TuiRepeatTimes,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiSlideInTop, tuiHeightCollapse],
})
export default class Example {
    protected floating = false;

    protected secondAction = false;

    protected onScroll(el: HTMLElement): void {
        this.floating = el.scrollTop > 100;
        this.secondAction = el.scrollTop > 500;
    }
}
