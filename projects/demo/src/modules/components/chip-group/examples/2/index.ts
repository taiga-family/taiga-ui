import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiChip} from '@taiga-ui/kit';
import {NgForOf} from '@angular/common';
import {TuiChipGroup} from '@taiga-ui/layout';
import {TuiPlatform} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [FormsModule, TuiChip, NgForOf, TuiChipGroup, TuiPlatform],
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

    protected selected = 'Wi-Fi';
}
