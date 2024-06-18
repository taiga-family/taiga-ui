import {Directive} from '@angular/core';
import {TuiDropdownPortal} from '@taiga-ui/core';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiActionBar]',
    inputs: ['tuiDropdown: tuiActionBar'],
})
export class TuiActionBarDirective extends TuiDropdownPortal {}
