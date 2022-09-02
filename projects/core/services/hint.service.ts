import {Injectable} from '@angular/core';
import type {TuiPortalItem} from '@taiga-ui/core/interfaces';
import {BehaviorSubject} from 'rxjs';

/**
 * Service for displaying hints/tooltips
 */
@Injectable({
    providedIn: `root`,
})
export class TuiHintService extends BehaviorSubject<readonly TuiPortalItem[]> {
    constructor() {
        super([]);
    }

    add(directive: TuiPortalItem): void {
        this.next(this.value.concat(directive));
    }

    remove(directive: TuiPortalItem): void {
        if (this.value.includes(directive)) {
            this.next(this.value.filter(hint => hint !== directive));
        }
    }
}
