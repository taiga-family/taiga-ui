import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {default as exampleDecorator} from '!!raw-loader!./import/example-decorator.txt';

@Component({
    selector: 'example-tui-default-prop',
    templateUrl: './default-prop.template.html',
    changeDetection,
})
export class ExampleTuiDefaultPropComponent {
    exampleDecorator = exampleDecorator;

    quantity: number | undefined = 10;

    setUndefined(): void {
        this.quantity = undefined;
    }
}
