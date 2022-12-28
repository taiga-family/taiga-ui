import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeS, TuiSizeXL} from '@taiga-ui/core';

@Component({
    selector: 'example-tui-progress-circle',
    templateUrl: './progress-circle.template.html',
    styleUrls: ['./progress-circle.style.less'],
    changeDetection,
})
export class ExampleProgressCircleComponent {
    value = 6;
    max = 10;

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeXL> = ['s', 'm', 'l', 'xl'];
    size: TuiSizeS | TuiSizeXL = this.sizeVariants[1];

    readonly colorVariants: readonly string[] = [
        'var(--tui-primary)',
        'lightskyblue',
        '#3682db',
        'rgba(74, 201, 155, 1)',
        'url(#gradient)',
    ];

    color = this.colorVariants[0];

    readonly basicExample: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
    };

    readonly sizesExample: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
        TypeScript: import('./examples/2/index.ts?raw'),
    };

    readonly labelExample: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
    };

    readonly colorsExample: TuiDocExample = {
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
        TypeScript: import('./examples/4/index.ts?raw'),
    };

    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');
}
