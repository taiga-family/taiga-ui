import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-animations`,
    templateUrl: `./animations.template.html`,
    styleUrls: [`./animations.style.less`],
    changeDetection,
})
export class ExampleAnimationsComponent {
    speed = 1000;
    readonly speedTicksLabels: number[] = [0, 600, 1200, 1800, 2400, 3000];

    readonly heightCollapseExample: TuiDocExample = {
        HTML: import(`./examples/height-collapse/index.html?raw`),
        TypeScript: import(`./examples/height-collapse/index.ts?raw`),
        LESS: import(`./examples/height-collapse/index.less?raw`),
    };

    readonly widthCollapseExample: TuiDocExample = {
        HTML: import(`./examples/width-collapse/index.html?raw`),
        TypeScript: import(`./examples/width-collapse/index.ts?raw`),
        LESS: import(`./examples/width-collapse/index.less?raw`),
    };

    readonly fadeInExample: TuiDocExample = {
        HTML: import(`./examples/fade-in/index.html?raw`),
        TypeScript: import(`./examples/fade-in/index.ts?raw`),
        LESS: import(`./examples/fade-in/index.less?raw`),
    };

    readonly scaleInExample: TuiDocExample = {
        HTML: import(`./examples/scale-in/index.html?raw`),
        TypeScript: import(`./examples/scale-in/index.ts?raw`),
        LESS: import(`./examples/scale-in/index.less?raw`),
    };
}
