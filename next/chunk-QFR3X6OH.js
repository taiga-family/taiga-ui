import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiCard, TuiInputCardGroup} from '@taiga-ui/addon-commerce';

@Component({
    imports: [ReactiveFormsModule, TuiInputCardGroup],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected control = new FormControl<TuiCard | null>({
        card: '',
        expire: '',
        cvc: '***',
    });
}
`;export{t as default};
