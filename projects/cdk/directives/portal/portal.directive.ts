import type {OnDestroy} from '@angular/core';
import {Directive, EmbeddedViewRef, Inject, Input, TemplateRef} from '@angular/core';
import {TuiDropdownPortalService} from '@taiga-ui/cdk/components/dropdown-host';

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
        @Inject(TuiDropdownPortalService)
        private readonly portalService: TuiDropdownPortalService,
    ) {}

    ngOnDestroy(): void {
        this.viewRef?.destroy();
    }
}
