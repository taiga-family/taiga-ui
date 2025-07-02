import {NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiDropdownOptionsDirective,
    TuiIcon,
    TuiSelectLike,
    TuiTextfield,
} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiTooltip,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdownOptionsDirective,
        TuiFilterByInputPipe,
        TuiIcon,
        TuiTextfield,
        TuiTooltip,
        TuiSelectLike,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';

    protected readonly items = inject<readonly string[]>('Pythons' as any);
}
