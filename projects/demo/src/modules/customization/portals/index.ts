import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAddonDoc, type TuiDocExample} from '@taiga-ui/addon-doc';

import {TuiPortalsExample1} from './examples/1';

@Component({
    standalone: true,
    imports: [TuiAddonDoc, TuiPortalsExample1],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected host = import('./examples/setup/create-host.md?raw');
    protected service = import('./examples/setup/create-service.md?raw');
    protected insert = import('./examples/setup/insert-host.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
        'portal/custom-portal.service.ts': import(
            './examples/1/portal/custom-portal.service.ts?raw'
        ),
        'portal/custom-host.component.ts': import(
            './examples/1/portal/custom-host.component.ts?raw'
        ),
        'portal/custom-host.template.html': import(
            './examples/1/portal/custom-host.template.html?raw'
        ),
        'portal/custom-host.style.less': import(
            './examples/1/portal/custom-host.style.less?raw'
        ),
    };
}
