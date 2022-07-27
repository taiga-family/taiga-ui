import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '@taiga-ui/addon-editor/tokens';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {LanguageEditor} from '@taiga-ui/i18n';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: `tui-highlight-color`,
    templateUrl: `./highlight-color.template.html`,
    styleUrls: [`../tools-common.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiHighlightColorComponent {
    @Input()
    @tuiDefaultProp()
    colors: ReadonlyMap<string, string> = this.defaultOptions.colors;

    readonly backgroundColor$ = this.editor.stateChange$.pipe(
        map(() => this.editor.getBackgroundColor() || this.defaultOptions.blankColor),
        distinctUntilChanged(),
    );

    readonly backColorText$ = this.texts$.pipe(map(texts => texts.backColor));

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: TuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<LanguageEditor['toolbarTools']>,
        @Inject(TUI_EDITOR_OPTIONS)
        private readonly defaultOptions: TuiEditorOptions,
    ) {}

    isBlankColor(color: string): boolean {
        return color === this.defaultOptions.blankColor;
    }
}
