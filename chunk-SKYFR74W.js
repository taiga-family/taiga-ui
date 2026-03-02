import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocInput} from '@demo/components/input';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiIcon, TuiInput} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocIcons,
        TuiDocInput,
        TuiDocTextfield,
        TuiIcon,
        TuiInput,
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
        'Custom cleaner',
        'Mask',
    ];

    protected value = '';
    protected filler = '';
}
`;export{t as default};
