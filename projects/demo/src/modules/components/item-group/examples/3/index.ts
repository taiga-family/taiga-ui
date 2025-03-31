import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk';
import {TuiChip} from '@taiga-ui/kit';
import {TuiItemGroup} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [FormsModule, NgForOf, TuiChip, TuiItemGroup],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly chips = [
        'Indian cuisine',
        'Wi-Fi',
        'Free parking',
        'Pets allowed',
        'Pool',
        'Air conditioning',
        'Breakfast',
        'Gym',
        'Kitchen',
        'Laundry',
        'Luggage storage',
        'Outdoor seating',
        'Room service',
        'Smoking allowed',
    ];

    protected checked = this.chips.map(TUI_FALSE_HANDLER);
}
