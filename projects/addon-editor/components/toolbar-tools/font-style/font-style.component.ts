import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {defaultEditorTools} from '@taiga-ui/addon-editor/constants';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TuiEditorTool} from '@taiga-ui/addon-editor/enums';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/addon-editor/tokens';
import {LanguageEditor} from '@taiga-ui/i18n';
import {combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: 'tui-font-style',
    templateUrl: './font-style.template.html',
    styleUrls: ['../tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFontStyleComponent {
    @Input()
    enabledTools: ReadonlyArray<TuiEditorTool> = defaultEditorTools;

    readonly TuiEditorTool: typeof TuiEditorTool = TuiEditorTool;

    readonly fontStyleState$ = combineLatest([
        this.getActiveStatus$('bold'),
        this.getActiveStatus$('italic'),
        this.getActiveStatus$('underline'),
        this.getActiveStatus$('strike'),
    ]).pipe(
        map(([bold, italic, underline, strikeThrough]) => ({
            bold,
            italic,
            underline,
            strikeThrough,
        })),
    );

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: TuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<LanguageEditor['toolbarTools']>,
    ) {}

    isEnabled(tool: TuiEditorTool): boolean {
        return this.enabledTools.includes(tool);
    }

    private getActiveStatus$(status: string): Observable<boolean> {
        return this.editor.stateChange$.pipe(
            map(() => this.editor.isActive(status)),
            distinctUntilChanged(),
        );
    }
}
