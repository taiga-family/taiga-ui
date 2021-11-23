import {Component, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

import {changeDetection} from '../../../change-detection-strategy';

// @dynamic
@Component({
    selector: 'example-tui-default-prop-demo',
    template: 'Value: {{quantity}}',
    changeDetection,
})
export class ExampleTuiDefaultPropDemoComponent {
    @Input()
    @tuiDefaultProp(
        quantity => Number.isInteger(quantity) && quantity >= 5,
        'Should be integer number more than min value',
    )
    quantity = 10;
}
