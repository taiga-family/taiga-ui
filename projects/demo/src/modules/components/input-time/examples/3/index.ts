import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiTime} from '@taiga-ui/cdk';
import {tuiCreateTimePeriods} from '@taiga-ui/kit';
import {tuiInputTimeOptionsProvider} from '@taiga-ui/legacy';

@Component({
    selector: 'tui-input-time-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputTimeOptionsProvider({
            icon: 'tuiIconCheckCircleLarge',
            mode: 'HH:MM:SS',
            itemSize: 's',
        }),
    ],
})
export class TuiInputTimeExample3 {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl<TuiTime | null>(null),
    });

    protected items1 = tuiCreateTimePeriods();
}
