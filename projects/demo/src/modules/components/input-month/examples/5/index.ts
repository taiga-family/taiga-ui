import {Component, inject, LOCALE_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMonth} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TUI_MONTH_FORMATTER, TuiInputMonth} from '@taiga-ui/kit';
import {of} from 'rxjs';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputMonth, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_MONTH_FORMATTER,
            useFactory: () => {
                const formatter = Intl.DateTimeFormat(inject(LOCALE_ID), {
                    year: '2-digit',
                    month: 'short',
                });

                return of(
                    (x: TuiMonth | null) =>
                        (x && formatter.format(x.toLocalNativeDate())) ?? '',
                );
            },
        },
    ],
})
export default class Example {
    protected value: TuiMonth | null = TuiMonth.currentLocal().append({month: -1});
}
