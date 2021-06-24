import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TUI_INPUT_TIME_OPTIONS, tuiCreateTimePeriods} from '@taiga-ui/kit';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-time-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_INPUT_TIME_OPTIONS,
            useValue: {
                icon: 'tuiIconCheckCircleLarge',
                mode: 'HH:MM:SS',
                itemSize: 's',
            },
        },
    ],
})
export class TuiInputTimeExample3 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(null),
    });

    items1 = tuiCreateTimePeriods();
}
