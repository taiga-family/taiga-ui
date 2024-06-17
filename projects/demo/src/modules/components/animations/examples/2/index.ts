import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure} from '@taiga-ui/cdk';
import type {TuiDurationOptions} from '@taiga-ui/core';
import {TuiButtonDirective, tuiWidthCollapse} from '@taiga-ui/core';

import {AnimationState} from '../../state';

@Component({
    standalone: true,
    imports: [TuiButtonDirective, NgIf, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiWidthCollapse],
})
export default class Example {
    protected speed = inject(AnimationState);
    protected isOpen = true;

    @tuiPure
    protected getAnimation(duration: number): TuiDurationOptions {
        return {value: '', params: {duration}};
    }
}
