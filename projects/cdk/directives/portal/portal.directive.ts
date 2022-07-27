import {
    Directive,
    EmbeddedViewRef,
    Inject,
    Input,
    OnDestroy,
    TemplateRef,
} from '@angular/core';
import {TuiPortalService} from '@taiga-ui/cdk/components/portal-host';

@Directive({
    selector: `[tuiPortal]`,
})
export class TuiPortalDirective implements OnDestroy {
    private viewRef?: EmbeddedViewRef<unknown>;

    @Input()
    set tuiPortal(show: boolean) {
        this.viewRef?.destroy();

        if (show) {
            this.viewRef = this.portalService.addTemplate(this.templateRef);
        }
    }

    constructor(
        @Inject(TemplateRef)
        private readonly templateRef: TemplateRef<Record<string, unknown>>,
        @Inject(TuiPortalService) private readonly portalService: TuiPortalService,
    ) {}

    ngOnDestroy(): void {
        this.viewRef?.destroy();
    }
}
