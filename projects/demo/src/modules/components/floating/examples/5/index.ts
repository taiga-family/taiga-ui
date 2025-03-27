import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiButton,
    tuiHeightCollapse,
    TuiLabel,
    tuiSlideInTop,
    TuiTextfield,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiFloating, TuiSwitch} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';
import {
    TUI_DEFAULT_INPUT_COLORS,
    tuiColorSelectorOptionsProvider,
    TuiInputColorModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiFloating,
        TuiInputColorModule,
        TuiLabel,
        TuiRepeatTimes,
        TuiSwitch,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiColorSelectorOptionsProvider({selectorMode: false})],
    animations: [tuiSlideInTop, tuiHeightCollapse],
})
export default class Example {
    protected floating = true;
    protected secondAction = false;

    protected substrate = true;

    protected readonly palette = TUI_DEFAULT_INPUT_COLORS;
    protected color = 'rgba(255, 221, 45, 0.8)';
}
