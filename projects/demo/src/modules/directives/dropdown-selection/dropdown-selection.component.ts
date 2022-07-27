import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    DEFAULT_MAX_HEIGHT,
    DEFAULT_MIN_HEIGHT,
    TuiDropdownWidth,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core';
import {TuiDropdownPosition} from '@taiga-ui/kit';

@Component({
    selector: `example-tui-dropdown-selection`,
    templateUrl: `./dropdown-selection.template.html`,
    styleUrls: [`./dropdown-selection.style.less`],
    changeDetection,
})
export class ExampleTuiDropdownSelectionComponent {
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

    open = false;

    position = this.positionVariants[0];

    tuiDropdownMinHeight = DEFAULT_MIN_HEIGHT;

    tuiDropdownMaxHeight = DEFAULT_MAX_HEIGHT;

    tuiDropdownSided = false;

    alignVariants: TuiHorizontalDirection[] = [`right`, `left`];

    tuiDropdownAlign = this.alignVariants[0];

    readonly dropdownDirectionVariants: readonly TuiVerticalDirection[] = [
        `top`,
        `bottom`,
    ];

    tuiDropdownDirection: TuiVerticalDirection | null = null;

    readonly tuiDropdownLimitWidthVariants: readonly TuiDropdownWidth[] = [
        `fixed`,
        `min`,
        `auto`,
    ];

    tuiDropdownLimitWidth: TuiDropdownWidth = this.tuiDropdownLimitWidthVariants[0];
}
