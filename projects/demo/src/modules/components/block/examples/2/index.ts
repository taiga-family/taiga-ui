import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiGroupDirective} from '@taiga-ui/core';
import {TuiBlockDirective, TuiFadeDirective, TuiRadioComponent} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiGroupDirective,
        TuiBlockDirective,
        TuiRadioComponent,
        TuiFadeDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl('orange'),
    });
}
