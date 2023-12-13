import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-input-inline-example-1`,
    templateUrl: `./template.html`,
    styleUrls: [`./style.less`],
    encapsulation,
    changeDetection,
})
export class TuiInputInlineExample1 {
    testForm = new UntypedFormGroup({
        testValue1: new UntypedFormControl(`Hello 1`),
        testValue2: new UntypedFormControl(`Hello 2`),
        testValue3: new UntypedFormControl(`Hello 3`),
        testValue4: new UntypedFormControl(``),
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
