import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample, TuiDocumentationProperty} from '@taiga-ui/addon-doc';

import {AbstractExampleTuiDropdown} from '../../components/abstract/dropdown';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';

const content = `PRESS!
<i>* There is also a pretty long text to check its width limitations</i>
<ng-template #dropdownContent>
    <div class="dropdown">
        Here can be any content
        <p>You can even insert other components:</p>
        <button
            tuiButton
            type="button"
        >
            Do not touch!
        </button>
        <p>Everything you want... *</p>
        <sub>* except cases of human rights violation</sub>
    </div>
</ng-template>`;

@Component({
    selector: 'example-tui-dropdown',
    templateUrl: './dropdown.template.html',
    styleUrls: ['./dropdown.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiDropdownComponent),
        },
    ],
})
export class ExampleTuiDropdownComponent extends AbstractExampleTuiDropdown {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    open = false;

    readonly dropdownBaseProperties: Record<string, TuiDocumentationProperty> = {
        tuiButton: {
            type: null,
        },
        tuiDropdown: {
            type: 'input',
            value: 'dropdownContent',
        },
    };

    readonly content = content;

    onClick(): void {
        this.open = !this.open;
    }

    onObscured(obscured: boolean): void {
        if (obscured) {
            this.open = false;
        }
    }

    onActiveZone(active: boolean): void {
        this.open = active && this.open;
    }
}
