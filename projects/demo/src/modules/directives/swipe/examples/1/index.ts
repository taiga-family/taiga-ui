import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSwipe, type TuiSwipeEvent} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [TuiSwipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    host: {
        '[class]': 'swiped',
    },
})
export default class Example {
    protected swiped = 'default';

    protected onSwipe(swipe: TuiSwipeEvent): void {
        this.swiped = swipe.direction;
    }
}
