import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiComponentPipe, TuiExamplePipe} from '@demo/utils';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLabelModule} from '@taiga-ui/core';
import {TuiSliderModule} from '@taiga-ui/kit';

import {AnimationState} from './state';

@Component({
    standalone: true,
    imports: [
        TuiAddonDocModule,
        TuiLabelModule,
        TuiSliderModule,
        FormsModule,
        NgForOf,
        TuiExamplePipe,
        TuiComponentPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [AnimationState],
})
export default class PageComponent {
    protected speed = inject(AnimationState);
    protected readonly speedTicksLabels: number[] = [0, 600, 1200, 1800, 2400, 3000];
}
