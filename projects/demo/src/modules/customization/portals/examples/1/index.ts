import {Component, EmbeddedViewRef, Inject, TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {CustomPortalService} from './portal/custom-portal.service';

@Component({
    selector: `tui-portals-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
})
export class TuiPortalsExample1 {
    templates: Array<EmbeddedViewRef<unknown>> = [];

    constructor(
        @Inject(CustomPortalService)
        private readonly customPortalService: CustomPortalService,
    ) {}

    addTemplate(template: TemplateRef<unknown>): void {
        this.templates.push(this.customPortalService.addTemplate(template));
    }

    removeTemplate(): void {
        const viewRef = this.templates.pop();

        if (viewRef) {
            this.customPortalService.removeTemplate(viewRef);
        }
    }
}
