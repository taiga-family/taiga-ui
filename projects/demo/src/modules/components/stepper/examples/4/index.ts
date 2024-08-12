import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiConnected, TuiStepper} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiStepper, TuiConnected, NgForOf],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly steps = [
        'Start Up',
        'Cash In',
        'Sell out this huge amount that you have been saving up for many years of hard work',
        'Bro Down',
    ];
}
