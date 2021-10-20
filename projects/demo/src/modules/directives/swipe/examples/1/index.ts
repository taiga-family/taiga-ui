import {Component, HostBinding} from '@angular/core';
import {TuiSwipe} from '@taiga-ui/cdk/interfaces/swipe';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

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

    onSwipe(swipe: TuiSwipe) {
        this.swiped = swipe.direction;
    }
}
