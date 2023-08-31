import {Component, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure} from '@taiga-ui/cdk';
import {
    TuiDurationOptions,
    tuiSlideInBottom,
    tuiSlideInLeft,
    tuiSlideInRight,
    tuiSlideInTop,
} from '@taiga-ui/core';

@Component({
    selector: 'tui-slide-in-example',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
    animations: [tuiSlideInLeft, tuiSlideInTop, tuiSlideInBottom, tuiSlideInRight],
})
export class TuiSlideInExample {
    @Input()
    speed = 0;

    isLeft = false;
    isTop = false;
    isRight = false;
    isBottom = false;

    @tuiPure
    getAnimation(duration: number): TuiDurationOptions {
        return {value: '', params: {duration}};
    }

    reset(): void {
        this.isLeft = false;
        this.isTop = false;
        this.isRight = false;
        this.isBottom = false;
    }
}
