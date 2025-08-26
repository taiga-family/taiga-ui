import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiButton, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiTextfield, TuiInputNumber, TuiButton],
    template: `
        <form [formGroup]="form">
            <h3>updateOn: 'blur' Test</h3>
            <div style="margin-bottom: 16px;">
                <label>Input with updateOn: 'blur':</label>
                <tui-textfield>
                    <input
                        formControlName="blurControl"
                        placeholder="Type a number and blur"
                        tuiInputNumber
                    />
                </tui-textfield>
                <div>Control value: {{ form.controls.blurControl.value }}</div>
                <div>Form touched: {{ form.touched }}</div>
                <div>Form dirty: {{ form.dirty }}</div>
            </div>

            <div style="margin-bottom: 16px;">
                <label>Regular input for comparison:</label>
                <tui-textfield>
                    <input
                        formControlName="regularControl"
                        placeholder="Regular input"
                        tuiInputNumber
                    />
                </tui-textfield>
                <div>Control value: {{ form.controls.regularControl.value }}</div>
            </div>

            <button
                tuiButton
                type="button"
                (click)="reset()"
            >
                Reset Form
            </button>
        </form>
    `,
})
export class Example {
    public readonly form = new FormGroup({
        blurControl: new FormControl(100, {updateOn: 'blur'}),
        regularControl: new FormControl(200),
    });

    public reset(): void {
        this.form.reset({
            blurControl: 100,
            regularControl: 200,
        });
    }
}
