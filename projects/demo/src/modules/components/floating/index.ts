import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiButton,
    tuiHeightCollapse,
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
        TuiDemo,
        TuiFloating,
        TuiLabel,
        TuiRepeatTimes,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    animations: [tuiSlideInTop, tuiHeightCollapse],
})
export default class Example {
    protected floating = true;

    protected secondAction = false;

    protected readonly examples = [
        'Two actions',
        'Inside SheetDialog',
        'Action and label',
        'Custom content',
        'Custom substrate color',
        'Primary button change',
        'With additional content',
    ];

    protected readonly colors = [
        '',
        'transparent',
        'var(--tui-background-elevation-1)',
        'var(--tui-background-base-alt)',
        'red',
        '#8a8db5',
        'rgba(255, 221, 45, 0.8)',
    ];

    protected color = this.colors[0]!;
}
