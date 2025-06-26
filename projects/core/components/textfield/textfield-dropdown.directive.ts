import {Directive} from '@angular/core';
import {TuiDropdownContent} from '@taiga-ui/core/directives/dropdown';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiTextfieldDropdown]',
})
export class TuiTextfieldDropdownDirective extends TuiDropdownContent {}

/**
 * @deprecated use {@link TuiDropdownContent} instead
 */
@Directive({
    standalone: true,
})
export class TuiWithTextfieldDropdown {}
