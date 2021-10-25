import {Component} from '@angular/core';
import {TuiSwipe} from '@taiga-ui/cdk';
import {Subject} from 'rxjs';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-swipe-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSwipeExample2 {
    readonly open$ = new Subject();

    toggle(open: boolean) {
        this.open$.next(open);
    }

    onSwipe(swipe: TuiSwipe) {
        console.log(swipe.direction);

        if (swipe.direction === 'left') {
            this.toggle(true);
        }

        if (swipe.direction === 'right') {
            this.toggle(false);
        }
    }
}
