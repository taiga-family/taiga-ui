import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-data-list-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiDataListExample5 {
    protected dropdownOpen = false;
    protected dateValue: TuiDay = new TuiDay(2020, 0, 1);
    protected euro = 87; // 1 euro = 87 rub
    protected dollar = 75; // 1 dollar = 75 rub

    protected readonly testForm = new FormGroup({
        testValue: new FormControl('mail@mail.ru'),
    });

    protected readonly moneyForm = new FormGroup({
        moneyValue: new FormControl(1000),
    });

    protected rangeValue = new TuiDayRange(
        TuiDay.currentLocal(),
        TuiDay.currentLocal().append({year: 1}),
    );

    protected get testValue(): string | null | undefined {
        return this.testForm.get('testValue')?.value;
    }

    protected get moneyValue(): number {
        return Number(this.moneyForm.get('moneyValue')?.value) || 0;
    }

    protected onDayClick(day: TuiDay): void {
        this.dateValue = day;
    }
}
