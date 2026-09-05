import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiChip, TuiChipGroup} from '@taiga-ui/kit';

@Component({
    imports: [TuiChip, TuiChipGroup],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly chips = ['Indian cuisine', 'Wi-Fi', 'Free parking', 'Pets allowed'];
}
