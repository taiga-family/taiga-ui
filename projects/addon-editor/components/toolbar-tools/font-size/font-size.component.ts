import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import type {TuiEditorFontOption} from '@taiga-ui/addon-editor/interfaces';
import {
    TUI_EDITOR_FONT_OPTIONS,
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '@taiga-ui/addon-editor/tokens';
import {TuiInjectionTokenType, tuiPx} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: `tui-font-size`,
    templateUrl: `./font-size.template.html`,
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
        readonly texts$: TuiInjectionTokenType<typeof TUI_EDITOR_TOOLBAR_TEXTS>,
        @Inject(TUI_EDITOR_FONT_OPTIONS)
        private readonly fontOptionsTexts$: TuiInjectionTokenType<
            typeof TUI_EDITOR_FONT_OPTIONS
        >,
    ) {}

    onClick({headingLevel, px}: Partial<TuiEditorFontOption>): void {
        if (headingLevel) {
            this.editor.setHeading(headingLevel);
        } else {
            this.editor.setParagraph({fontSize: tuiPx(px || 0)});
        }
    }
}
