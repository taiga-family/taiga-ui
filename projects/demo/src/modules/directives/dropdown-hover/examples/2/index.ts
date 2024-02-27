import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-dropdown-hover-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiDropdownHoverExample2 {
    protected readonly testForm = new FormGroup({
        option: new FormControl(false),
    });

    protected open = false;
    protected openSettings = false;

    protected index = 0;

    protected onClick(): void {
        this.open = false;
        this.index = 1;
    }
}
