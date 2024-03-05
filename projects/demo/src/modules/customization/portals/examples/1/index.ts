import {Component, type EmbeddedViewRef, inject, type TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButtonModule, TuiSvgModule} from '@taiga-ui/core';

import {CustomPortalService} from './portal/custom-portal.service';

@Component({
    standalone: true,
    selector: 'tui-portals-example-1',
    imports: [TuiSvgModule, TuiButtonModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export class TuiPortalsExample1 {
    private readonly customPortalService = inject(CustomPortalService);

    protected templates: Array<EmbeddedViewRef<unknown>> = [];

    protected addTemplate(template: TemplateRef<unknown>): void {
        this.templates.push(this.customPortalService.addTemplate(template));
    }

    protected removeTemplate(): void {
        const viewRef = this.templates.pop();

        if (viewRef) {
            this.customPortalService.removeTemplate(viewRef);
        }
    }
}
