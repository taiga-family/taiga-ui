import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: `example-tui-required-setter`,
    templateUrl: `./required-setter.template.html`,
    changeDetection,
})
export class ExampleTuiRequiredSetterComponent {
    exampleDecorator = import(`!!raw-loader!./import/example-decorator.md`);

    quantity?: number;

    setUndefined(): void {
        this.quantity = undefined;
    }
}
