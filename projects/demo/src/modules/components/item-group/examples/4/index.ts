import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiFadeIn} from '@taiga-ui/core';
import {TuiChip, TuiItemsWithMore} from '@taiga-ui/kit';
import {TuiItemGroup} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [FormsModule, NgForOf, NgIf, TuiChip, TuiItemGroup, TuiItemsWithMore],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiFadeIn],
})
export default class Example {
    protected linesLimit = 2;

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
