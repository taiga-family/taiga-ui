import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {defaultEditorColors, EDITOR_BLANK_COLOR} from '@taiga-ui/addon-editor/constants';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {TUI_EDITOR_TOOLBAR_TEXTS} from '@taiga-ui/addon-editor/tokens';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {LanguageEditor} from '@taiga-ui/i18n';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: 'tui-text-color',
    templateUrl: './text-color.template.html',
    styleUrls: ['../tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTextColorComponent {
    @Input()
    @tuiDefaultProp()
    colors: ReadonlyMap<string, string> = defaultEditorColors;

    readonly fontColor$ = this.editor.stateChange$.pipe(
        map(() => this.editor.getFontColor() || EDITOR_BLANK_COLOR),
        distinctUntilChanged(),
    );

    readonly foreColorText$ = this.texts$.pipe(map(texts => texts.foreColor));

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: TuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<LanguageEditor['toolbarTools']>,
    ) {}
}
