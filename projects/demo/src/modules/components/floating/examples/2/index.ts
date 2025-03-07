import {NgIf} from '@angular/common';
import {Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog} from '@taiga-ui/addon-mobile';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiButton,
    tuiHeightCollapse,
    TuiLabel,
    tuiSlideInTop,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiFloating, TuiSwitch} from '@taiga-ui/kit';
import {TuiCell, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiFloating,
        TuiHeader,
        TuiLabel,
        TuiRepeatTimes,
        TuiSheetDialog,
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
    protected floating = true;

    protected open = false;

    protected secondAction = signal(false);
    protected substrate = computed(() => this.secondAction());

    protected onScroll(el: HTMLElement): void {
        this.floating = el.scrollTop > 30;
    }
}
