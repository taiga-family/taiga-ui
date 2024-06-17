import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValidationError} from '@taiga-ui/cdk';
import {TuiErrorComponent, TuiLabelDirective} from '@taiga-ui/core';
import {TuiSwitchComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiLabelDirective, TuiSwitchComponent, TuiErrorComponent],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected enabled = false;

    protected error = new TuiValidationError('An error');

    protected get computedError(): TuiValidationError | null {
        return this.enabled ? this.error : null;
    }
}
