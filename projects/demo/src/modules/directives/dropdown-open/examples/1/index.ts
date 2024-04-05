import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-dropdown-open-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiDropdownOpenExample1 {
    protected readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

    protected open = false;

    protected onClick(): void {
        this.open = false;
    }
}
