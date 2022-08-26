import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-push-example-3`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiPushExample3 {
    open = false;

    toggle(open: boolean): void {
        this.open = open;
    }
}
