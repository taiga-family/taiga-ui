import {Directive, Injectable} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import type {TuiDriver} from '@taiga-ui/core/abstract';
import {AbstractTuiDriverDirective} from '@taiga-ui/core/abstract';
import {Subject} from 'rxjs';

@Injectable()
export class TuiDropdownDriver extends Subject<boolean> implements TuiDriver {
    public readonly type = 'dropdown';
}

@Directive({
    standalone: true,
    selector: '[tuiDropdownDriver]',
    providers: [TuiDestroyService],
})
export class TuiDropdownDriverDirective extends AbstractTuiDriverDirective {
    public readonly type = 'dropdown';
}
