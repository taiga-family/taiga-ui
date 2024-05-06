import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure} from '@taiga-ui/cdk';
import type {TuiDurationOptions} from '@taiga-ui/core';
import {
    TuiButtonDirective,
    tuiSlideInBottom,
    tuiSlideInLeft,
    tuiSlideInRight,
    tuiSlideInTop,
} from '@taiga-ui/core';

import {AnimationState} from '../../state';

@Component({
    standalone: true,
    imports: [NgIf, TuiButtonDirective, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiSlideInLeft, tuiSlideInTop, tuiSlideInBottom, tuiSlideInRight],
})
export default class ExampleComponent {
    protected speed = inject(AnimationState);

    protected isLeft = false;
    protected isTop = false;
    protected isRight = false;
    protected isBottom = false;

    @tuiPure
    protected getAnimation(duration: number): TuiDurationOptions {
        return {value: '', params: {duration}};
    }

    protected reset(): void {
        this.isLeft = false;
        this.isTop = false;
        this.isRight = false;
        this.isBottom = false;
    }
}
