import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce';

@Component({
    selector: `tui-card-example-3`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiCardExample3 {
    readonly paymentSystem: TuiPaymentSystem = `mir`;
    readonly brandLogo = `https://ng-web-apis.github.io/dist/assets/images/web-api.svg`;
}
