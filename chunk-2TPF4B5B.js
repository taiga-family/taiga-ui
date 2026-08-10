import"./chunk-HU6DUUP4.js";var m=`import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDocAppearance} from '@demo/components/appearance';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiInputCard} from '@taiga-ui/addon-commerce';

@Component({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiDemo,
        TuiDocAppearance,
        TuiDocControl,
        TuiDocIcons,
        TuiDocTextfield,
        TuiInputCard,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected card = '';
    protected readonly examples = ['Form', 'Card'];
}
`;export{m as default};
