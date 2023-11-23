import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample, TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiInteractiveStateT} from '@taiga-ui/core';

@Component({
    selector: 'example-appearance',
    templateUrl: './appearance.template.html',
    changeDetection,
})
export class ExampleTuiAppearanceComponent {
    readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    appearances = ['primary', 'secondary', 'flat'];
    appearance = this.appearances[0];

    states: readonly TuiInteractiveStateT[] = ['hover', 'active', 'disabled'];
    state: TuiInteractiveStateT | null = null;

    focus: boolean | null = null;
}
