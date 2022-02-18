import {Component, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiDefaultProp} from '@taiga-ui/cdk';

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
    quantity: number | undefined = 10;
}
