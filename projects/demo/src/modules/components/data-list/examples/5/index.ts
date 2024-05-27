import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiActiveZoneDirective, TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiCalendarComponent,
    TuiDataListComponent,
    TuiDropdownDirective,
    TuiDropdownManualDirective,
    TuiDropdownOpenDirective,
    TuiDropdownOptionsDirective,
    TuiDropdownPositionSidedDirective,
    TuiGroupDirective,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {TuiDataListDropdownManagerModule} from '@taiga-ui/kit';
import {TuiInputDateRangeModule, TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiDropdownOptionsDirective,
        TuiDropdownDirective,
        TuiDropdownOpenDirective,
        TuiDataListComponent,
        TuiDataListDropdownManagerModule,
        TuiActiveZoneDirective,
        TuiDropdownPositionSidedDirective,
        TuiOptionComponent,
        TuiDropdownManualDirective,
        ReactiveFormsModule,
        TuiInputModule,
        TuiCalendarComponent,
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
export default class ExampleComponent {
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
