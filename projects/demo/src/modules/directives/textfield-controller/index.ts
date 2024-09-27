import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocTextfield,
        TuiInputModule,
        TuiTextfield,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly control = new FormControl('111', Validators.required);
    protected readonly routes = DemoRoute;
}
