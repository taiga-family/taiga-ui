import"./chunk-42JZD6NG.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocIcons,
        TuiDocTextfield,
        TuiIcon,
        TuiTextfield,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected routes = DemoRoute;
    protected readonly examples = [
        'Basic',
        'States',
        'Dropdown',
        'InputPassword',
        'Mask',
    ];

    protected value = '';
    protected filler = '';
}
`;export{t as default};
