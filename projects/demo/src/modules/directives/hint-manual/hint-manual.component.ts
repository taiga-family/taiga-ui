import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample, TuiDocumentationProperty} from '@taiga-ui/addon-doc';

import {AbstractExampleTuiHint} from '../../components/abstract/hint';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-hint-manual',
    templateUrl: './hint-manual.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiHintManualComponent),
        },
    ],
})
export class ExampleTuiHintManualComponent extends AbstractExampleTuiHint {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    show = false;

    readonly hintBaseProperties: Record<string, TuiDocumentationProperty> = {
        tuiButton: {
            type: null,
        },
        type: {
            type: null,
            value: 'button',
        },
        tuiHint: {
            type: null,
            value: 'It says "Hi all!" into console',
        },
        click: {
            type: 'output',
            value: 'sayHi()',
        },
    };

    sayHi(): void {
        console.info('Hi all!');
    }
}
