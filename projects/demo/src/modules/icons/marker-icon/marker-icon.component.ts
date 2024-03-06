import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';
import type {TuiMarkerIconMode} from '@taiga-ui/kit';

@Component({
    selector: 'example-tui-marker-icon',
    templateUrl: './marker-icon.template.html',
    styleUrls: ['./marker-icon.style.less'],
    changeDetection,
})
export class ExampleTuiMarkerIconComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    protected readonly icons = [
        'tuiIconPaperclipLarge',
        'tuiIconPhoneLarge',
        'tuiIconStarLarge',
    ];

    protected selectedIcon = this.icons[0];

    protected readonly sizeVariants: ReadonlyArray<TuiSizeXXL | TuiSizeXXS> = [
        'xxs',
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
    ];

    protected size = this.sizeVariants[2];

    protected readonly modeVariants: readonly TuiMarkerIconMode[] = [
        'link',
        'primary',
        'warning',
        'white',
        'secondary',
        'success',
        'error',
    ];

    protected mode: TuiMarkerIconMode | null = null;
}
