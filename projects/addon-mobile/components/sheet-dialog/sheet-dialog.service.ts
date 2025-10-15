import {inject, Injectable} from '@angular/core';
import {TuiThemeColorService} from '@taiga-ui/cdk/services';
import {TuiModalService} from '@taiga-ui/core/components/modal';

import {TuiSheetDialogComponent} from './sheet-dialog.component';
import {
    TUI_SHEET_DIALOG_OPTIONS,
    type TuiSheetDialogOptions,
} from './sheet-dialog.options';

const THEME = '#404040';

@Injectable({
    providedIn: 'root',
})
export class TuiSheetDialogService extends TuiModalService<TuiSheetDialogOptions<any>> {
    private readonly theme = inject(TuiThemeColorService);
    private readonly initial = this.theme.color;

    protected readonly options = inject(TUI_SHEET_DIALOG_OPTIONS);
    protected readonly content = TuiSheetDialogComponent;

    // protected readonly $ = this.items$
    //     .pipe(startWith([]), pairwise(), takeUntilDestroyed())
    //     .subscribe(([prev, next]) => {
    //         if (!prev.length && next.length) {
    //             this.initial = this.theme.color;
    //             this.theme.color = THEME;
    //         }
    //
    //         if (!next.length && prev.length) {
    //             this.theme.color = this.initial;
    //         }
    //     });
}
