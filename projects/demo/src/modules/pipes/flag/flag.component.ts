import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-flag',
    templateUrl: './flag.template.html',
    changeDetection,
})
export class ExampleTuiFlagComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/template.html?raw'),
        TypeScript: import('./examples/1/component.ts?raw'),
    };
}
