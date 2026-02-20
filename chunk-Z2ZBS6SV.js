import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBottomSheet} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiCheckbox} from '@taiga-ui/core';
import {TuiAccordion, TuiBlock} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAccordion,
        TuiBlock,
        TuiBottomSheet,
        TuiButton,
        TuiCheckbox,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected show = true;
}
`;export{e as default};
