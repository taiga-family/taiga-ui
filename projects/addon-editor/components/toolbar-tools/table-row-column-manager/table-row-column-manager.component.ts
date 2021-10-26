import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {
    TUI_EDITOR_TABLE_COMMANDS,
    TUI_EDITOR_TOOLBAR_TEXTS,
} from '@taiga-ui/addon-editor/tokens';
import {LanguageEditor} from '@taiga-ui/i18n';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

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
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableRowColumnManagerComponent {
    readonly isDisabled$ = this.editor.stateChange$.pipe(
        map(() => !this.editor.isActive('table')),
        distinctUntilChanged(),
    );
    readonly rowsColumnsManagingText$ = this.texts$.pipe(
        map(texts => texts.rowsColumnsManaging),
    );

    private commandsRegistry: Record<TableComands, () => void> = {
        [TableComands.InsertColumnAfter]: () => this.editor.addColumnAfter(),
        [TableComands.InsertColumnBefore]: () => this.editor.addColumnBefore(),
        [TableComands.InsertRowAfter]: () => this.editor.addRowAfter(),
        [TableComands.InsertRowBefore]: () => this.editor.addRowBefore(),
        [TableComands.DeleteColumn]: () => this.editor.deleteColumn(),
        [TableComands.DeleteRow]: () => this.editor.deleteRow(),
    };

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: TuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<LanguageEditor['toolbarTools']>,
        @Inject(TUI_EDITOR_TABLE_COMMANDS)
        readonly tableCommandTexts$: Observable<LanguageEditor['editorTableCommands']>,
    ) {}

    onTableOption(command: TableComands) {
        this.commandsRegistry[command]();
    }
}
