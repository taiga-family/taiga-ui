import"./chunk-HU6DUUP4.js";var t=`import {Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiDropdown, TuiSlider} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiButton, TuiDropdown, TuiSlider],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    protected value = 80;
}
`;export{t as default};
