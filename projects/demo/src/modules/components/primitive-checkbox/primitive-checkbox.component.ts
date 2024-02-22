import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiSizeL} from '@taiga-ui/core';

@Component({
    selector: 'example-tui-checkbox',
    templateUrl: './primitive-checkbox.template.html',
    changeDetection,
})
export class ExampleTuiPrimitiveCheckboxComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleOptions = import('./examples/import/define-options.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    protected size: TuiSizeL = this.sizeVariants[0];

    protected disabled = false;

    protected focused = false;

    protected hovered = false;

    protected pressed = false;

    protected invalid = false;

    protected readonly valueVariants: readonly boolean[] = [false, true];

    protected value = this.valueVariants[0];
}
