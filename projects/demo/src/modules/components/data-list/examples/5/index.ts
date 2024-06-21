import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiCalendar,
    TuiDataList,
    TuiDropdown,
    TuiGroupDirective,
} from '@taiga-ui/core';
import {TuiDataListDropdownManager} from '@taiga-ui/kit';
import {TuiInputDateRangeModule, TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiButton,
        TuiDropdown,
        TuiDataList,
        TuiDataListDropdownManager,
        TuiInputModule,
        TuiCalendar,
        TuiGroupDirective,
        FormsModule,
        TuiAmountPipe,
        AsyncPipe,
        TuiInputDateRangeModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected dropdownOpen = false;
    protected dateValue: TuiDay = new TuiDay(2020, 0, 1);
    protected euro = 87; // 1 euro = 87 rub
    protected dollar = 75; // 1 dollar = 75 rub

    protected emailValue = 'mail@mail.ru';
    protected moneyValue = 1000;

    protected rangeValue = new TuiDayRange(
        TuiDay.currentLocal(),
        TuiDay.currentLocal().append({year: 1}),
    );

    protected onDayClick(day: TuiDay): void {
        this.dateValue = day;
    }
}
