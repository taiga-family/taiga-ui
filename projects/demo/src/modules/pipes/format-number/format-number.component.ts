import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiNumberFormat} from '../../components/abstract/number-format';

@Component({
    selector: 'example-tui-format-number',
    templateUrl: './format-number.template.html',
    styleUrls: ['./format-number.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiFormatNumberComponent),
        },
    ],
})
export class ExampleTuiFormatNumberComponent extends AbstractExampleTuiNumberFormat {
    public readonly control = new FormControl(100);

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };
}
