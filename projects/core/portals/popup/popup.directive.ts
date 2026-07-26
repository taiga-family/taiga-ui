import {
    ChangeDetectorRef,
    Directive,
    type EmbeddedViewRef,
    inject,
    input,
    type OnChanges,
    type OnDestroy,
    TemplateRef,
} from '@angular/core';

import {TuiPopupService} from './popup.service';
import {TUI_CDR} from './popups.component';

@Directive({selector: 'ng-template[tuiPopup]'})
export class TuiPopup implements OnChanges, OnDestroy {
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly template = inject(TemplateRef);
    private readonly service = inject(TuiPopupService);
    private ref?: EmbeddedViewRef<unknown>;

    public readonly show = input(false, {alias: 'tuiPopup'});

    public ngOnChanges(): void {
        this.ref?.destroy();

        if (this.show()) {
            this.ref = this.service.add(this.template, {[TUI_CDR]: this.cdr});
        }
    }

    public ngOnDestroy(): void {
        this.ref?.destroy();
    }
}
