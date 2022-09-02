import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '@taiga-ui/addon-editor/tokens';
import {tuiDefaultProp, TuiInjectionTokenType} from '@taiga-ui/cdk';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: `tui-table-cell-color`,
    templateUrl: `./table-cell-color.template.html`,
    styleUrls: [`../tools-common.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableCellColorComponent {
    @Input()
    @tuiDefaultProp()
    colors: ReadonlyMap<string, string> = this.defaultOptions.colors;

    readonly cellColorText$ = this.texts$.pipe(map(texts => texts.cellColor));

    readonly isActive$ = this.editor.isActive$(`table`);

    readonly cellColor$ = this.editor.stateChange$.pipe(
        map(() => this.editor.getCellColor() || this.defaultOptions.blankColor),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(TUI_EDITOR_OPTIONS)
        private readonly defaultOptions: TuiEditorOptions,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: TuiInjectionTokenType<typeof TUI_EDITOR_TOOLBAR_TEXTS>,
    ) {}

    isBlankColor(color: string): boolean {
        return color === this.defaultOptions.blankColor;
    }

    setCellColor(color: string): void {
        this.editor.setCellColor(color);
    }
}
