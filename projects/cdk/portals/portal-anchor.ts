import {Directive, inject, ViewContainerRef} from '@angular/core';

@Directive({selector: '[tuiPortalAnchor]'})
export class TuiPortalAnchor {
    public readonly vcr = inject(ViewContainerRef);
}
