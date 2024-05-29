import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownModule, TuiIconComponent, TuiTextfieldModule} from '@taiga-ui/core';
import {TuiTooltipModule} from '@taiga-ui/experimental';
import {
    TuiChevronDirective,
    TuiDataListWrapper,
    TuiFilterByInputPipeModule,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiDropdownModule,
        TuiTextfieldModule,
        TuiIconComponent,
        TuiTooltipModule,
        TuiChevronDirective,
        TuiDataListWrapper,
        TuiFilterByInputPipeModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected value = '';

    protected readonly items = [
        'John Cleese',
        'Eric Idle',
        'Michael Palin',
        'Graham Chapman',
        'Terry Gilliam',
        'Terry Jones',
    ];
}
