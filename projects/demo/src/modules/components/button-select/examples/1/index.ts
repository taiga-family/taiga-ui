import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {TuiButtonSelect, TuiDataListWrapper} from '@taiga-ui/kit';
import {FormsModule} from '@angular/forms';

@Component({
    imports: [TuiButton, TuiButtonSelect, TuiDropdown, TuiDataListWrapper, FormsModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items: string[] = inject('Pythons' as any);

    protected item = this.items[0];
}
