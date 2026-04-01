import"./chunk-HU6DUUP4.js";var o=`import {Component, type EmbeddedViewRef, inject, type TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiIcon} from '@taiga-ui/core';

import {CustomPortalService} from './service';

@Component({
    selector: 'tui-portals-example-1',
    imports: [TuiButton, TuiIcon],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export class TuiPortalsExample1 {
    private readonly customPortalService = inject(CustomPortalService);

    protected templates: Array<EmbeddedViewRef<unknown>> = [];

    protected addTemplate(template: TemplateRef<unknown>): void {
        this.templates.push(this.customPortalService.add(template));
    }

    protected removeTemplate(): void {
        this.templates.pop()?.destroy();
    }
}
`;export{o as default};
