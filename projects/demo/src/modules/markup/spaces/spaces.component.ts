import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'spaces',
    templateUrl: './spaces.template.html',
    changeDetection,
})
export class SpacesComponent {
    protected readonly exampleBasicImportsLess = import(
        './examples/import/basic-imports-less.md?raw'
    );

    protected readonly exampleIndexLess = import('./examples/import/index-less.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.style.less?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.style.less?raw'),
    };
}
