import {default as exampleDefineOptions} from '!!raw-loader!./examples/import/define-options.txt';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, Inject} from '@angular/core';
import {TuiSizeL} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
import {HOW_TO_PATH_RESOLVER} from '../../../how-to-path-resolver';

@Component({
    selector: 'example-tui-checkbox',
    templateUrl: './primitive-checkbox.template.html',
    changeDetection,
})
export class ExampleTuiPrimitiveCheckboxComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleDefineOptions = exampleDefineOptions;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly sizeVariants: ReadonlyArray<TuiSizeL> = ['m', 'l'];

    size: TuiSizeL = this.sizeVariants[0];

    disabled = false;

    focused = false;

    hovered = false;

    pressed = false;

    invalid = false;

    readonly valueVariants: ReadonlyArray<boolean> = [false, true];

    value = this.valueVariants[0];

    constructor(
        @Inject(HOW_TO_PATH_RESOLVER) readonly howToResolver: (path: string) => string,
    ) {}
}
