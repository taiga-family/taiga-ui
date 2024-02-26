import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

import {AbstractExampleTuiDropdown} from '../../components/abstract/dropdown';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-dropdown-open',
    templateUrl: './dropdown-open.template.html',
    styleUrls: ['./dropdown-open.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiDropdownOpenComponent),
        },
    ],
})
export class ExampleTuiDropdownOpenComponent extends AbstractExampleTuiDropdown {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
        'accessor.ts': import('./examples/5/accessor.ts?raw'),
    };

    protected open = false;

    protected sided = false;

    protected input = '';

    protected enabledVariants = [true, 'getter this.input.length > 2'];

    protected enabledSelected = this.enabledVariants[0];

    protected readonly contentVariants = ['Template', 'Custom string'];

    protected content = this.contentVariants[0];

    protected get template(): boolean {
        return this.content === 'Template';
    }

    protected get enabled(): boolean {
        return this.enabledSelected === true || this.input.length > 2;
    }

    protected onInput(input: string): void {
        this.input = input;
        this.open = this.enabled;
    }

    protected onClick(): void {
        this.open = false;
    }
}
