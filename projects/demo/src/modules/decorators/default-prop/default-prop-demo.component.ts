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
    min = 10;

    @Input()
    @tuiDefaultProp<ExampleTuiDefaultPropDemoComponent, 'quantity'>(
        (quantity, context) => Number.isInteger(quantity) && quantity >= context.min,
        'Should be ingeter number more than min value',
    )
    quantity = 10;
}
