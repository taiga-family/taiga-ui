import {Directive, Inject, Input, Output} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TUI_EDITOR_STYLES} from '@taiga-ui/addon-editor/tokens';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';
import {TIPTAP_EDITOR_PROVIDERS} from './tiptap-editor.providers';
import {TuiTiptapEditorService} from './tiptap-editor.service';

@Directive({
    selector: '[tuiTiptapEditor]',
    providers: [TIPTAP_EDITOR_PROVIDERS, TuiTiptapEditorService],
})
export class TuiTiptapEditorDirective {
    @Input()
    set value(value: string) {
        if (value !== this.editor.html) {
            this.editor.setValue(value);
        }
    }

    @Input()
    set editable(editable: boolean) {
        this.editor.editable = editable;
    }

    @Output()
    valueChange = this.editor.valueChange$;

    @Output()
    stateChange = this.editor.stateChange$;

    constructor(
        @Inject(TuiTiptapEditorService) readonly editor: TuiEditor,
        @Inject(TUI_EDITOR_STYLES) styles: string,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addStyle(styles, 'data-tui-editor-socket');
    }
}
