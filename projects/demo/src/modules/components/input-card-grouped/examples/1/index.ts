import {Component} from '@angular/core';
import {AbstractControl, FormControl, ValidationErrors} from '@angular/forms';
import {isCardNumberValid, isExpireValid} from '@taiga-ui/addon-commerce';
import {TuiValidationError} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';

function cardNumberValidator({value}: AbstractControl): ValidationErrors | null {
    return value && value.card && !isCardNumberValid(value.card)
        ? {
              card: new TuiValidationError('Номер карты некорректный'),
          }
        : null;
}

function cardExpireValidator({value}: AbstractControl): ValidationErrors | null {
    return value && value.expire.length === 5 && !isExpireValid(value.expire)
        ? {
              expire: new TuiValidationError('Срок действия истёк'),
          }
        : null;
}

@Component({
    selector: 'tui-input-card-grouped-example-1',
    templateUrl: './index.html',
    changeDetection,
})
export class TuiInputCardGroupedExample1 {
    readonly control = new FormControl(null, [cardNumberValidator, cardExpireValidator]);

    get card(): string | null {
        const value = this.control.value ? this.control.value.card : '';

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
