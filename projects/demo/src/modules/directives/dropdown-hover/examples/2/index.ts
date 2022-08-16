import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-dropdown-hover-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiDropdownHoverExample2 {
    readonly testForm = new FormGroup({
        option: new FormControl(false),
    });

    open = false;
    openSettings = false;

    index = 0;

    onClick(): void {
        this.open = false;
        this.index = 1;
    }
}
