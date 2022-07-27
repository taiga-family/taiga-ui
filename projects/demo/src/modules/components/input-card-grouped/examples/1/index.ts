import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiCardExpireValidator, tuiCardNumberValidator} from '@taiga-ui/addon-commerce';

@Component({
    selector: `tui-input-card-grouped-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
})
export class TuiInputCardGroupedExample1 {
    readonly control = new FormControl(null, [
        tuiCardNumberValidator,
        tuiCardExpireValidator,
    ]);

    get card(): string | null {
        const value = this.control.value ? this.control.value.card : ``;

        if (value.length < 7) {
            return null;
        }

        switch (value.charAt(0)) {
            case `0`:
            case `1`:
            case `2`:
                return `https://ng-web-apis.github.io/dist/assets/images/common.svg`;
            case `3`:
            case `4`:
            case `5`:
                return `https://ng-web-apis.github.io/dist/assets/images/geolocation.svg`;
            case `6`:
            case `7`:
                return `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`;
            case `8`:
            case `9`:
            default:
                return `https://ng-web-apis.github.io/dist/assets/images/payment-request.svg`;
        }
    }
}
