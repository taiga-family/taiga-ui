import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TUI_DATE_VALUE_TRANSFORMER, TuiInputDate} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, JsonPipe, TuiInputDate, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_DATE_VALUE_TRANSFORMER,
            useValue: {
                fromControlValue: (value: Date | null): TuiDay | null =>
                    value && TuiDay.fromLocalNativeDate(value),
                toControlValue: (value: TuiDay | null): Date | null =>
                    value?.toLocalNativeDate() || null,
            },
        },
    ],
})
export default class Example {
    protected value: Date | null = null;
}
