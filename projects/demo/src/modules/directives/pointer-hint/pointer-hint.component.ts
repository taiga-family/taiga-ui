import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

import {AbstractExampleTuiHint} from '../../components/abstract/hint';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: `example-pointer-hint`,
    templateUrl: `./pointer-hint.template.html`,
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiPointerHintComponent),
        },
    ],
})
export class ExampleTuiPointerHintComponent extends AbstractExampleTuiHint {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    showDelay = 0;
    hideDelay = 0;
}
