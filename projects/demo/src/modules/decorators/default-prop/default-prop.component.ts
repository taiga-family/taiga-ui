import * as exampleDecorator from '!!raw-loader!./import/example-decorator.txt';
import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-tui-default-prop',
    templateUrl: './default-prop.template.html',
    changeDetection,
})
export class ExampleTuiDefaultPropComponent {
    exampleDecorator = exampleDecorator;

    quantity: number | undefined = 10;

    min = 10;

    setUndefined() {
        this.quantity = undefined;
    }
}
