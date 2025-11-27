import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCell, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {TuiAnimated} from '@taiga-ui/cdk';
import {TuiAvatar, TuiFloatingContainer, TuiSwitch} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAnimated,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiFloatingContainer,
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
    protected floating = false;

    protected secondAction = false;

    protected onScroll(el: HTMLElement): void {
        this.floating = el.scrollTop > 100;
        this.secondAction = el.scrollTop > 500;
    }
}
