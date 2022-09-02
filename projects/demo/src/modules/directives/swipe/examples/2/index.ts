import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiSwipe} from '@taiga-ui/cdk';
import {Subject} from 'rxjs';

@Component({
    selector: `tui-swipe-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiSwipeExample2 {
    readonly open$ = new Subject<boolean>();

    toggle(open: boolean): void {
        this.open$.next(open);
    }

    onSwipe(swipe: TuiSwipe): void {
        console.info(swipe.direction);

        if (swipe.direction === `left`) {
            this.toggle(true);
        }

        if (swipe.direction === `right`) {
            this.toggle(false);
        }
    }
}
