import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {default as exampleDecorator} from '!!raw-loader!./import/example-decorator.txt';

@Component({
    selector: 'example-tui-required-setter',
    templateUrl: './required-setter.template.html',
    changeDetection,
})
export class ExampleTuiRequiredSetterComponent {
    exampleDecorator = exampleDecorator;

    quantity?: number;

    setUndefined(): void {
        this.quantity = undefined;
    }
}
