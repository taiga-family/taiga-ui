import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiTime} from '@taiga-ui/cdk';
import {TuiSwitchComponent} from '@taiga-ui/kit';
import {
    TuiInputTimeModule,
    tuiInputTimeOptionsProvider,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiInputTimeModule,
        TuiTextfieldControllerModule,
        TuiSwitchComponent,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputTimeOptionsProvider({
            mode: 'HH:MM',
            maxValues: {HH: 11, MM: 59, SS: 59, MS: 999},
        }),
    ],
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl<TuiTime | null>(null),
        isPm: new FormControl(false),
    });

    protected get postfix(): string {
        return this.testForm.value?.isPm ? 'PM' : 'AM';
    }
}
