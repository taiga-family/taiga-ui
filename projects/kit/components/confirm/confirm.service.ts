import {inject, Injectable} from '@angular/core';
import {type TuiDialogOptions, TuiDialogService} from '@taiga-ui/core/components/dialog';
import {defer, type Observable, of} from 'rxjs';

import {TUI_CONFIRM_DIALOG, type TuiConfirmData} from './confirm.component';

@Injectable()
export class TuiConfirmService {
    private readonly dialogs = inject(TuiDialogService);
    private readonly component = inject(TUI_CONFIRM_DIALOG);
    private dirty = false;

    public markAsDirty(): void {
        this.dirty = true;
    }

    public markAsPristine(): void {
        this.dirty = false;
    }

    public withConfirm<T = TuiConfirmData>(
        options: Partial<TuiDialogOptions<NoInfer<T>>>,
    ): Observable<boolean> {
        return defer(() =>
            this.dirty
                ? this.dialogs.open<boolean>(this.component, {size: 's', ...options})
                : of(true),
        );
    }
}
