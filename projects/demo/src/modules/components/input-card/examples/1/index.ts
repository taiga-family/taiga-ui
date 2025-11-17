import {JsonPipe} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    tuiCreateLuhnValidator,
    TuiInputCard,
    TuiInputCVC,
    TuiInputExpire,
} from '@taiga-ui/addon-commerce';
import {
    TuiError,
    TuiNotificationService,
    TuiTextfield,
    tuiTextfieldOptionsProvider,
} from '@taiga-ui/core';

@Component({
    imports: [
        JsonPipe,
        ReactiveFormsModule,
        TuiError,
        TuiInputCard,
        TuiInputCVC,
        TuiInputExpire,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiTextfieldOptionsProvider({cleaner: signal(true)})],
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);

    protected readonly form = new FormGroup({
        card: new FormControl('', tuiCreateLuhnValidator('Card number is invalid')),
        expire: new FormControl(''),
        cvc: new FormControl(''),
    });

    protected onBinChange(bin: string | null): void {
        this.alerts.open(String(bin), {label: '(binChange)'}).subscribe();
    }
}
