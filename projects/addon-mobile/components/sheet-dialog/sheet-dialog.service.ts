import {inject, Injectable} from '@angular/core';
import {TuiThemeColorService} from '@taiga-ui/addon-mobile/services';
import {type TuiModalComponent, TuiModalService} from '@taiga-ui/core/portals/modal';
import {type PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {TuiSheetDialogComponent} from './sheet-dialog.component';
import {
    TUI_SHEET_DIALOG_OPTIONS,
    type TuiSheetDialogOptions,
} from './sheet-dialog.options';

@Injectable({providedIn: 'root'})
export class TuiSheetDialogService extends TuiModalService<TuiSheetDialogOptions<any>> {
    private readonly theme = inject(TuiThemeColorService);
    private initial = '';
    private count = 0;

    protected readonly options = inject(TUI_SHEET_DIALOG_OPTIONS);
    protected readonly content = TuiSheetDialogComponent;

    protected override add(
        component: PolymorpheusComponent<TuiModalComponent<TuiSheetDialogOptions>>,
    ): () => void {
        const {themeColor} = this.options;

        if (themeColor !== null) {
            if (!this.count) {
                // Capture the live theme color at the moment the first sheet
                // opens, not once at construction — otherwise a theme change made
                // after the service was created (e.g. an app-level dark-mode
                // effect) is lost on revert. Capturing at the 0 -> 1 transition
                // also avoids the nested case reverting onto themeColor instead
                // of the original color.
                this.initial = this.theme.color;
            }

            this.count++;
            this.theme.color = themeColor;
        }

        const cleanup = super.add(component);

        return () => {
            cleanup();

            if (themeColor !== null && !--this.count) {
                this.theme.color = this.initial;
            }
        };
    }
}
