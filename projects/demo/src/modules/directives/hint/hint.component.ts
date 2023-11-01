import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample, TuiDocumentationProperty} from '@taiga-ui/addon-doc';

import {AbstractExampleTuiHint} from '../../components/abstract/hint';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';

const content = `Hover it!
<ng-template #hint>
    To be accessible, hint should be set to a focusable element. See
    <a
        routerLink="/directives/hint-describe"
        tuiLink
    >
        <code>HintDescribe</code>
    </a>
</ng-template>`;

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
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    showDelay = 500;
    hideDelay = 200;

    readonly content = content;

    readonly hintBaseProperties: Record<string, TuiDocumentationProperty> = {
        tuiHint: {
            type: null,
            value: 'hint',
        },
    };
}
