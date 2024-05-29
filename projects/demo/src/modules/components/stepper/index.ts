import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiOrientation} from '@taiga-ui/core';
import {TuiStepper} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiStepper],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected activeItemIndex = 0;

    protected readonly examples = ['Basic', 'Vertical', 'Vertical autoscroll'];

    protected readonly orientationVariants: readonly TuiOrientation[] = [
        'horizontal',
        'vertical',
    ];

    protected orientation: TuiOrientation = this.orientationVariants[0];

    protected readonly iconVariants = ['', 'tuiIconClockLarge', 'tuiIconHeart'];

    protected icon = this.iconVariants[0];

    protected readonly stateVariants = ['normal', 'pass', 'error'] as const;

    protected state: 'error' | 'normal' | 'pass' = this.stateVariants[0];
}
