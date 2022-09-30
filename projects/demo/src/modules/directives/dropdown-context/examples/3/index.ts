import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-dropdown-context-example-3`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiDropdownContextExample3 {
    testForm = new FormGroup({
        reportText: new FormControl(`Misspell HERE!`),
    });

    report(): void {
        console.info(this.testForm.value);
    }
}
