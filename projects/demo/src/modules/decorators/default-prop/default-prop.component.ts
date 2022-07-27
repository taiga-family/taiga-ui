import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: `example-tui-default-prop`,
    templateUrl: `./default-prop.template.html`,
    changeDetection,
})
export class ExampleTuiDefaultPropComponent {
    exampleDecorator = import(`./import/example-decorator.md?raw`);

    quantity: number | undefined = 10;

    setUndefined(): void {
        this.quantity = undefined;
    }
}
