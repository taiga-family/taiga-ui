import {Component, HostBinding} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiSwipeEvent} from '@taiga-ui/cdk';
import {TuiSwipe} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [TuiSwipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    @HostBinding('class')
    protected swiped = 'default';

    protected onSwipe(swipe: TuiSwipeEvent): void {
        this.swiped = swipe.direction;
    }
}
