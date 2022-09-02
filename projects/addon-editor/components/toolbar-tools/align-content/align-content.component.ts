import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/addon-editor/tokens';
import type {TuiLanguageEditor} from '@taiga-ui/i18n';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: `tui-align-content`,
    templateUrl: `./align-content.template.html`,
    styleUrls: [`../tools-common.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAlignContentComponent {
    readonly alignState$ = combineLatest([
        this.editor.isActive$({textAlign: `left`}),
        this.editor.isActive$({textAlign: `right`}),
        this.editor.isActive$({textAlign: `center`}),
        this.editor.isActive$({textAlign: `justify`}),
    ]).pipe(
        map(([left, right, center, justify]) => ({
            left,
            right,
            center,
            justify,
        })),
    );

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
    ) {}
}
