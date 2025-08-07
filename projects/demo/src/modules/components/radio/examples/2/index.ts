import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiLabel} from '@taiga-ui/core';
import {TuiRadio} from '@taiga-ui/kit';

interface TestValue {
    test: string;
}

@Component({
    standalone: true,
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
