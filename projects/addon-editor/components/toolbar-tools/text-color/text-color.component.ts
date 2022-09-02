import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import type {AbstractTuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/directives';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '@taiga-ui/addon-editor/tokens';
import {tuiDefaultProp, TuiInjectionTokenType} from '@taiga-ui/cdk';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: `tui-text-color`,
    templateUrl: `./text-color.template.html`,
    styleUrls: [`../tools-common.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTextColorComponent {
    @Input()
    @tuiDefaultProp()
    colors: ReadonlyMap<string, string> = this.defaultOptions.colors;

    readonly fontColor$ = this.editor.stateChange$.pipe(
        map(() => this.editor.getFontColor() || this.defaultOptions.blankColor),
        distinctUntilChanged(),
    );

    readonly foreColorText$ = this.texts$.pipe(map(texts => texts.foreColor));

    constructor(
        @Inject(TUI_EDITOR_OPTIONS)
        private readonly defaultOptions: TuiEditorOptions,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: TuiInjectionTokenType<typeof TUI_EDITOR_TOOLBAR_TEXTS>,
    ) {}
}
