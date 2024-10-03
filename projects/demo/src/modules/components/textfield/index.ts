import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiDemo,
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
    protected readonly examples = [
        'Size',
        'States',
        'Dropdown',
        'Interactive icons',
        'Mask',
    ];

    protected value = '';
    protected readonly = false;
    protected disabled = false;
    protected invalid = false;
}
