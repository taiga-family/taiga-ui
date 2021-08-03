import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {WINDOW} from '@ng-web-apis/common';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-dropdown-context-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiDropdownContextExample3 {
    testForm = new FormGroup({
        reportText: new FormControl('Misspell HERE!'),
    });

    constructor(@Inject(WINDOW) private readonly windowRef: Window) {}

    report() {
        console.log({
            reportText: this.testForm.value.reportText,
            selectedText: this.windowRef.getSelection()?.anchorNode?.textContent,
        });
    }
}
