import type {OnDestroy} from '@angular/core';
import {Directive, inject, TemplateRef} from '@angular/core';
import {TuiDropdownDirective} from '@taiga-ui/core/directives/dropdown';

// TODO: Change selector to tuiDropdown in v5 and move to TuiDropdown
@Directive({
    standalone: true,
    selector: 'ng-template[tuiTextfieldDropdown]',
})
export class TuiTextfieldDropdownDirective implements OnDestroy {
    private readonly directive = inject(TuiDropdownDirective);

    constructor() {
        this.directive.tuiDropdown = inject(TemplateRef);

        if (this.directive.el.matches(':focus-within')) {
            this.directive.toggle(true);
        }
    }

    public ngOnDestroy(): void {
        this.directive.tuiDropdown = null;
    }
}

/**
 * @deprecated remove in v5
 */
@Directive({
    standalone: true,
})
export class TuiWithTextfieldDropdown {}
