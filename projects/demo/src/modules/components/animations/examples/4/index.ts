import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure} from '@taiga-ui/cdk';
import type {TuiDurationOptions} from '@taiga-ui/core';
import {tuiScaleIn, TuiSvgComponent} from '@taiga-ui/core';

import {AnimationState} from '../../state';

@Component({
    standalone: true,
    imports: [TuiSvgComponent, NgIf, NgForOf, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiScaleIn],
})
export default class ExampleComponent {
    protected speed = inject(AnimationState);

    protected readonly todoTasks = [
        {title: 'Install Angular', completed: true},
        {title: 'Install Taiga UI', completed: false},
        {title: 'Look into "Getting Started"', completed: false},
    ];

    @tuiPure
    protected getAnimation(duration: number): TuiDurationOptions {
        return {value: '', params: {duration}};
    }
}
