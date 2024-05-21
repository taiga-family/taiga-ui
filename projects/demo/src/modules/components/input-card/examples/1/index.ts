import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiInputCardComponent,
    TuiInputCVCComponent,
    TuiInputExpireComponent,
} from '@taiga-ui/addon-commerce';
import {TuiGroupDirective, TuiPrimitiveTextfieldModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [
        TuiGroupDirective,
        ReactiveFormsModule,
        TuiInputCardComponent,
        TuiInputExpireComponent,
        TuiInputCVCComponent,
        TuiPrimitiveTextfieldModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly form = new FormGroup({
        card: new FormControl(''),
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
}
