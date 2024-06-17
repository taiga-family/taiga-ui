import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiDataListComponent,
    TuiDataListDirective,
    TuiIcon,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {
    TuiSelectModule,
    TuiTextareaModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiSelectModule,
        TuiTextfieldControllerModule,
        TuiDataListComponent,
        TuiDataListDirective,
        NgIf,
        TuiOptionComponent,
        TuiIcon,
        NgForOf,
        TuiTextareaModule,
        TuiAutoFocus,
        TuiButton,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        'https://twitter.com/marsibarsi',
        'https://twitter.com/waterplea',
    ];

    protected readonly testForm = new FormGroup({
        email: new FormControl<string | null>(null),
        signature: new FormControl(''),
    });

    protected signatureVisible = false;

    protected toggle(): void {
        this.signatureVisible = !this.signatureVisible;
    }
}
