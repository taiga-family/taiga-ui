import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiStepper} from '@taiga-ui/kit';

@Component({
    imports: [NgForOf, TuiStepper],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly steps = ['Start Up', 'Cash In', 'Sell Out', 'Bro Down'];
}
