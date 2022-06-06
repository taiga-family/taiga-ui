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
        HTML: import('!!raw-loader!./examples/1/index.html'),
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
    };

    readonly sizesExample: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/2/index.html'),
        LESS: import('!!raw-loader!./examples/2/index.less'),
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
    };

    readonly labelExample: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/3/index.html'),
        LESS: import('!!raw-loader!./examples/3/index.less'),
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
    };

    readonly colorsExample: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/4/index.html'),
        LESS: import('!!raw-loader!./examples/4/index.less'),
        TypeScript: import('!!raw-loader!./examples/4/index.ts'),
    };

    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');
}
