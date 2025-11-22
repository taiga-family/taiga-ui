import {Directive, Injectable} from '@angular/core';
import {type TuiDriver, TuiDriverDirective} from '@taiga-ui/core/classes';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class TuiDropdownDriver extends BehaviorSubject<boolean> implements TuiDriver {
    public readonly type = 'dropdown';

    constructor() {
        super(false);
    }
}

@Directive()
export class TuiDropdownDriverDirective extends TuiDriverDirective {
    public readonly type = 'dropdown';
}
