import {isPlatformBrowser} from '@angular/common';
import {Directive, inject, type OnDestroy, PLATFORM_ID, TemplateRef} from '@angular/core';

import {TuiDropdownDirective} from './dropdown.directive';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiDropdown]',
})
export class TuiDropdownContent implements OnDestroy {
    private readonly directive = inject(TuiDropdownDirective);

    constructor() {
        this.directive.tuiDropdown = inject(TemplateRef);

        if (
            isPlatformBrowser(inject(PLATFORM_ID)) &&
            this.directive.el.matches(':focus-within')
        ) {
            this.directive.toggle(true);
        }
    }

    public ngOnDestroy(): void {
        this.directive.tuiDropdown = null;
    }
}
