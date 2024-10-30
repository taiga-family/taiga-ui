import {Injectable} from '@angular/core';
import {TuiPortalService} from '@taiga-ui/cdk/classes';
import type {TuiVerticalDirection} from '@taiga-ui/core/types';
import type {Observable} from 'rxjs';
import {distinctUntilChanged, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TuiDropdownService extends TuiPortalService {
    private readonly dropDirectionSubject = new Subject<TuiVerticalDirection>();

    public readonly dropdownDirection$: Observable<TuiVerticalDirection> =
        this.dropDirectionSubject.asObservable().pipe(distinctUntilChanged());

    public publishDropdownDirection(direction: TuiVerticalDirection): void {
        this.dropDirectionSubject.next(direction);
    }
}
