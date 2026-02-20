import"./chunk-HU6DUUP4.js";var o=`import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, JsonPipe, TuiInputRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [0.25, 0.75];
    // Form control can only contain decimal number which is multiple of this constant
    protected quantum = 0.05;

    // But granularity of each discrete slider step is equal to this constant
    protected readonly step = 0.25;
}
`;export{o as default};
