import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPaginationModule} from '@taiga-ui/kit';
import {TuiInputSliderModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiInputSliderModule,
        TuiTextfieldControllerModule,
        FormsModule,
        TuiPaginationModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class PageComponent {
    protected sidePadding = 3;
}
