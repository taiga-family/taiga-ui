import {Directive, ElementRef, Inject} from '@angular/core';
import {TuiDropdownPortalService} from '@taiga-ui/cdk';
import {tuiAsViewport, TuiRectAccessor} from '@taiga-ui/core';

import {TuiEditorPortalService} from './editor-portal.service';

@Directive({
    selector: '[tuiEditorPortal]',
    providers: [
        {provide: TuiDropdownPortalService, useExisting: TuiEditorPortalService},
        tuiAsViewport(TuiEditorPortalDirective),
    ],
})
export class TuiEditorPortalDirective extends TuiRectAccessor {
    readonly type = 'viewport';

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {
        super();
    }

    getClientRect(): ClientRect {
        return this.elementRef.nativeElement.getBoundingClientRect();
    }
}
