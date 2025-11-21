import {inject, Injectable} from '@angular/core';
import {TuiThemeColorService} from '@taiga-ui/addon-mobile/services';
import {type TuiModalComponent, TuiModalService} from '@taiga-ui/core/portals/modal';
import {type PolymorpheusComponent} from '@taiga-ui/polymorpheus';

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
    private count = 0;

    protected readonly options = inject(TUI_SHEET_DIALOG_OPTIONS);
    protected readonly content = TuiSheetDialogComponent;

    protected override add(
        component: PolymorpheusComponent<TuiModalComponent<TuiSheetDialogOptions>>,
    ): () => void {
        this.count++;
        this.theme.color = THEME;

        const cleanup = super.add(component);

        return () => {
            cleanup();
            this.count--;

            if (!this.count) {
                this.theme.color = this.initial;
            }
        };
    }
}
