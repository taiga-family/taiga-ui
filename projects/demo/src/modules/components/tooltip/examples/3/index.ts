import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiTextfieldControllerModule,
    TuiTextfieldOptionsDirective,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiInputModule,
        TuiTextfieldOptionsDirective,
        TuiTextfieldControllerModule,
        TuiTooltipModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
