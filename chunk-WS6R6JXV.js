import"./chunk-HU6DUUP4.js";var r=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    type TuiCard,
    tuiCardExpireValidator,
    tuiCardNumberValidator,
    TuiInputCardGroup,
} from '@taiga-ui/addon-commerce';
import {TuiError} from '@taiga-ui/core';

@Component({
    imports: [ReactiveFormsModule, TuiError, TuiInputCardGroup],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiCard | null>(null, [
        tuiCardNumberValidator,
        tuiCardExpireValidator,
    ]);

    protected get card(): string | null {
        const value = this.control.value?.card || '';

        if (value.length < 7) {
            return null;
        }

        switch (value.charAt(0)) {
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
`;export{r as default};
