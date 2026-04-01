import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiLabel, TuiRadio} from '@taiga-ui/core';

interface TestValue {
    test: string;
}

@Component({
    imports: [FormsModule, TuiButton, TuiLabel, TuiRadio],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TestValue | null = null;
    protected identityMatcher = (a: TestValue, b: TestValue): boolean =>
        a?.test === b?.test;
}
`;export{o as default};
