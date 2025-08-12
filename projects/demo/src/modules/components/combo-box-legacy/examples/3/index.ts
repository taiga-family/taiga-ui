import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {ITEMS} from '@demo/tokens';
import {TuiDataListWrapper, TuiFilterByInputPipe} from '@taiga-ui/kit';
import {TuiComboBoxModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, TuiComboBoxModule, TuiDataListWrapper, TuiFilterByInputPipe],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly items = inject(ITEMS);
    protected value = '';
}
