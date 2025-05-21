import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiTime} from '@taiga-ui/cdk';
import {
    TuiInputTimeModule,
    tuiInputTimeOptionsProvider,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputTimeModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputTimeOptionsProvider({
            mode: 'HH:MM',
            maxValues: {HH: 47, MM: 59, SS: 59, MS: 999},
        }),
    ],
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl<TuiTime | null>(null),
    });
}
