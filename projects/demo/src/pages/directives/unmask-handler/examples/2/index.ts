import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoOptions} from '@maskito/core';
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import {TuiButton, TuiInput, TuiTextfield} from '@taiga-ui/core';
import {TuiUnmaskHandler} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        MaskitoDirective,
        TuiButton,
        TuiTextfield,
        TuiInput,
        TuiUnmaskHandler,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl('', {nonNullable: true});

    protected readonly options: MaskitoOptions = maskitoDateOptionsGenerator({
        mode: 'dd/mm/yyyy',
        separator: '/',
    });

    protected readonly unmask = (value: string): string => value.replace(/\//g, '');

    protected patch(): void {
        this.control.patchValue('01012000');
    }
}
