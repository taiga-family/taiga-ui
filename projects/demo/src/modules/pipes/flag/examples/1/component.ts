import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';

@Component({
    selector: `tui-flag-example1`,
    templateUrl: `./template.html`,
    changeDetection,
    encapsulation,
})
export class TuiFlagExample1 {
    readonly countryIsoCode = TuiCountryIsoCode.AE;
}
