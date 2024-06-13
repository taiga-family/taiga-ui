import {Directive} from '@angular/core';
import {TuiDropdownPortalDirective} from '@taiga-ui/core';

@Directive({
    standalone: true,
    selector: 'ng-template[tuiActionBar]',
    inputs: ['tuiDropdown: tuiActionBar'],
})
export class TuiActionBarDirective extends TuiDropdownPortalDirective {}
