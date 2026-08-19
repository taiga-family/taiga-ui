import {inject, Injectable} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {type TuiModalComponent, TuiModalService} from '@taiga-ui/core/portals/modal';
import {type PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {TuiSheetDialogComponent} from './sheet-dialog.component';
import {
    TUI_SHEET_DIALOG_OPTIONS,
    type TuiSheetDialogOptions,
} from './sheet-dialog.options';

const THEME_COLOR = 'name="theme-color"';

@Injectable({providedIn: 'root'})
export class TuiSheetDialogService extends TuiModalService<TuiSheetDialogOptions<any>> {
    private readonly meta = inject(Meta);
    private initial = '';
    private count = 0;

    protected readonly options = inject(TUI_SHEET_DIALOG_OPTIONS);
    protected readonly content = TuiSheetDialogComponent;

    protected override add(
        component: PolymorpheusComponent<TuiModalComponent<TuiSheetDialogOptions>>,
    ): () => void {
        // Read the live tag at open time, not at construction: a color set later
        // (an app-level dark mode effect) would otherwise be lost on revert.
        if (!this.count++ && this.options.themeColor) {
            this.initial = this.meta.getTag(THEME_COLOR)?.content ?? '';
            this.meta.updateTag({
                name: 'theme-color',
                content: this.options.themeColor,
            });
        }

        const cleanup = super.add(component);

        return () => {
            cleanup();

            if (--this.count || !this.options.themeColor) {
                return;
            }

            if (this.initial) {
                this.meta.updateTag({name: 'theme-color', content: this.initial});
            } else {
                this.meta.removeTag(THEME_COLOR);
            }
        };
    }
}
