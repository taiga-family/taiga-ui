import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiInputChipDirective} from '@taiga-ui/kit';
import {
    TuiTextfield,
    TuiTextfieldComponent,
    TuiTextfieldMultiComponent,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocTextfield,
        TuiInputChipDirective,
        TuiTextfieldMultiComponent,
        TuiTextfieldComponent,
        TuiTextfield,
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
    protected unique = false;
}
