import {Component, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocItemsHandlers} from '@demo/components/items-handlers';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiDay} from '@taiga-ui/cdk';
import {TuiDropdown, tuiItemsHandlersProvider, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocDropdown,
        TuiDocIcons,
        TuiDocItemsHandlers,
        TuiDocTextfield,
        TuiDropdown,
        TuiInputDate,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        tuiItemsHandlersProvider({
            disabledItemHandler: signal((item: TuiDay) => item.dayOfWeek() > 4),
        }),
    ],
})
export default class Example {
    protected readonly control = new FormControl();
}
