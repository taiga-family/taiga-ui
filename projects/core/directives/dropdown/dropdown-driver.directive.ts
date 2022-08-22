import {Directive} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {AbstractTuiDriverDirective} from '@taiga-ui/core/abstract';

@Directive({
    selector: `[tuiDropdown]`,
    providers: [TuiDestroyService],
})
export class TuiDropdownDriverDirective extends AbstractTuiDriverDirective {}
