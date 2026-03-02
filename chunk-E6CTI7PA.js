import"./chunk-HU6DUUP4.js";var a=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiInputYear} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputYear],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: number | null = null;

    protected readonly disabledHandler: TuiBooleanHandler<number> = (value) =>
        [2020, 2022].includes(value);
}
`;export{a as default};
