import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeL, TuiSizeXS} from '@taiga-ui/core';
import {TuiStatus} from '@taiga-ui/kit';

@Component({
    selector: 'example-badge',
    templateUrl: './badge.template.html',
    changeDetection,
})
export class ExampleTuiBadgeComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        TypeScript: import('./examples/2/index.ts?raw'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
    };

    readonly example4: TuiDocExample = {
        HTML: import('./examples/4/index.html?raw'),
        TypeScript: import('./examples/4/index.ts?raw'),
    };

    readonly statusVariants: readonly TuiStatus[] = [
        'default',
        'primary',
        'custom',
        'success',
        'error',
        'warning',
        'info',
        'neutral',
    ];

    status = this.statusVariants[0];

    values: {[key: string]: number | string} = {
        '""': '',
        '"100"': '100',
        '5': 5,
        '100': 100,
        Taiga: 'Taiga',
        'Very long text': 'Very long text',
    };

    readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeXS> = ['xs', 's', 'm', 'l'];

    size: TuiSizeL | TuiSizeXS = this.sizeVariants[1];

    valueVariants: ReadonlyArray<number | string> = Object.keys(this.values);

    value: number | string = 'Taiga';

    hoverable = false;

    withIcon = false;
}
