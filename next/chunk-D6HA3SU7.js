import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiButton, TuiInputDate],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiDay | null>(null);
    protected readonly today = TuiDay.currentLocal();
}
`;export{e as default};
