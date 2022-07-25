import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';

@Component({
    selector: `tui-data-list-example-5`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiDataListExample5 {
    dropdownOpen = false;
    dateValue: TuiDay = new TuiDay(2020, 0, 1);
    euro = 87; // 1 euro = 87 rub
    dollar = 75; // 1 dollar = 75 rub

    readonly testForm = new FormGroup({
        testValue: new FormControl(`mail@mail.ru`),
    });

    readonly moneyForm = new FormGroup({
        moneyValue: new FormControl(1000),
    });

    rangeValue = new TuiDayRange(
        TuiDay.currentLocal(),
        TuiDay.currentLocal().append({year: 1}),
    );

    get testValue(): string {
        return this.testForm.get(`testValue`)?.value;
    }

    get moneyValue(): number {
        return Number(this.moneyForm.get(`moneyValue`)?.value) || 0;
    }

    onDayClick(day: TuiDay): void {
        this.dateValue = day;
    }
}
