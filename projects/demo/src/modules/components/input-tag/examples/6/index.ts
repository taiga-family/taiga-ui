import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiGroup, TuiHint} from '@taiga-ui/core';
import {
    TuiInputModule,
    TuiInputTagModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    imports: [
        FormsModule,
        TuiGroup,
        TuiHint,
        TuiInputModule,
        TuiInputTagModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = ['not', 'unique', 'tags, with', 'custom', 'separator', 'separator'];
    protected customSeparator = ';';
}
