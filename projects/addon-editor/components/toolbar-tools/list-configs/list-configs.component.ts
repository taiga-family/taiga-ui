import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/addon-editor/tokens';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-list-configs',
    templateUrl: './list-configs.template.html',
    styleUrls: ['../tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiListConfigsComponent {
    readonly listState$ = combineLatest([
        this.editor.isActive$('orderedList'),
        this.editor.isActive$('bulletList'),
    ]).pipe(
        map(([ordered, unordered]) => ({
            ordered,
            unordered,
        })),
    );

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: TuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
    ) {}
}
