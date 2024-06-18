import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiInputModule,
        ReactiveFormsModule,
        TuiTextfield,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];

    protected readonly inputModeVariants: readonly string[] = ['text', 'numeric'];

    protected readonly maxLengthVariants: readonly number[] = [10];

    protected readonly typeVariants: readonly string[] = [
        'text',
        'email',
        'password',
        'tel',
        'url',
    ];

    protected type = this.typeVariants[0];

    protected readonly customContentVariants = ['', 'Bell'];

    protected customContentSelected = this.customContentVariants[0];

    protected cleaner = false;
    protected exampleText = '';
    protected labelOutside = false;
    protected size = this.sizeVariants[2];
    protected inputMode = this.inputModeVariants[0];
    protected maxLength: number | null = null;

    protected readonly control = new FormControl('111', Validators.required);
    protected readonly routes = DemoRoute;
}
