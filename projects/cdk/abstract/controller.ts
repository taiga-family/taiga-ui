/* eslint-disable @typescript-eslint/naming-convention */
import {Directive, OnChanges} from '@angular/core';
import {Subject} from 'rxjs';

/**
 * @deprecated
 * TODO: 3.0 replace with {@link AbstractTuiController}
 */
@Directive()
export abstract class TuiController implements OnChanges {
    readonly change$ = new Subject<void>();

    ngOnChanges(): void {
        this.change$.next();
    }
}

@Directive()
export abstract class AbstractTuiController extends TuiController {}
