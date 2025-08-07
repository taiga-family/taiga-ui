import {inject, Injectable} from '@angular/core';
import {type TuiDialogOptions, TuiDialogService} from '@taiga-ui/core/components/dialog';
import {defer, type Observable, of} from 'rxjs';

import {TUI_CONFIRM, type TuiConfirmData} from './confirm.component';

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
