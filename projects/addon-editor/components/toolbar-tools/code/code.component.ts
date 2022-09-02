import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {
    TUI_EDITOR_CODE_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
} from '@taiga-ui/addon-editor/tokens';
import type {TuiInjectionTokenType} from '@taiga-ui/cdk';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: `tui-code`,
    templateUrl: `./code.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiCodeComponent {
    readonly hintText$ = this.texts$.pipe(map(texts => texts.code));

    readonly insideCode$ = this.editor.stateChange$.pipe(
        map(() => this.editor.isActive(`code`) || this.editor.isActive(`codeBlock`)),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: TuiInjectionTokenType<typeof TUI_EDITOR_TOOLBAR_TEXTS>,
        @Inject(TUI_EDITOR_CODE_OPTIONS)
        readonly codeOptionsTexts$: TuiInjectionTokenType<typeof TUI_EDITOR_CODE_OPTIONS>,
    ) {}

    onCode(isCodeBlock: boolean): void {
        if (isCodeBlock) {
            this.editor.toggleCodeBlock();
        } else {
            this.editor.toggleCode();
        }
    }
}
