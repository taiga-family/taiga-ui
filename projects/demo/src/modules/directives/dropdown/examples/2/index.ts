import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

import {default as avatarUrl} from '!!file-loader!../../../../../assets/images/avatar.jpg';

@Component({
    selector: `tui-dropdown-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiDropdownExample2 {
    open = false;

    avatarUrl = avatarUrl;

    onMouseEnter(): void {
        this.open = true;
    }

    onMouseLeave(): void {
        this.open = false;
    }
}
