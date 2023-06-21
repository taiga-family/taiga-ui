import {Component, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'example-tui-required-setter-demo',
    template: `
        <span *ngFor="let item of items">♥</span>
    `,
    changeDetection,
})
export class ExampleTuiRequiredSetterDemoComponent {
    @Input()
    set quantity(quantity: number | undefined) {
        this.items = new Array(quantity).fill(
            Math.floor(Math.random() * Math.floor(100)),
        );
    }

    items: readonly number[] = [];
}
