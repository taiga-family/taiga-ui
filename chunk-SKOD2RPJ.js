import"./chunk-HU6DUUP4.js";var t=`import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiInputTime} from '@taiga-ui/kit';

@Component({
    imports: [JsonPipe, ReactiveFormsModule, TuiInputTime],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiTime | null>(new TuiTime(17, 0));
}
`;export{t as default};
