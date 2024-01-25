import {Directive, inject, TemplateRef, ViewContainerRef} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

/**
 * Only adds current content if user has High DPI display
 */
@Directive({
    standalone: true,
    selector: '[tuiHighDpi]',
})
export class TuiHighDpiDirective {
    protected readonly ref =
        inject(WINDOW).devicePixelRatio > 1 &&
        inject(ViewContainerRef).createEmbeddedView(inject(TemplateRef));
}
