import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValidationError} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-error-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiErrorExample1 {
    protected enabled = false;

    protected error = new TuiValidationError('An error');

    protected get computedError(): TuiValidationError | null {
        return this.enabled ? this.error : null;
    }
}
