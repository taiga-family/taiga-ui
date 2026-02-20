import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiButtonX} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiButtonX, TuiInputChip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly required = ['Required', 'Obligatory'];
    protected readonly control = new FormControl(this.required.concat('Removable'), {
        nonNullable: true,
    });

    protected readonly handler: TuiBooleanHandler<string> = (item) =>
        this.required.includes(item);
}
`;export{t as default};
