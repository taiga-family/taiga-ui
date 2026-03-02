import"./chunk-HU6DUUP4.js";var o=`import {Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNumberFormat} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

import {BigIntWithDecimal, type ControlValue} from './transformer';

@Component({
    imports: [BigIntWithDecimal, FormsModule, TuiInputNumber, TuiNumberFormat],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly infinity = Infinity;
    protected readonly value = signal<ControlValue>({
        significand: 123456700042n,
        exp: -5,
    });

    protected readonly stringified = computed(() =>
        JSON.stringify(
            this.value(),
            (_, x) => (typeof x === 'bigint' ? \`\${String(x)}n\` : x),
            2,
        ),
    );
}
`;export{o as default};
