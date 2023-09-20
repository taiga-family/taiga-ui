import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {RawLoaderContent, TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-compass',
    templateUrl: './compass.template.html',
    changeDetection,
})
export class ExampleTuiCompassComponent {
    readonly exampleModule: RawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    readonly exampleHtml: RawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
    };

    colorVariants = ['#428bf9', 'rgb(234, 56, 24)', 'var(--tui-positive)', ''];

    color = this.colorVariants[0];

    degrees = 90;
}
