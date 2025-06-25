import {ContentChild, Directive, TemplateRef} from '@angular/core';
import {tuiDropdown} from '@taiga-ui/core/directives/dropdown';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiTextfieldDropdown]',
})
export class TuiTextfieldDropdownDirective {}

/**
 * @deprecated use {@link TuiDropdownContent} instead
 */
@Directive({
    standalone: true,
})
export class TuiWithTextfieldDropdown {
    private readonly dropdown = tuiDropdown(null);

    @ContentChild(TuiTextfieldDropdownDirective, {read: TemplateRef, descendants: true})
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
    }
}
