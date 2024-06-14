import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiInputInline} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiInputInline, ReactiveFormsModule, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        testValue1: new FormControl('Hello 1'),
        testValue2: new FormControl('Hello 2'),
        testValue3: new FormControl('Hello 3'),
        testValue4: new FormControl(''),
    });

    protected get toggleContent(): string {
        return this.testForm.disabled ? 'enable (allow editing)' : 'disable';
    }

    protected get input4Empty(): boolean {
        return this.testForm.get('testValue4')!.value === '';
    }

    protected onToggleClick(): void {
        if (this.testForm.disabled) {
            this.testForm.enable();
        } else {
            this.testForm.disable();
        }
    }
}
