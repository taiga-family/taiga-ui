import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputSlider, TuiPagination} from '@taiga-ui/kit';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {TuiTextfield} from '@taiga-ui/core';

@Component({
    imports: [
        FormsModule,
        TuiPagination,
        TuiTextfieldControllerModule,
        TuiInputSlider,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Page {
    protected activePadding = 2;
}
