import type {EmbeddedViewRef, OnDestroy} from '@angular/core';
import {Directive, inject, Input, TemplateRef} from '@angular/core';

import {TuiPopupService} from './popup.service';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiPopup]',
})
export class TuiPopup implements OnDestroy {
    private readonly template = inject(TemplateRef);
    private readonly service = inject(TuiPopupService);

    private viewRef?: EmbeddedViewRef<unknown>;

    @Input()
    public set tuiPopup(show: boolean) {
        this.viewRef?.destroy();

        if (show) {
            this.viewRef = this.service.addTemplate(this.template);
        }
    }

    public ngOnDestroy(): void {
        this.viewRef?.destroy();
    }
}
