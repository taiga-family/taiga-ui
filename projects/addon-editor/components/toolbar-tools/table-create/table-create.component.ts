import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/addon-editor/tokens';
import {LanguageEditor} from '@taiga-ui/i18n';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-table-create',
    templateUrl: './table-create.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableCreateComponent {
    readonly insertTableText$ = this.texts$.pipe(map(texts => texts.insertTable));

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: TuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<LanguageEditor['toolbarTools']>,
    ) {}

    addTable({rows, cols}: {rows: number; cols: number}) {
        const prev = this.editor.state.selection.anchor;

        this.editor.setHardBreak();
        this.editor.setTextSelection(prev);
        this.editor.insertTable(rows, cols);
    }
}
