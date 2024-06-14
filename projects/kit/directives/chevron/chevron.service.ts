import type {Injector} from '@angular/core';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TuiChevronService {
    public getHandler(_injector: Injector): () => string {
        return () => '@tui.chevron-down';
    }
}
