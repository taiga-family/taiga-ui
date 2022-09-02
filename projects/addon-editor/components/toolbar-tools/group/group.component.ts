import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/addon-editor/tokens';
import type {TuiInjectionTokenType} from '@taiga-ui/cdk';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: `tui-editor-group-tool`,
    templateUrl: `./group.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEditorGroupToolComponent {
    readonly insertGroupText$ = this.texts$.pipe(map(texts => texts.insertGroup));
    readonly removeGroupText$ = this.texts$.pipe(map(texts => texts.removeGroup));

    readonly disabled$ = this.editor.stateChange$.pipe(
        map(() => !this.editor.isActive(`group`)),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: TuiInjectionTokenType<typeof TUI_EDITOR_TOOLBAR_TEXTS>,
    ) {}

    addGroup(): void {
        this.editor.setGroup();
    }

    removeGroup(): void {
        this.editor.removeGroup();
    }
}
