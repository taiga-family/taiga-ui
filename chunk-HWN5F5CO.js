import"./chunk-HU6DUUP4.js";var o=`import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {TuiButtonSelect, TuiDataListWrapper} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiButton, TuiButtonSelect, TuiDataListWrapper, TuiDropdown],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items: string[] = inject('Pythons' as any);

    protected value = this.items[0];
}
`;export{o as default};
