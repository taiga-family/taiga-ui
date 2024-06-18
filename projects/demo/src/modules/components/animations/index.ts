import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiSlider} from '@taiga-ui/kit';

import {AnimationState} from './state';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiSlider, FormsModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [AnimationState],
})
export default class Page {
    protected speed = inject(AnimationState);
    protected readonly speedTicksLabels: number[] = [0, 600, 1200, 1800, 2400, 3000];
}
