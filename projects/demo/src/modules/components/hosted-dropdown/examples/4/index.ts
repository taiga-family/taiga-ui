import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-hosted-dropdown-example-4',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiHostedDropdownExample4 {
    open = false;

    index = 0;

    onClick() {
        this.open = false;
        this.index = 1;
    }

    noop() {}
}
