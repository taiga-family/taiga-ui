import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocIcons,
        TuiDocTextfield,
        TuiInputChip,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class PageComponent {
    protected readonly routes = DemoRoute;
    protected readonly control = new FormControl();
    protected unique = true;
    protected separator = ',';

    protected readonly examples = [
        'Basic',
        'Chips',
        'Disabled items',
        'MultiSelect',
        'Customization',
        'Mask',
        'Direction',
        'Mobile',
        'Table',
    ];
}
