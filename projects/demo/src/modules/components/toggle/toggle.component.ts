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
    readonly exampleForm = import('./examples/import/declare-form.md?raw');
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    readonly exampleOptions = import('./examples/import/define-options.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
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
