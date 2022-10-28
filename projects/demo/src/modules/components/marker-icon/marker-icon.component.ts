import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';
import {TuiMarkerIconMode} from '@taiga-ui/kit';

@Component({
    selector: `example-tui-marker-icon`,
    changeDetection,
    templateUrl: `./marker-icon.template.html`,
    styleUrls: [`./marker-icon.style.less`],
})
export class ExampleTuiMarkerIconComponent {
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

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
    };

    readonly icons = [`tuiIconAttachLarge`, `tuiIconCallLarge`, `tuiIconStarLarge`];

    selectedIcon = this.icons[0];

    readonly sizeVariants: ReadonlyArray<TuiSizeXXS | TuiSizeXXL> = [
        `xxs`,
        `xs`,
        `s`,
        `m`,
        `l`,
        `xl`,
        `xxl`,
    ];

    size = this.sizeVariants[2];

    readonly modeVariants: readonly TuiMarkerIconMode[] = [
        `link`,
        `primary`,
        `warning`,
        `white`,
        `secondary`,
        `success`,
        `error`,
    ];

    mode: TuiMarkerIconMode | null = null;
}
