import {Component, forwardRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    DEFAULT_MAX_HEIGHT,
    DEFAULT_MIN_HEIGHT,
    TuiDropdownWidth,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core';

import {ExampleTuiDropdown} from '../../components/abstract/dropdown-controller-documentation/dropdown-controller-documentation.component';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: `example-dropdown-context`,
    templateUrl: `./dropdown-context.component.html`,
    styleUrls: [`./dropdown-context.component.less`],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiDropdownContextComponent),
        },
    ],
})
export class ExampleTuiDropdownContextComponent implements ExampleTuiDropdown {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly exampleBasic: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
        LESS: import(`./examples/1/index.less?raw`),
    };

    readonly exampleContextMenu: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
        LESS: import(`./examples/2/index.less?raw`),
    };

    readonly exampleReportMistakeForm: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
        LESS: import(`./examples/3/index.less?raw`),
    };

    readonly dropdownAlignVariants: readonly TuiHorizontalDirection[] = [`left`, `right`];

    readonly dropdownDirectionVariants: readonly TuiVerticalDirection[] = [
        `bottom`,
        `top`,
    ];

    readonly dropdownLimitWidthVariants: readonly TuiDropdownWidth[] = [
        `min`,
        `auto`,
        `fixed`,
    ];

    dropdownAlign = this.dropdownAlignVariants[0];
    dropdownDirection: TuiVerticalDirection | null = null;
    dropdownMinHeight = DEFAULT_MIN_HEIGHT;
    dropdownMaxHeight = DEFAULT_MAX_HEIGHT;
    dropdownLimitWidth: TuiDropdownWidth = this.dropdownLimitWidthVariants[0];
    dropdownSided = false;
}
