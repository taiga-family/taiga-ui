import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-auto-focus-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiAutoFocusExample1 {
    protected showInput = false;
    protected model = 'Focused after its appearance';

    protected onClick(): void {
        this.showInput = true;
    }
}
