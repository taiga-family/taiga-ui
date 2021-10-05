import {Component} from '@angular/core';
import {TuiPaymentSystem} from '@taiga-ui/addon-commerce';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-card-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiCardExample3 {
    readonly paymentSystem = TuiPaymentSystem.Mir;
    readonly brandLogo = 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';
}
