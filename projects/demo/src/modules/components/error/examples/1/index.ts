import {Component} from '@angular/core';
import {TuiValidationError} from '@taiga-ui/cdk';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-error-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiErrorExample1 {
    enabled = false;

    error = new TuiValidationError('An error');

    get computedError(): TuiValidationError | null {
        return this.enabled ? this.error : null;
    }
}
