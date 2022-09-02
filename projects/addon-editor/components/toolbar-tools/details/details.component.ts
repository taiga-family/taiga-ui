import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/addon-editor/tokens';
import type {TuiInjectionTokenType} from '@taiga-ui/cdk';

@Component({
    selector: `tui-details`,
    templateUrl: `./details.template.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDetailsComponent {
    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: TuiInjectionTokenType<typeof TUI_EDITOR_TOOLBAR_TEXTS>,
    ) {}

    setDetails(): void {
        this.editor.setDetails();
    }
}
