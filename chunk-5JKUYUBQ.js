import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiChevron, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiChevron, TuiSelect],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected groupItems: ReadonlyArray<readonly string[]> = [
        ['Caesar', 'Greek', 'Apple and Chicken'],
        ['Broccoli Cheddar', 'Chicken and Rice', 'Chicken Noodle'],
    ];

    protected readonly labels = ['Salad', 'Soup'];
    protected readonly control = new FormControl<string | null>(null);
}
`;export{t as default};
