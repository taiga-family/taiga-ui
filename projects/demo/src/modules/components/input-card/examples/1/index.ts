import {AsyncPipe, JsonPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    tuiCreateLuhnValidator,
    TuiInputCard,
    tuiInputCardOptionsProvider,
    TuiInputCVC,
    TuiInputExpire,
} from '@taiga-ui/addon-commerce';
import {
    TuiAlertService,
    TuiError,
    TuiTextfield,
    tuiTextfieldOptionsProvider,
} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiTextfield,
        TuiInputCVC,
        TuiInputExpire,
        TuiInputCard,
        TuiError,
        TuiFieldErrorPipe,
        AsyncPipe,
        JsonPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiInputCardOptionsProvider({autocomplete: true}),
        tuiTextfieldOptionsProvider({cleaner: true}),
    ],
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected readonly form = new FormGroup({
        card: new FormControl('', tuiCreateLuhnValidator('Card number is invalid')),
        expire: new FormControl(''),
        cvc: new FormControl(''),
    });

    protected get card(): string | null {
        const value: string | null | undefined = this.form.get('card')?.value;

        if ((value?.length ?? 0) < 7) {
            return null;
        }

        switch (value?.charAt(0)) {
            case '0':
            case '1':
            case '2':
                return 'https://ng-web-apis.github.io/dist/assets/images/common.svg';
            case '3':
            case '4':
            case '5':
                return 'https://ng-web-apis.github.io/dist/assets/images/geolocation.svg';
            case '6':
            case '7':
                return 'https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg';
            case '8':
            case '9':
            default:
                return 'https://ng-web-apis.github.io/dist/assets/images/payment-request.svg';
        }
    }

    protected onBinChange(bin: string | null): void {
        this.alerts.open(String(bin), {label: '(binChange)'}).subscribe();
    }
}
