import {Directive, inject, TemplateRef, ViewContainerRef} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';

/**
 * Only adds current content if user has High DPI display
 */
@Directive({
    standalone: true,
    selector: '[tuiHighDpi]',
})
export class TuiHighDpi {
    protected readonly ref =
        inject(WA_WINDOW).devicePixelRatio > 1 &&
        inject(ViewContainerRef).createEmbeddedView(inject(TemplateRef));
}
