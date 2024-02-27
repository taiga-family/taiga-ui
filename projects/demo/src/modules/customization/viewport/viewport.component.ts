import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-viewport',
    templateUrl: './viewport.template.html',
    changeDetection,
})
export class ExampleTuiViewportComponent {
    protected readonly providers = import('./examples/import/providers.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    protected readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'), // shared
        'portal-host.component.ts': import('./examples/2/portal-host.ts?raw'),
    };
}
