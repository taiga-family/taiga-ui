import {Inject, Injectable} from '@angular/core';
import {TuiDialogOptions, TuiDialogService} from '@taiga-ui/core';
import {TUI_PROMPT, TuiPromptData} from '@taiga-ui/kit/components';
import {defer, Observable, of} from 'rxjs';

@Injectable()
export class TuiDialogFormService {
    private dirty = false;

    constructor(@Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {}

    markAsDirty(): void {
        this.dirty = true;
    }

    markAsPristine(): void {
        this.dirty = false;
    }

    withPrompt(options: Partial<TuiDialogOptions<TuiPromptData>>): Observable<boolean> {
        return defer(() =>
            this.dirty
                ? this.dialogs.open(TUI_PROMPT, {
                      size: `s`,
                      ...options,
                  })
                : of(true),
        );
    }
}
