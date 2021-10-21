import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {
    defaultEditorColors,
    EDITOR_BLANK_COLOR,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiTiptapEditorService,
} from '@taiga-ui/addon-editor';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {LanguageEditor} from '@taiga-ui/i18n';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-table-cell-color',
    templateUrl: './table-cell-color.template.html',
    styleUrls: ['./table-cell-color.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableCellColorComponent {
    @Input()
    @tuiDefaultProp()
    colors: ReadonlyMap<string, string> = defaultEditorColors;

    @Input()
    @tuiDefaultProp()
    isActive = false;

    @Input()
    @tuiDefaultProp()
    cellColor = EDITOR_BLANK_COLOR;

    readonly cellColorText$ = this.texts$.pipe(map(texts => texts.cellColor));

    get cellColorBlank(): boolean {
        return this.cellColor === EDITOR_BLANK_COLOR;
    }

    setCellColor(color: string) {
        this.editor.setCellColor(color);
    }

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: TuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<LanguageEditor['toolbarTools']>,
    ) {}
}
