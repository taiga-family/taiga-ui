import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValidationError} from '@taiga-ui/cdk';

@Component({
    selector: `tui-error-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiErrorExample1 {
    enabled = false;

    error = new TuiValidationError(`An error`);

    get computedError(): TuiValidationError | null {
        return this.enabled ? this.error : null;
    }
}
