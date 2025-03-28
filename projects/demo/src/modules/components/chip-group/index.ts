import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiChip} from '@taiga-ui/kit';
import {TuiChipGroup} from '@taiga-ui/layout';
import {FormsModule} from '@angular/forms';

@Component({
    standalone: true,
    selector: 'example-chip',
    imports: [TuiChip, TuiChipGroup, TuiDemo, FormsModule],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly examples = [
        'Basic',
        'Single choice',
        'Multiple choice',
        'With more',
    ];

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

    protected selected = this.chips[7];
    protected horizontal = false;
    protected autoscroll = false;
}
