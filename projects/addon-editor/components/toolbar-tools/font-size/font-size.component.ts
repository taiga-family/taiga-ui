import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import type {TuiEditorFontOption} from '@taiga-ui/addon-editor/interfaces';
import type {TuiEditorOptions} from '@taiga-ui/addon-editor/tokens';
import {
    TUI_EDITOR_FONT_OPTIONS,
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
} from '@taiga-ui/addon-editor/tokens';
import {tuiPx} from '@taiga-ui/cdk';
import type {TuiLanguageEditor} from '@taiga-ui/i18n';
import type {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-font-size',
    templateUrl: './font-size.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiFontSizeComponent {
    readonly fontsOptions$: Observable<ReadonlyArray<Partial<TuiEditorFontOption>>> =
        this.fontOptionsTexts$.pipe(map(texts => this.options.fontOptions(texts)));

    readonly fontText$ = this.texts$.pipe(map(texts => texts.font));

    constructor(
        @Inject(TUI_EDITOR_OPTIONS)
        private readonly options: TuiEditorOptions,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
        @Inject(TUI_EDITOR_FONT_OPTIONS)
        private readonly fontOptionsTexts$: Observable<
            TuiLanguageEditor['editorFontOptions']
        >,
    ) {}

    /**
     * @deprecated:
     * use {@link setFontOption}
     */
    onClick({headingLevel, px}: Partial<TuiEditorFontOption>): void {
        this.setFontOption({headingLevel, px});
    }

    setFontOption({headingLevel, px}: Partial<TuiEditorFontOption>): void {
        this.clearPreviousTextStyles();

        if (headingLevel) {
            this.editor.setHeading(headingLevel);
        } else {
            this.editor.setParagraph({fontSize: tuiPx(px || 0)});
        }
    }

    private clearPreviousTextStyles(): void {
        this.editor.removeEmptyTextStyle();
        this.editor.toggleMark('textStyle');
    }
}
