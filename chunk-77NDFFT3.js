import"./chunk-HU6DUUP4.js";var i=`import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdown, TuiIcon, TuiInput, TuiSelectLike} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiTooltip,
} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdown,
        TuiFilterByInputPipe,
        TuiIcon,
        TuiInput,
        TuiSelectLike,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';

    protected readonly items = inject<readonly string[]>('Pythons' as any);
}
`;export{i as default};
