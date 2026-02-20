import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiInputInline} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiButton, TuiInputInline],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected form = new FormGroup({
        testValue1: new FormControl('Hello 1'),
        testValue2: new FormControl('Hello 2'),
        testValue3: new FormControl('Hello 3'),
        testValue4: new FormControl(''),
    });

    protected get toggleContent(): string {
        return this.form.disabled ? 'enable (allow editing)' : 'disable';
    }

    protected get input4Empty(): boolean {
        return this.form.get('testValue4')!.value === '';
    }

    protected onToggleClick(): void {
        if (this.form.disabled) {
            this.form.enable();
        } else {
            this.form.disable();
        }
    }
}
`;export{o as default};
