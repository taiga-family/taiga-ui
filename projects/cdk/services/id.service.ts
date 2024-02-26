import {Injectable} from '@angular/core';

const TUI = 'tui_';

/**
 * Generates unique ids
 */
@Injectable({
    providedIn: 'root',
})
export class TuiIdService {
    private static autoId = 0;

    public generate(): string {
        return `${TUI}${TuiIdService.autoId++}${Date.now()}`;
    }
}
