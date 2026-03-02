import"./chunk-HU6DUUP4.js";var t=`import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSwipe, type TuiSwipeEvent} from '@taiga-ui/cdk';
import {TuiPopup} from '@taiga-ui/core';
import {TuiDrawer} from '@taiga-ui/kit';

@Component({
    imports: [TuiDrawer, TuiPopup, TuiSwipe],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
`;export{t as default};
