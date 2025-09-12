import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSidebar} from '@taiga-ui/addon-mobile';
import {TuiSwipe, type TuiSwipeEvent} from '@taiga-ui/cdk';
import {Subject} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiSidebar, TuiSwipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly open$ = new Subject<boolean>();

    protected toggle(open: boolean): void {
        this.open$.next(open);
    }

    protected onSwipe(swipe: TuiSwipeEvent): void {
        console.info(swipe.direction);

        if (swipe.direction === 'left') {
            this.toggle(true);
        }

        if (swipe.direction === 'right') {
            this.toggle(false);
        }
    }
}
