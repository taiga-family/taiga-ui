import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeXL, TuiSizeXS} from '@taiga-ui/core';
import {TuiMarkerIconModeT} from '@taiga-ui/kit';

@Component({
    selector: `example-tui-marker-icon`,
    changeDetection,
    templateUrl: `./marker-icon.template.html`,
    styleUrls: [`./marker-icon.style.less`],
})
export class ExampleTuiMarkerIconComponent {
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
        LESS: import(`!!raw-loader!./examples/2/index.less`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/3/index.ts`),
        HTML: import(`!!raw-loader!./examples/3/index.html`),
    };

    readonly icons = [`tuiIconAttachLarge`, `tuiIconCallLarge`, `tuiIconStarLarge`];

    selectedIcon = this.icons[0];

    readonly sizeVariants: ReadonlyArray<TuiSizeXS | TuiSizeXL> = [
        `xs`,
        `s`,
        `m`,
        `l`,
        `xl`,
    ];

    size: TuiSizeXS | TuiSizeXL = this.sizeVariants[2];

    readonly modeVariants: readonly TuiMarkerIconModeT[] = [
        `link`,
        `primary`,
        `warning`,
        `white`,
        `secondary`,
        `success`,
        `error`,
    ];

    mode: TuiMarkerIconModeT | null = null;
}
