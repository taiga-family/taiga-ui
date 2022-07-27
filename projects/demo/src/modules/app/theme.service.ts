import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {BehaviorSubject} from 'rxjs';

export const DEFAULT_THEME = `Open-source`;

@Injectable({
    providedIn: `root`,
})
export class TuiThemeService extends BehaviorSubject<string> {
    constructor(@Inject(LOCAL_STORAGE) private readonly storage: Storage) {
        super(storage.getItem(`theme`) || DEFAULT_THEME);
    }

    next(value: string): void {
        this.storage.setItem(`theme`, value);
        super.next(value);
    }
}
