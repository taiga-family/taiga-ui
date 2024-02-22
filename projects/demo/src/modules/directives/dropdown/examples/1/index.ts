import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-dropdown-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiDropdownExample1 {
    protected open = false;

    public onClick(): void {
        this.open = !this.open;
    }

    public onObscured(obscured: boolean): void {
        if (obscured) {
            this.open = false;
        }
    }

    public onActiveZone(active: boolean): void {
        this.open = active && this.open;
    }
}
