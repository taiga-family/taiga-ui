import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiInputDateTimeModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [JsonPipe, ReactiveFormsModule, TuiInputDateTimeModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl([new TuiDay(2017, 2, 15), null]),
    });

    public readonly min = new TuiDay(2017, 2, 25);

    public readonly max = new TuiDay(2040, 2, 20);
}
