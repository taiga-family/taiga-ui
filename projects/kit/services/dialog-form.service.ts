import {Inject, Injectable} from '@angular/core';
import type {TuiDialogOptions} from '@taiga-ui/core';
import {TuiDialogService} from '@taiga-ui/core';
import type {TuiPromptData} from '@taiga-ui/kit/components';
import {TUI_PROMPT} from '@taiga-ui/kit/components';
import type {Observable} from 'rxjs';
import {defer, of} from 'rxjs';

@Injectable()
export class TuiDialogFormService {
    private dirty = false;

    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    ) {}

    markAsDirty(): void {
        this.dirty = true;
    }

    markAsPristine(): void {
        this.dirty = false;
    }

    withPrompt(options: Partial<TuiDialogOptions<TuiPromptData>>): Observable<boolean> {
        return defer(() =>
            this.dirty
                ? this.dialogService.open<boolean>(TUI_PROMPT, {
                      size: `s`,
                      ...options,
                  })
                : of(true),
        );
    }
}
