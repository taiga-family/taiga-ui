import {Directive} from '@angular/core';
import {TuiDropdownPortal} from '@taiga-ui/core/directives/dropdown';

@Directive({
    selector: 'ng-template[tuiActionBar]',
    inputs: ['tuiDropdown: tuiActionBar'],
})
export class TuiActionBarDirective extends TuiDropdownPortal {}
