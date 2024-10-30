import {Injectable} from '@angular/core';
import type {TuiPortalItem} from '@taiga-ui/core/types';
import type {Observable} from 'rxjs';
import {BehaviorSubject, distinctUntilChanged, Subject} from 'rxjs';

import type {TuiHintDirection} from './hint-options.directive';

/**
 * Service for displaying hints/tooltips
 */
@Injectable({
    providedIn: 'root',
})
export class TuiHintService extends BehaviorSubject<readonly TuiPortalItem[]> {
    private readonly hintDirectionSubject = new Subject<TuiHintDirection>();
    public readonly hintDirection$: Observable<TuiHintDirection> =
        this.hintDirectionSubject.asObservable().pipe(distinctUntilChanged());

    constructor() {
        super([]);
    }

    public add(directive: TuiPortalItem): void {
        this.next(this.value.concat(directive));
    }

    public remove(directive: TuiPortalItem): void {
        if (this.value.includes(directive)) {
            this.next(this.value.filter((hint) => hint !== directive));
        }
    }

    public publishHintDirection(direction: TuiHintDirection): void {
        this.hintDirectionSubject.next(direction);
    }
}
