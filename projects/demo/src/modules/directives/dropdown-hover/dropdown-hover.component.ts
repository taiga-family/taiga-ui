import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample, TuiDocumentationProperty} from '@taiga-ui/addon-doc';

import {AbstractExampleTuiDropdown} from '../../components/abstract/dropdown';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';

const content = `Hover pointer over
<strong>to see a dropdown</strong>
<ng-template #dropdownContent>
    <div class="dropdown">
        Here you can have any content
        <p>You can select a text inside a dropdown and it will not close a dropdown</p>
        <button
            tuiButton
            type="button"
        >
            Button
        </button>
    </div>
</ng-template>`;

@Component({
    selector: 'example-tui-dropdown-hover',
    templateUrl: './dropdown-hover.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiDropdownHoverComponent),
        },
    ],
})
export class ExampleTuiDropdownHoverComponent extends AbstractExampleTuiDropdown {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    readonly example4: TuiDocExample = {
        HTML: import('./examples/4/index.html?raw'),
    };

    showDelay = 200;

    hideDelay = 500;

    readonly content = content;

    readonly dropdownBaseProperties: Record<string, TuiDocumentationProperty> = {
        tuiDropdownHover: {
            type: null,
        },
        tuiDropdown: {
            type: 'input',
            value: 'dropdownContent',
        },
    };
}
