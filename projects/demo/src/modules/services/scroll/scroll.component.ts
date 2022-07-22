import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

// TODO: Update to use new scroll$
@Component({
    selector: 'example-tui-scrollbar',
    templateUrl: './scroll.template.html',
    styleUrls: ['./scroll.style.less'],
    changeDetection,
})
export class ExampleTuiScrollComponent {
    readonly exampleScroll = import('./examples/import/scroll.md?raw');
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleInjectService = import('./examples/import/inject-service.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };
}
