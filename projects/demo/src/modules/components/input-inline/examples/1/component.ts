import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-inline-example-1',
    templateUrl: './template.html',
    styleUrls: ['./style.less'],
    encapsulation,
    changeDetection,
})
export class TuiInputInlineExample1 {
    protected testForm = new FormGroup({
        testValue1: new FormControl('Hello 1'),
        testValue2: new FormControl('Hello 2'),
        testValue3: new FormControl('Hello 3'),
        testValue4: new FormControl(''),
    });

    public get toggleContent(): string {
        return this.testForm.disabled ? 'enable (allow editing)' : 'disable';
    }

    public get input4Empty(): boolean {
        return this.testForm.get('testValue4')!.value === '';
    }

    public onToggleClick(): void {
        if (this.testForm.disabled) {
            this.testForm.enable();
        } else {
            this.testForm.disable();
        }
    }
}
