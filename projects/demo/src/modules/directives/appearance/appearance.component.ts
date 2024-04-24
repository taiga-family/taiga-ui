import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample, TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import type {TuiInteractiveState} from '@taiga-ui/core';

@Component({
    selector: 'example-appearance',
    templateUrl: './appearance.template.html',
    changeDetection,
})
export class ExampleTuiAppearanceComponent {
    protected readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    protected readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    protected readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    protected appearances = ['primary', 'secondary', 'flat'];
    protected appearance = this.appearances[0];

    protected states: readonly TuiInteractiveState[] = ['hover', 'active', 'disabled'];
    protected state: TuiInteractiveState | null = null;

    protected focus: boolean | null = null;
}
