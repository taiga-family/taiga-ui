import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';

@Component({
    selector: `tui-dropdown-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiDropdownExample2 {
    open = false;

    avatarUrl = assets`/images/avatar.jpg`;

    onMouseEnter(): void {
        this.open = true;
    }

    onMouseLeave(): void {
        this.open = false;
    }
}
