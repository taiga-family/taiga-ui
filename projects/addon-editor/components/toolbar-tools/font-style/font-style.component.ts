import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {AbstractTuiEditor} from '@taiga-ui/addon-editor/abstract';
import {defaultEditorTools} from '@taiga-ui/addon-editor/constants';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TuiEditorTool} from '@taiga-ui/addon-editor/enums';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/addon-editor/tokens';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: `tui-font-style`,
    templateUrl: `./font-style.template.html`,
    styleUrls: [`../tools-common.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFontStyleComponent {
    private toolsSet: Set<TuiEditorTool> = new Set(defaultEditorTools);

    @Input()
    set enabledTools(value: readonly TuiEditorTool[] | Set<TuiEditorTool>) {
        this.toolsSet = new Set(value);
    }

    readonly TuiEditorTool: typeof TuiEditorTool = TuiEditorTool;

    readonly fontStyleState$ = combineLatest([
        this.editor.isActive$(`bold`),
        this.editor.isActive$(`italic`),
        this.editor.isActive$(`underline`),
        this.editor.isActive$(`strike`),
    ]).pipe(
        map(([bold, italic, underline, strike]) => ({
            bold,
            italic,
            underline,
            strike,
        })),
    );

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
    ) {}

    isEnabled(tool: TuiEditorTool): boolean {
        return this.toolsSet.has(tool);
    }
}
