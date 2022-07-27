import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `portals`,
    templateUrl: `./portals.template.html`,
    changeDetection,
})
export class PortalsComponent {
    host = import(`!!raw-loader!./examples/setup/create-host.md`);
    service = import(`!!raw-loader!./examples/setup/create-service.md`);
    insert = import(`!!raw-loader!./examples/setup/insert-host.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
        LESS: import(`!!raw-loader!./examples/1/index.less`),
        'portal/custom-portal.service.ts': import(
            `!!raw-loader!./examples/1/portal/custom-portal.service.ts`
        ),
        'portal/custom-host.component.ts': import(
            `!!raw-loader!./examples/1/portal/custom-host.component`
        ),
        'portal/custom-host.template.html': import(
            `!!raw-loader!./examples/1/portal/custom-host.template.html`
        ),
        'portal/custom-host.module.ts': import(
            `!!raw-loader!./examples/1/portal/сustom-host.module`
        ),
        'portal/custom-host.style.less': import(
            `!!raw-loader!./examples/1/portal/custom-host.style.less`
        ),
    };
}
