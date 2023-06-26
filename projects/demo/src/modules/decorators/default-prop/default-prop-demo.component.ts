import {Component, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'example-tui-default-prop-demo',
    template: `
        Value: {{ quantity }}
    `,
    changeDetection,
})
export class ExampleTuiDefaultPropDemoComponent {
    @Input()
    quantity: number | undefined = 10;
}
