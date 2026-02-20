import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiChip} from '@taiga-ui/kit';
import {TuiItemGroup} from '@taiga-ui/layout';

@Component({
    selector: 'example-chip',
    imports: [FormsModule, TuiChip, TuiDemo, TuiItemGroup],
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
`;export{t as default};
