import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
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
    encapsulation: ViewEncapsulation.None,
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
        'Virtual scroll',
        'Stringify',
    ];
}
