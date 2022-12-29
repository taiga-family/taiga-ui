import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'portals',
    templateUrl: './portals.template.html',
    changeDetection,
})
export class PortalsComponent {
    host = import('./examples/setup/create-host.md?raw');
    service = import('./examples/setup/create-service.md?raw');
    insert = import('./examples/setup/insert-host.md?raw');

    readonly example1: TuiDocExample = {
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
        'portal/custom-host.module.ts': import(
            './examples/1/portal/сustom-host.module.ts?raw'
        ),
        'portal/custom-host.style.less': import(
            './examples/1/portal/custom-host.style.less?raw'
        ),
    };
}
