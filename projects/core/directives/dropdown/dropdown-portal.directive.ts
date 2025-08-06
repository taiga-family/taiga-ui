import {
    Directive,
    type EmbeddedViewRef,
    inject,
    Input,
    type OnDestroy,
    TemplateRef,
} from '@angular/core';

import {TuiDropdownService} from './dropdown.service';

/**
 * @deprecated use {@link TuiPopup} directive instead
 */
@Directive({
    standalone: true,
    selector: 'ng-template[tuiDropdown]',
})
export class TuiDropdownPortal implements OnDestroy {
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
