import {Directive, EmbeddedViewRef, Inject, Input, TemplateRef} from '@angular/core';
import {TuiPortalService} from '@taiga-ui/cdk/components/portal-host';

@Directive({
    selector: '[tuiPortal]',
})
export class TuiPortalDirective {
    private viewRef?: EmbeddedViewRef<{}>;

    @Input()
    set tuiPortal(show: boolean) {
        this.viewRef?.destroy();

        if (show) {
            this.viewRef = this.portalService.addTemplate(this.templateRef);
        }
    }

    constructor(
        @Inject(TemplateRef) private readonly templateRef: TemplateRef<{}>,
        @Inject(TuiPortalService) private readonly portalService: TuiPortalService,
    ) {}
}
