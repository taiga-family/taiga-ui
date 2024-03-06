import {Component, HostBinding} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiSwipe} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-swipe-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSwipeExample1 {
    @HostBinding('class')
    protected swiped = 'default';

    protected onSwipe(swipe: TuiSwipe): void {
        this.swiped = swipe.direction;
    }
}
