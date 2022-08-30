import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiHorizontalDirection} from '@taiga-ui/core';

@Component({
    selector: `example-tui-link`,
    templateUrl: `./link.template.html`,
    changeDetection,
})
export class ExampleTuiLinkComponent {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`./examples/4/index.ts?raw`),
        HTML: import(`./examples/4/index.html?raw`),
        LESS: import(`./examples/4/index.less?raw`),
    };

    pseudo = false;
    iconRotated = false;

    readonly modeValues = [`positive`, `negative`] as const;

    mode: 'positive' | 'negative' | null = null;

    readonly iconAlignValues: readonly TuiHorizontalDirection[] = [`right`, `left`];

    icon = ``;

    readonly iconVariants = [`tuiIconStarLarge`, `tuiIconGeoLarge`];

    iconAlign: TuiHorizontalDirection = this.iconAlignValues[0];
}
