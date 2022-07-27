import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

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
        HTML: import(`!!raw-loader!./examples/height-collapse/index.html`),
        TypeScript: import(`!!raw-loader!./examples/height-collapse/index.ts`),
        LESS: import(`!!raw-loader!./examples/height-collapse/index.less`),
    };

    readonly widthCollapseExample: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/width-collapse/index.html`),
        TypeScript: import(`!!raw-loader!./examples/width-collapse/index.ts`),
        LESS: import(`!!raw-loader!./examples/width-collapse/index.less`),
    };

    readonly fadeInExample: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/fade-in/index.html`),
        TypeScript: import(`!!raw-loader!./examples/fade-in/index.ts`),
        LESS: import(`!!raw-loader!./examples/fade-in/index.less`),
    };

    readonly scaleInExample: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/scale-in/index.html`),
        TypeScript: import(`!!raw-loader!./examples/scale-in/index.ts`),
        LESS: import(`!!raw-loader!./examples/scale-in/index.less`),
    };
}
