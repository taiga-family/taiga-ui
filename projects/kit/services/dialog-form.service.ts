import {inject, Injectable} from '@angular/core';
import {TuiDialogOptions, TuiDialogService} from '@taiga-ui/core';
import {TUI_PROMPT, TuiPromptData} from '@taiga-ui/kit/components';
import {defer, Observable, of} from 'rxjs';

@Injectable()
export class TuiDialogFormService {
    private readonly dialogs = inject(TuiDialogService);
    private dirty = false;

    public markAsDirty(): void {
        this.dirty = true;
    }

    public markAsPristine(): void {
        this.dirty = false;
    }

    public withPrompt(
        options: Partial<TuiDialogOptions<TuiPromptData>>,
    ): Observable<boolean> {
        return defer(() =>
            this.dirty
                ? this.dialogs.open<boolean>(TUI_PROMPT, {
                      size: 's',
                      ...options,
                  })
                : of(true),
        );
    }
}
