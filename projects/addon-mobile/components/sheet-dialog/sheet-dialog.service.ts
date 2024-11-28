import {inject, Injectable} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiPopoverService, TuiThemeColorService} from '@taiga-ui/cdk/services';
import {TUI_DIALOGS} from '@taiga-ui/core/components/dialog';
import {pairwise, startWith} from 'rxjs';

import {TuiSheetDialogComponent} from './sheet-dialog.component';
import type {TuiSheetDialogOptions} from './sheet-dialog.options';
import {TUI_SHEET_DIALOG_OPTIONS} from './sheet-dialog.options';

const THEME = '#404040';

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new TuiSheetDialogService(
            TUI_DIALOGS,
            TuiSheetDialogComponent,
            inject(TUI_SHEET_DIALOG_OPTIONS),
        ),
})
export class TuiSheetDialogService extends TuiPopoverService<TuiSheetDialogOptions<any>> {
    private readonly theme = inject(TuiThemeColorService);
    private initial = this.theme.color;

    protected readonly $ = this.items$
        .pipe(startWith([]), pairwise(), takeUntilDestroyed())
        .subscribe(([prev, next]) => {
            if (!prev.length && next.length) {
                this.initial = this.theme.color;
                this.theme.color = THEME;
            }

            if (!next.length && prev.length) {
                this.theme.color = this.initial;
            }
        });
}
