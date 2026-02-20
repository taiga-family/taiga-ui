import"./chunk-HU6DUUP4.js";var i=`import {Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiNumberFormatProvider} from '@taiga-ui/core';
import {TuiInputNumber, tuiInputNumberOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputNumber],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputNumberOptionsProvider({
            min: -Infinity,
            max: Infinity,
        }),
        tuiNumberFormatProvider({precision: 0}),
    ],
})
export default class Example {
    protected readonly value = signal<bigint | null>(
        BigInt(\`777\${Number.MAX_SAFE_INTEGER}00\`),
    );

    protected readonly stringified = computed((x = this.value()) =>
        typeof x === 'bigint' ? \`\${x}n\` : 'null',
    );
}
`;export{i as default};
