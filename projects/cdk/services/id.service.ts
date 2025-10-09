import {inject, Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TuiIdService {
    private static autoId = 0;

    public generate(): string {
        return `tui_${TuiIdService.autoId++}}`;
    }
}

export function tuiInjectId(): string {
    return inject(TuiIdService).generate();
}
