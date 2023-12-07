import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-dropdown-context-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiDropdownContextExample3 {
    testForm = new UntypedFormGroup({
        reportText: new UntypedFormControl('Misspell HERE!'),
    });

    report(): void {
        console.info(this.testForm.value);
    }
}
