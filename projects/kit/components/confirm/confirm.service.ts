import {inject, Injectable} from '@angular/core';
import type {TuiDialogOptions} from '@taiga-ui/core';
import {TuiDialogService} from '@taiga-ui/core';
import type {Observable} from 'rxjs';
import {defer, of} from 'rxjs';

import type {TuiConfirmData} from './confirm.component';
import {TUI_CONFIRM} from './confirm.component';

@Injectable()
export class TuiConfirmService {
    private readonly dialogs = inject(TuiDialogService);
    private dirty = false;

    public markAsDirty(): void {
        this.dirty = true;
    }

    public markAsPristine(): void {
        this.dirty = false;
    }

    public withConfirm(
        options: Partial<TuiDialogOptions<TuiConfirmData>>,
    ): Observable<boolean> {
        return defer(() =>
            this.dirty
                ? this.dialogs.open<boolean>(TUI_CONFIRM, {
                      size: 's',
                      ...options,
                  })
                : of(true),
        );
    }
}
