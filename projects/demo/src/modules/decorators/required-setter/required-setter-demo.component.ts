import {Component, Input} from '@angular/core';
import {tuiRequiredSetter} from '@taiga-ui/cdk';
import {changeDetection} from '../../../change-detection-strategy';

// @dynamic
@Component({
    selector: 'example-tui-required-setter-demo',
    template: '<span *ngFor="let item of items">♥</span>',
    changeDetection,
})
export class ExampleTuiRequiredSetterDemoComponent {
    @Input()
    min = 10;

    @Input()
    @tuiRequiredSetter<ExampleTuiRequiredSetterDemoComponent, 'quantity'>(
        (quantity, context) => Number.isInteger(quantity) && quantity >= context.min,
        'Количество должно быть целым конечным числом, больше минимального значения',
    )
    set quantity(quantity: number) {
        this.items = new Array(quantity).fill(
            Math.floor(Math.random() * Math.floor(100)),
        );
    }

    items: readonly number[] = [];
}
