import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample, TuiRawLoaderContent} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-compass',
    templateUrl: './compass.template.html',
    changeDetection,
})
export class ExampleTuiCompassComponent {
    protected readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    protected readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
    };

    protected colorVariants = ['#428bf9', 'rgb(234, 56, 24)', 'var(--tui-positive)', ''];

    protected color = this.colorVariants[0];

    protected degrees = 90;
}
