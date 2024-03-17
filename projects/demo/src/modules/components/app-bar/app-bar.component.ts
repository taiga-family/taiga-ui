import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAddonDocModule, type TuiDocExample} from '@taiga-ui/addon-doc';

import {TuiAppBarExample1} from './examples/1';

@Component({
    standalone: true,
    selector: 'example-tui-app-bar',
    imports: [TuiAddonDocModule, TuiAppBarExample1],
    templateUrl: './app-bar.template.html',
    changeDetection,
})
export default class ExampleTuiAppBarComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };
}
