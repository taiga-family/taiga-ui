import {Directive} from '@angular/core';
import {TuiDropdownPortal} from '@taiga-ui/core/directives/dropdown';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiActionBar]',
    inputs: ['tuiDropdown: tuiActionBar'],
})
export class TuiActionBarDirective extends TuiDropdownPortal {}
