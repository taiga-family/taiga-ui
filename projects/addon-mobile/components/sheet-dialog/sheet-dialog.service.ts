import {inject, Injectable, InjectionToken} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {type TuiModalComponent, TuiModalService} from '@taiga-ui/core/portals/modal';
import {type PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {TuiSheetDialogComponent} from './sheet-dialog.component';
import {
    TUI_SHEET_DIALOG_OPTIONS,
    type TuiSheetDialogOptions,
} from './sheet-dialog.options';

const THEME_COLOR = 'name="theme-color"';

// The meta tag is global, while the service may have several instances (e.g. DropdownSheet)
const OPENED = new InjectionToken(ngDevMode ? 'OPENED' : '', {
    factory: () => ({count: 0, initial: ''}),
});

@Injectable({providedIn: 'root'})
export class TuiSheetDialogService extends TuiModalService<TuiSheetDialogOptions<any>> {
    private readonly meta = inject(Meta);
    private readonly opened = inject(OPENED);

    protected readonly options = inject(TUI_SHEET_DIALOG_OPTIONS);
    protected readonly content = TuiSheetDialogComponent;

    protected override add(
        component: PolymorpheusComponent<TuiModalComponent<TuiSheetDialogOptions>>,
    ): () => void {
        // Read the live tag at open time, not at construction: a color set later
        // (an app-level dark mode effect) would otherwise be lost on revert.
        if (!this.opened.count++ && this.options.themeColor) {
            this.opened.initial = this.meta.getTag(THEME_COLOR)?.content ?? '';
            this.meta.updateTag({
                name: 'theme-color',
                content: this.options.themeColor,
            });
        }

        const cleanup = super.add(component);

        return () => {
            cleanup();

            if (--this.opened.count || !this.options.themeColor) {
                return;
            }

            if (this.opened.initial) {
                this.meta.updateTag({name: 'theme-color', content: this.opened.initial});
            } else {
                this.meta.removeTag(THEME_COLOR);
            }
        };
    }
}
