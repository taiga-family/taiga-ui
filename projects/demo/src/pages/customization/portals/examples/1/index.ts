import {Component, type EmbeddedViewRef, inject, type TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiIcon} from '@taiga-ui/core';

import {CustomPortalService} from './service';

@Component({
    imports: [TuiButton, TuiIcon],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Example {
    private readonly customPortalService = inject(CustomPortalService);

    protected templates: Array<EmbeddedViewRef<unknown>> = [];

    protected addTemplate(template: TemplateRef<unknown>): void {
        this.templates.push(this.customPortalService.add(template));
    }

    protected removeTemplate(): void {
        this.templates.pop()?.destroy();
    }
}
