import"./chunk-42JZD6NG.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPagination} from '@taiga-ui/kit';
import {TuiInputSliderModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    imports: [
        FormsModule,
        TuiInputSliderModule,
        TuiPagination,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Page {
    protected length = 64;

    protected index = 10;

    protected goToPage(index: number): void {
        this.index = index;
        console.info('New page:', index);
    }
}
`;export{t as default};
