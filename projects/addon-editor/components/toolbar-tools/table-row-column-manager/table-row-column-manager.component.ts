import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {
    TUI_EDITOR_TABLE_COMMANDS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiTiptapEditorService,
} from '@taiga-ui/addon-editor';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {LanguageEditor} from '@taiga-ui/i18n';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export enum TableComands {
    InsertColumnBefore,
    InsertColumnAfter,
    InsertRowBefore,
    InsertRowAfter,
    DeleteColumn,
    DeleteRow,
}

@Component({
    selector: 'tui-table-row-column-manager',
    templateUrl: './table-row-column-manager.template.html',
    styleUrls: ['./table-row-column-manager.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableRowColumnManagerComponent {
    @Input()
    @tuiDefaultProp()
    isActive = false;

    readonly rowsColumnsManagingText$ = this.texts$.pipe(
        map(texts => texts.rowsColumnsManaging),
    );

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: TuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<LanguageEditor['toolbarTools']>,
        @Inject(TUI_EDITOR_TABLE_COMMANDS)
        readonly tableCommandTexts$: Observable<LanguageEditor['editorTableCommands']>,
    ) {}

    onTableOption(command: TableComands) {
        ({
            [TableComands.InsertColumnAfter]: () => this.editor.addColumnAfter(),
            [TableComands.InsertColumnBefore]: () => this.editor.addColumnBefore(),
            [TableComands.InsertRowAfter]: () => this.editor.addRowAfter(),
            [TableComands.InsertRowBefore]: () => this.editor.addRowBefore(),
            [TableComands.DeleteColumn]: () => this.editor.deleteColumn(),
            [TableComands.DeleteRow]: () => this.editor.deleteRow(),
        }[command]());
    }
}
