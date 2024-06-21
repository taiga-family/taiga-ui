import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiDay} from '@taiga-ui/cdk';
import {TuiCalendar} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [NgIf, TuiCalendar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiDay | null = null;

    protected onDayClick(day: TuiDay): void {
        this.value = day;
    }
}
