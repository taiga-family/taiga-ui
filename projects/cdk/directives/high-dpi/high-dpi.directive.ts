import {Directive, Inject, TemplateRef, ViewContainerRef} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

/**
 * Only adds current content if user has High DPI display
 * @dynamic
 */
@Directive({
    selector: `[tuiHighDpi]`,
})
export class TuiHighDpiDirective {
    constructor(
        @Inject(WINDOW) {devicePixelRatio}: Window,
        @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
        @Inject(TemplateRef) templateRef: TemplateRef<Record<string, unknown>>,
    ) {
        if (devicePixelRatio > 1) {
            viewContainer.createEmbeddedView(templateRef);
        }
    }
}
