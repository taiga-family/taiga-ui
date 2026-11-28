import"./chunk-LQ6M4NCU.js";var r=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCheckbox, tuiCheckboxOptionsProvider} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiCheckbox],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiCheckboxOptionsProvider({
            appearance: (el) => (el.checked ? 'primary-grayscale' : 'outline-grayscale'),
        }),
    ],
})
export default class Example {
    protected checked = true;
}
`;export{r as default};
