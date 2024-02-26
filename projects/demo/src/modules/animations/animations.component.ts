import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-animations',
    templateUrl: './animations.template.html',
    styleUrls: ['./animations.style.less'],
    changeDetection,
})
export class ExampleAnimationsComponent {
    protected speed = 1000;
    protected readonly speedTicksLabels: number[] = [0, 600, 1200, 1800, 2400, 3000];

    protected readonly heightCollapseExample: TuiDocExample = {
        HTML: import('./examples/height-collapse/index.html?raw'),
        TypeScript: import('./examples/height-collapse/index.ts?raw'),
        LESS: import('./examples/height-collapse/index.less?raw'),
    };

    protected readonly widthCollapseExample: TuiDocExample = {
        HTML: import('./examples/width-collapse/index.html?raw'),
        TypeScript: import('./examples/width-collapse/index.ts?raw'),
        LESS: import('./examples/width-collapse/index.less?raw'),
    };

    protected readonly fadeInExample: TuiDocExample = {
        HTML: import('./examples/fade-in/index.html?raw'),
        TypeScript: import('./examples/fade-in/index.ts?raw'),
        LESS: import('./examples/fade-in/index.less?raw'),
    };

    protected readonly scaleInExample: TuiDocExample = {
        HTML: import('./examples/scale-in/index.html?raw'),
        TypeScript: import('./examples/scale-in/index.ts?raw'),
        LESS: import('./examples/scale-in/index.less?raw'),
    };

    protected readonly slideInExample: TuiDocExample = {
        HTML: import('./examples/slide-in/index.html?raw'),
        TypeScript: import('./examples/slide-in/index.ts?raw'),
        LESS: import('./examples/slide-in/index.less?raw'),
    };

    protected readonly dropdownExample: TuiDocExample = {
        HTML: import('./examples/dropdown/index.html?raw'),
        TypeScript: import('./examples/dropdown/index.ts?raw'),
        LESS: import('./examples/dropdown/index.less?raw'),
    };
}
