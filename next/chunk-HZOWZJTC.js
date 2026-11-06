import"./chunk-LQ6M4NCU.js";var t=`import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocAppearance} from '@demo/components/appearance';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocAppearance,
        TuiDocControl,
        TuiDocIcons,
        TuiDocTextfield,
        TuiInputChip,
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
        'Virtual scroll',
        'Stringify',
    ];
}
`;export{t as default};
