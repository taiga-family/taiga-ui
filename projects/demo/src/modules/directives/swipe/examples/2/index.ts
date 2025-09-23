import {AsyncPipe} from '@angular/common';
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSwipe, type TuiSwipeEvent} from '@taiga-ui/cdk';
import {TuiPopup} from '@taiga-ui/core';
import {TuiDrawer} from '@taiga-ui/kit';

@Component({
    imports: [AsyncPipe, TuiSwipe, TuiDrawer, TuiPopup],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly open = signal(false);

    protected onSwipe(swipe: TuiSwipeEvent): void {
        console.info(swipe.direction);

        if (swipe.direction === 'left') {
            this.open.set(true);
        }

        if (swipe.direction === 'right') {
            this.open.set(false);
        }
    }
}
