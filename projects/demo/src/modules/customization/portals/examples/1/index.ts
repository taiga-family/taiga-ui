import {Component, EmbeddedViewRef, inject, TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {CustomPortalService} from './portal/custom-portal.service';

@Component({
    selector: 'tui-portals-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export class TuiPortalsExample1 {
    private readonly customPortalService = inject(CustomPortalService);

    protected templates: Array<EmbeddedViewRef<unknown>> = [];

    public addTemplate(template: TemplateRef<unknown>): void {
        this.templates.push(this.customPortalService.addTemplate(template));
    }

    public removeTemplate(): void {
        const viewRef = this.templates.pop();

        if (viewRef) {
            this.customPortalService.removeTemplate(viewRef);
        }
    }
}
