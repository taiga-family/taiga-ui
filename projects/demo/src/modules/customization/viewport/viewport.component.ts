import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAddonDocModule, type TuiDocExample} from '@taiga-ui/addon-doc';

import {TuiViewportExample1} from './examples/1';
import {TuiViewportExample2} from './examples/2';

@Component({
    standalone: true,
    selector: 'example-tui-viewport',
    imports: [TuiAddonDocModule, TuiViewportExample1, TuiViewportExample2],
    templateUrl: './viewport.template.html',
    changeDetection,
})
export default class ExampleTuiViewportComponent {
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
