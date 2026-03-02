import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputSlider, TuiPagination} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputSlider, TuiPagination, TuiTextfield],
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
