import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputPhone} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputPhone, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isIos = inject(TUI_IS_IOS);

    public value = '+71234567890';

    protected get pattern(): string | null {
        return this.isIos ? '+[0-9-]{1,20}' : null;
    }
}
