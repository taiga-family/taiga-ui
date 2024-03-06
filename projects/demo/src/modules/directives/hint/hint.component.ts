import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

import {AbstractExampleTuiHint} from '../../components/abstract/hint';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-hint',
    templateUrl: './hint.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiHintComponent),
        },
    ],
})
export class ExampleTuiHintComponent extends AbstractExampleTuiHint {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected showDelay = 500;
    protected hideDelay = 200;
}
