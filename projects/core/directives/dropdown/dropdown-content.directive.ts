import {Directive, inject, type OnDestroy, TemplateRef} from '@angular/core';

import {TuiDropdownDirective} from './dropdown.directive';

// TODO: Change selector to tuiDropdown in v5
@Directive({
    standalone: true,
    selector: 'ng-template[tuiDropdownContent]',
})
export class TuiDropdownContent implements OnDestroy {
    private readonly directive = inject(TuiDropdownDirective);

    constructor() {
        this.directive.tuiDropdown = inject(TemplateRef);
    }

    public ngOnDestroy(): void {
        this.directive.tuiDropdown = null;
    }
}
