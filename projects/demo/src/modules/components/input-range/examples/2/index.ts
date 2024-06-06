import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiNumberFormatProvider} from '@taiga-ui/core';
import {TuiInputRangeModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiInputRangeModule, ReactiveFormsModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    styles: [
        `
            tui-input-range {
                max-width: 30rem;
            }
        `,
    ],
    encapsulation,
    changeDetection,
    providers: [
        tuiNumberFormatProvider({
            decimalSeparator: '.',
            thousandSeparator: ',',
            decimalMode: 'always',
        }),
    ],
})
export default class ExampleComponent {
    protected readonly max = 50_000_001;
    protected readonly min = 5_001;

    protected readonly control = new FormControl([this.min, this.max / 2]);
}
