import {
    Directive,
    type EmbeddedViewRef,
    inject,
    input,
    type OnChanges,
    type OnDestroy,
    TemplateRef,
} from '@angular/core';

import {TuiPopupService} from './popup.service';

@Directive({selector: 'ng-template[tuiPopup]'})
export class TuiPopup implements OnChanges, OnDestroy {
    readonly #template = inject(TemplateRef);
    readonly #service = inject(TuiPopupService);
    #ref?: EmbeddedViewRef<unknown>;

    public readonly show = input(false, {alias: 'tuiPopup'});

    public ngOnChanges(): void {
        this.#ref?.destroy();

        if (this.show()) {
            this.#ref = this.#service.add(this.#template);
        }
    }

    public ngOnDestroy(): void {
        this.#ref?.destroy();
    }
}
