import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-active-zone',
    templateUrl: './active-zone.template.html',
    styleUrls: ['./active-zone.style.less'],
    changeDetection,
})
export class ExampleTuiActiveZoneComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    protected readonly exampleComponent = import('./examples/import/component.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };
}
