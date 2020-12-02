import {Component, Input} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-tui-default-prop-demo',
    template: 'Значение: {{quantity}}',
    changeDetection,
})
export class ExampleTuiDefaultPropDemoComponent {
    @Input()
    min = 10;

    @Input()
    @tuiDefaultProp<ExampleTuiDefaultPropDemoComponent, 'quantity'>(
        (quantity, context) => Number.isInteger(quantity) && quantity >= context.min,
        'Количество должно быть целым конечным числом, больше минимального значения',
    )
    quantity = 10;
}
