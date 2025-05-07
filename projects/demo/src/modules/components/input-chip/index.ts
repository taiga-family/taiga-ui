import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiTextfield, TuiTextfieldMultiComponent} from '@taiga-ui/core';
import {TuiInputChipDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocTextfield,
        TuiInputChipDirective,
        TuiTextfield,
        TuiTextfieldMultiComponent,
    ],
    templateUrl: './index.html',
    styles: [
        `
            tui-textfield {
                max-inline-size: 25rem;
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class PageComponent {
    protected readonly routes = DemoRoute;
    protected readonly control = new FormControl(null);
    protected value = [];
    protected rows = 5;
    protected unique = true;
    protected separator = ',';

    protected examples = [
        'Basic',
        'Size',
        'Customization',
        'Hint',
        'Validation',
        'Mask',
        'Overflow',
    ];
}
