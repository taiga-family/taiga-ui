import {Directive, Injectable} from '@angular/core';
import type {TuiDriver} from '@taiga-ui/core/classes';
import {TuiDriverDirective} from '@taiga-ui/core/classes';
import {Subject} from 'rxjs';

@Injectable()
export class TuiDropdownDriver extends Subject<boolean> implements TuiDriver {
    public readonly type = 'dropdown';
}

@Directive({
    standalone: true,
    selector: '[tuiDropdownDriver]',
})
export class TuiDropdownDriverDirective extends TuiDriverDirective {
    public readonly type = 'dropdown';
}
