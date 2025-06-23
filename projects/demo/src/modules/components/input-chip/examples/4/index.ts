import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiInputChip,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiInputChip,
        TuiTextfield,
        TuiChevron,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: string[] = [];
    protected readonly items: string[] = inject('Pythons' as any);
    protected readonly handler: TuiBooleanHandler<string> = (item) =>
        !this.items.includes(item);
}
