import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/addon-editor/tokens';
import {LanguageEditor} from '@taiga-ui/i18n';
import {combineLatest, Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: 'tui-align-content',
    templateUrl: './align-content.template.html',
    styleUrls: ['../tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAlignContentComponent {
    readonly alignState$ = combineLatest([
        this.getActiveStatus$('left'),
        this.getActiveStatus$('right'),
        this.getActiveStatus$('center'),
        this.getActiveStatus$('justify'),
    ]).pipe(
        map(([left, right, center, justify]) => ({
            left,
            right,
            center,
            justify,
        })),
    );

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: TuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<LanguageEditor['toolbarTools']>,
    ) {}

    private getActiveStatus$(status: string): Observable<boolean> {
        return this.editor.stateChange$.pipe(
            map(() => this.editor.isActive({textAlign: status})),
            distinctUntilChanged(),
        );
    }
}
