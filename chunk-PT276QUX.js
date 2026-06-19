import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDay} from '@taiga-ui/cdk';
import {TuiButton, TuiCalendar, TuiDropdown} from '@taiga-ui/core';
import {TuiButtonSelect} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiButton, TuiButtonSelect, TuiCalendar, TuiDropdown],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiDay | null = null;
}
`;export{e as default};
