import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
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
    readonly testForm = new UntypedFormGroup({
        option: new UntypedFormControl(false),
    });

    open = false;
    openSettings = false;

    index = 0;

    onClick(): void {
        this.open = false;
        this.index = 1;
    }
}
