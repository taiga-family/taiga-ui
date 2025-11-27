import {inject, Injectable} from '@angular/core';
import {type TuiDialogOptions, TuiDialogService} from '@taiga-ui/core/components/dialog';
import {defer, type Observable, of} from 'rxjs';

import {TUI_CONFIRM_DIALOG, type TuiConfirmData} from './confirm.component';

@Injectable()
export class TuiConfirmService {
    readonly #dialogs = inject(TuiDialogService);
    readonly #component = inject(TUI_CONFIRM_DIALOG);
    #dirty = false;

    public markAsDirty(): void {
        this.#dirty = true;
    }

    public markAsPristine(): void {
        this.#dirty = false;
    }

    public withConfirm<T = TuiConfirmData>(
        options: Partial<TuiDialogOptions<NoInfer<T>>>,
    ): Observable<boolean> {
        return defer(() =>
            this.#dirty
                ? this.#dialogs.open<boolean>(this.#component, {size: 's', ...options})
                : of(true),
        );
    }
}
