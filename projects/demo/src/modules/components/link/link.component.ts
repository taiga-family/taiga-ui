import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiHorizontalDirection} from '@taiga-ui/core';

@Component({
    selector: 'example-tui-link',
    templateUrl: './link.template.html',
    changeDetection,
})
export class ExampleTuiLinkComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
    };

    protected pseudo = false;
    protected iconRotated = false;

    protected readonly modeValues = ['positive', 'negative'] as const;

    protected mode: 'negative' | 'positive' | null = null;

    protected readonly iconAlignValues: readonly TuiHorizontalDirection[] = [
        'right',
        'left',
    ];

    protected icon = '';

    protected readonly iconVariants = [
        'tuiIconStarLarge',
        'tuiIconMapPinLarge',
        'tuiIconMapPin',
    ];

    protected iconAlign: TuiHorizontalDirection = this.iconAlignValues[0];

    protected size = '1.5rem';
}
