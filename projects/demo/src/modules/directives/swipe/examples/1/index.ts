import {Component, HostBinding} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiSwipe} from '@taiga-ui/cdk';
import {TuiSwipeDirective} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [TuiSwipeDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    @HostBinding('class')
    protected swiped = 'default';

    protected onSwipe(swipe: TuiSwipe): void {
        this.swiped = swipe.direction;
    }
}
