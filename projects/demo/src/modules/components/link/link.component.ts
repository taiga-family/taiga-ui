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
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/3/index.ts`),
        HTML: import(`!!raw-loader!./examples/3/index.html`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/4/index.ts`),
        HTML: import(`!!raw-loader!./examples/4/index.html`),
        LESS: import(`!!raw-loader!./examples/4/index.less`),
    };

    pseudo = false;
    iconRotated = false;

    readonly modeValues = [`positive`, `negative`] as const;

    mode: 'positive' | 'negative' | null = null;

    readonly iconAlignValues: readonly TuiHorizontalDirection[] = [`right`, `left`];

    icon: string | null = null;

    readonly iconVariants = [`tuiIconStarLarge`, `tuiIconGeoLarge`];

    iconAlign: TuiHorizontalDirection = this.iconAlignValues[0];
}
