import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiSizeL} from '@taiga-ui/core';

@Component({
    selector: `example-tui-checkbox`,
    templateUrl: `./primitive-checkbox.template.html`,
    changeDetection,
})
export class ExampleTuiPrimitiveCheckboxComponent {
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleOptions = import(`!!raw-loader!./examples/import/define-options.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

    readonly sizeVariants: readonly TuiSizeL[] = [`m`, `l`];

    size: TuiSizeL = this.sizeVariants[0];

    disabled = false;

    focused = false;

    hovered = false;

    pressed = false;

    invalid = false;

    readonly valueVariants: readonly boolean[] = [false, true];

    value = this.valueVariants[0];
}
