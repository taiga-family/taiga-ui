import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

import {AbstractExampleTuiHint} from '../../components/abstract/hint';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-pointer-hint',
    templateUrl: './pointer-hint.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiPointerHintComponent),
        },
    ],
})
export class ExampleTuiPointerHintComponent extends AbstractExampleTuiHint {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    showDelay = 0;
    hideDelay = 0;
}
