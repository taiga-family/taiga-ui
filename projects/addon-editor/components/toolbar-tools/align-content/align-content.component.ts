import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/addon-editor/tokens';
import {LanguageEditor} from '@taiga-ui/i18n';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-align-content',
    templateUrl: './align-content.template.html',
    styleUrls: ['./align-content.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiJustifyContentComponent {
    get alignLeft(): boolean {
        return this.editor.isActive({textAlign: 'left'});
    }

    get alignRight(): boolean {
        return this.editor.isActive({textAlign: 'right'});
    }

    get alignCenter(): boolean {
        return this.editor.isActive({textAlign: 'center'});
    }

    get justify(): boolean {
        return this.editor.isActive({textAlign: 'justify'});
    }

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: TuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<LanguageEditor['toolbarTools']>,
    ) {}
}
