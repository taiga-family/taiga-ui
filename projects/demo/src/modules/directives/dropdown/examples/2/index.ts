import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-dropdown-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiDropdownExample2 {
    open = false;

    avatarUrl = new URL(
        '../../../../../assets/images/avatar.jpg',
        import.meta.url,
    ).toString();

    onMouseEnter(): void {
        this.open = true;
    }

    onMouseLeave(): void {
        this.open = false;
    }
}
