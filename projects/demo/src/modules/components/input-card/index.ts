import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiInputCard} from '@taiga-ui/addon-commerce';
import {TuiTextfield} from '@taiga-ui/core';

@Component({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocIcons,
        TuiDocTextfield,
        TuiInputCard,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected card = '';
}
