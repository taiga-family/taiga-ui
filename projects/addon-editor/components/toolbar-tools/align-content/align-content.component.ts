import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/addon-editor/tokens';
import {LanguageEditor} from '@taiga-ui/i18n';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-align-content',
    templateUrl: './align-content.template.html',
    styleUrls: ['../tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAlignContentComponent {
    readonly alignState$ = this.editor.stateChange$.pipe(
        map(() => ({
            left: this.editor.isActive({textAlign: 'left'}),
            right: this.editor.isActive({textAlign: 'right'}),
            center: this.editor.isActive({textAlign: 'center'}),
            justify: this.editor.isActive({textAlign: 'justify'}),
        })),
    );

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: TuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<LanguageEditor['toolbarTools']>,
    ) {}
}
