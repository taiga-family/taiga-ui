import"./chunk-HU6DUUP4.js";var o=`import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_IOS} from '@ng-web-apis/platform';
import {TuiInputPhone} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputPhone],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isIos = inject(WA_IS_IOS);

    public value = '+71234567890';

    protected get pattern(): string | null {
        return this.isIos ? '+[0-9-]{1,20}' : null;
    }
}
`;export{o as default};
