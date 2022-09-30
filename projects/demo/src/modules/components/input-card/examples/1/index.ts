import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-input-card-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiInputCardExample1 {
    readonly form = new FormGroup({
        card: new FormControl(``),
        expire: new FormControl(``),
        cvc: new FormControl(``),
    });

    get card(): string | null {
        const value: string | null | undefined = this.form.get(`card`)?.value;

        if ((value?.length ?? 0) < 7) {
            return null;
        }

        switch (value?.charAt(0)) {
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
