import {OnChanges, Directive} from '@angular/core';
import {Subject} from 'rxjs';

@Directive()
export abstract class AbstractTuiController implements OnChanges {
    readonly change$ = new Subject<void>();

    ngOnChanges(): void {
        this.change$.next();
    }
}
