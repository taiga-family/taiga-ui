import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample, TuiDocumentationProperty} from '@taiga-ui/addon-doc';
import {TuiOrientation, TuiSizeL} from '@taiga-ui/core';

@Component({
    selector: 'example-group',
    templateUrl: './group.template.html',
    styleUrls: ['./group.style.less'],
    changeDetection,
})
export class ExampleTuiGroupComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.style.less?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    adaptive = false;
    rounded = true;
    collapsed = false;

    readonly orientationVariants: readonly TuiOrientation[] = ['horizontal', 'vertical'];

    orientation: TuiOrientation = this.orientationVariants[0];

    readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    size: TuiSizeL = this.sizeVariants[0];

    readonly groupBaseProperties: Record<string, TuiDocumentationProperty> = {
        tuiGroup: {
            type: null,
        },
    };

    readonly buttonBaseProperties: Record<string, TuiDocumentationProperty> = {
        tuiButton: {
            type: null,
        },
        size: {
            type: null,
            value: 'l',
        },
        type: {
            type: null,
            value: 'button',
        },
        appearance: {
            type: null,
            value: 'outline',
        },
    };
}
