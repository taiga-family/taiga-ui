import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-auto-focus-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiAutoFocusExample1 {
    showInput = false;
    model = `Focused after its appearance`;

    onClick(): void {
        this.showInput = true;
    }
}
