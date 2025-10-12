import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiRepeatTimesPipe} from '@taiga-ui/cdk';
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
        TuiDemo,
        TuiFloatingContainer,
        TuiLabel,
        TuiRepeatTimesPipe,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
    animations: [tuiSlideInTop, tuiHeightCollapse],
})
export default class Example {
    protected floating = true;

    protected secondAction = false;

    protected readonly examples = [
        'Two actions',
        'Inside SheetDialog',
        'Action and label/button',
        'Custom content',
        'Custom background color',
        'Primary button change',
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
