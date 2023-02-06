import {Component, forwardRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeL} from '@taiga-ui/core';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-checkbox-labeled',
    templateUrl: './checkbox-labeled.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiCheckboxLabeledComponent),
        },
    ],
})
export class ExampleTuiCheckboxLabeledComponent extends AbstractExampleTuiControl {
    readonly exampleForm = import('!!raw-loader!./examples/import/declare-form.md');
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
        LESS: import('!!raw-loader!./examples/1/index.less'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    size: TuiSizeL = this.sizeVariants[0];

    control = new FormGroup({
        testValue1: new FormControl(false),
        testValue2: new FormControl(),
        testValue3: new FormControl(true),
    });

    constructor() {
        super();

        this.control.get('testValue1')!.valueChanges.subscribe(value => {
            if (value) {
                this.control.get('testValue1')!.setValue(false);
            }
        });
    }
}
