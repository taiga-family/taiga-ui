import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_EDITOR_TOOLBAR_TEXTS, TuiTiptapEditorService} from '@taiga-ui/addon-editor';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {LanguageEditor} from '@taiga-ui/i18n';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-table-merge-cells',
    templateUrl: './table-merge-cells.template.html',
    styleUrls: ['./table-merge-cells.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableMergeCellsComponent {
    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: TuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<LanguageEditor['toolbarTools']>,
    ) {}

    mergeCells() {
        this.editor.mergeCells();
    }

    splitCell() {
        this.editor.splitCell();
    }
}
