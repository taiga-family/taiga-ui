import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/addon-editor/tokens';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {LanguageEditor} from '@taiga-ui/i18n';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-table-merge-cells',
    templateUrl: './table-merge-cells.template.html',
    styleUrls: ['./table-merge-cells.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableMergeCellsComponent {
    @Input()
    @tuiDefaultProp()
    canMergeCells = false;

    @Input()
    @tuiDefaultProp()
    canSplitCells = false;

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
