import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeL} from '@taiga-ui/core';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiInteractive} from '../abstract/interactive';

@Component({
    selector: 'example-tui-toggle',
    templateUrl: './toggle.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiToggleComponent),
        },
    ],
})
export class ExampleTuiToggleComponent extends AbstractExampleTuiInteractive {
    readonly exampleForm = import('!!raw-loader!./examples/import/declare-form.md');
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');
    readonly exampleOptions = import('!!raw-loader!./examples/import/define-options.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    showIcons = false;

    showLoader = false;

    singleColor = false;

    readonly control = new FormControl(false);

    readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    size: TuiSizeL = this.sizeVariants[0];

    get disabled(): boolean {
        return this.control.disabled;
    }

    set disabled(value: boolean) {
        if (value) {
            this.control.disable();

            return;
        }

        this.control.enable();
    }
}
