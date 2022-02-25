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
    template: EmbeddedViewRef<{}> | null = null;

    constructor(
        @Inject(CustomPortalService)
        private readonly customPortalServce: CustomPortalService,
    ) {}

    toggleTemplate(template: TemplateRef<any>) {
        if (this.template) {
            this.customPortalServce.removeTemplate(this.template);
            this.template = null;
        } else {
            this.template = this.customPortalServce.addTemplate(template);
        }
    }
}
