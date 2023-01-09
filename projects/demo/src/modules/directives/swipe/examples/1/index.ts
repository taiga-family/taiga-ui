import {Component, HostBinding} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSwipe} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-swipe-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSwipeExample1 {
    @HostBinding('class')
    swiped = 'default';

    onSwipe(swipe: TuiSwipe): void {
        this.swiped = swipe.direction;
    }
}
