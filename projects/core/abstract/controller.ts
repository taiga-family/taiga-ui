import {Directive, OnChanges} from '@angular/core';
import {Subject} from 'rxjs';

@Directive()
export abstract class Controller implements OnChanges {
    readonly change$ = new Subject<void>();

    ngOnChanges() {
        this.change$.next();
    }
}
