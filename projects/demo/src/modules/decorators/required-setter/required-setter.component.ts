import {default as exampleDecorator} from '!!raw-loader!./import/example-decorator.txt';
import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-tui-required-setter',
    templateUrl: './required-setter.template.html',
    changeDetection,
})
export class ExampleTuiRequiredSetterComponent {
    exampleDecorator = exampleDecorator;

    quantity?: number;

    setUndefined() {
        this.quantity = undefined;
    }
}
