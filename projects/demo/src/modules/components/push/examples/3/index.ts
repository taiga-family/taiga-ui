import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-push-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiPushExample3 {
    protected open = false;

    protected toggle(open: boolean): void {
        this.open = open;
    }
}
