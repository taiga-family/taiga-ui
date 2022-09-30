import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-input-inline-example-1`,
    templateUrl: `./template.html`,
    styleUrls: [`./style.less`],
    changeDetection,
    encapsulation,
})
export class TuiInputInlineExample1 {
    testForm = new FormGroup({
        testValue1: new FormControl(`Hello 1`),
        testValue2: new FormControl(`Hello 2`),
        testValue3: new FormControl(`Hello 3`),
        testValue4: new FormControl(``),
    });

    get toggleContent(): string {
        return this.testForm.disabled ? `enable (allow editing)` : `disable`;
    }

    get input4Empty(): boolean {
        return this.testForm.get(`testValue4`)!.value === ``;
    }

    onToggleClick(): void {
        if (this.testForm.disabled) {
            this.testForm.enable();
        } else {
            this.testForm.disable();
        }
    }
}
