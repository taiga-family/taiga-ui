import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-mapper',
    templateUrl: './mapper.template.html',
    styleUrls: ['./mapper.style.less'],
    changeDetection,
})
export class ExampleTuiMapperComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/component.ts?raw'),
        HTML: import('./examples/1/template.html?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/component.ts?raw'),
        HTML: import('./examples/2/template.html?raw'),
    };
}
