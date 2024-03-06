import {Component, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure} from '@taiga-ui/cdk';
import type {TuiDurationOptions} from '@taiga-ui/core';
import {
    tuiSlideInBottom,
    tuiSlideInLeft,
    tuiSlideInRight,
    tuiSlideInTop,
} from '@taiga-ui/core';

@Component({
    selector: 'tui-slide-in-example',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiSlideInLeft, tuiSlideInTop, tuiSlideInBottom, tuiSlideInRight],
})
export class TuiSlideInExample {
    @Input()
    public speed = 0;

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
