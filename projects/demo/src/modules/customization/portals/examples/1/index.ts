import {Component, EmbeddedViewRef, Inject, TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {CustomPortalService} from './portal/custom-portal.service';

@Component({
    selector: 'tui-portals-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export class TuiPortalsExample1 {
    templates: EmbeddedViewRef<{}>[] = [];

    constructor(
        @Inject(CustomPortalService)
        private readonly customPortalServce: CustomPortalService,
    ) {}

    addTemplate(template: TemplateRef<any>) {
        this.templates.push(this.customPortalServce.addTemplate(template));
    }

    removeTemplate() {
        const viewRef = this.templates.pop();

        if (viewRef) {
            this.customPortalServce.removeTemplate(viewRef);
        }
    }
}
