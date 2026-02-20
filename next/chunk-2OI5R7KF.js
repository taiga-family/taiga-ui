import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocInput} from '@demo/components/input';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiInputCard} from '@taiga-ui/addon-commerce';

@Component({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocIcons,
        TuiDocInput,
        TuiDocTextfield,
        TuiInputCard,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected card = '';
}
`;export{t as default};
