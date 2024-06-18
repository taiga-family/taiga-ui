import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTextfield, TuiTooltip} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiFilterByInputPipe} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiTextfield,
        TuiIcon,
        TuiTooltip,
        TuiChevron,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
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
