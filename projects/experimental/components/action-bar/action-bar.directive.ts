import {Directive} from '@angular/core';
import {TuiPortalDirective} from '@taiga-ui/cdk';

@Directive({
    selector: 'ng-template[tuiActionBar]',
    inputs: ['tuiPortal: tuiActionBar'],
})
export class TuiActionBarDirective extends TuiPortalDirective {}
