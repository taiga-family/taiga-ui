import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDropdownPosition} from '@taiga-ui/kit';

import {AbstractExampleTuiDropdown} from '../../components/abstract/dropdown';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: `example-tui-dropdown-selection`,
    templateUrl: `./dropdown-selection.template.html`,
    styleUrls: [`./dropdown-selection.style.less`],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiDropdownSelectionComponent),
        },
    ],
})
export class ExampleTuiDropdownSelectionComponent extends AbstractExampleTuiDropdown {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
        LESS: import(`./examples/2/index.less?raw`),
    };

    positionVariants: TuiDropdownPosition[] = [`selection`, `word`, `tag`];

    position = this.positionVariants[0];
}
