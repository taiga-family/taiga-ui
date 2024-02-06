import {
    Directive,
    EmbeddedViewRef,
    inject,
    Input,
    OnDestroy,
    TemplateRef,
} from '@angular/core';

import {TuiDropdownService} from './dropdown.service';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiDropdown]',
})
export class TuiDropdownPortalDirective implements OnDestroy {
    private readonly template = inject(TemplateRef);
    private readonly service = inject(TuiDropdownService);

    private viewRef?: EmbeddedViewRef<unknown>;

    @Input()
    set tuiDropdown(show: boolean) {
        this.viewRef?.destroy();

        if (show) {
            this.viewRef = this.service.addTemplate(this.template);
        }
    }

    ngOnDestroy(): void {
        this.viewRef?.destroy();
    }
}
