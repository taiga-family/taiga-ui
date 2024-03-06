import type {EmbeddedViewRef, OnDestroy} from '@angular/core';
import {Directive, inject, Input, TemplateRef} from '@angular/core';

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
    public set tuiDropdown(show: boolean) {
        this.viewRef?.destroy();

        if (show) {
            this.viewRef = this.service.addTemplate(this.template);
        }
    }

    public ngOnDestroy(): void {
        this.viewRef?.destroy();
    }
}
