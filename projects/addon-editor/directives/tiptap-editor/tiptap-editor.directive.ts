import {Directive, Inject, Input, Output} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditorService} from '@taiga-ui/addon-editor/services';
import {TIPTAP_EDITOR_PROVIDERS} from './tiptap-editor.providers';

@Directive({
    selector: '[tuiTiptapEditor]',
    exportAs: 'tuiDesignMode',
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

    constructor(@Inject(TuiTiptapEditorService) public editor: TuiEditor) {}
}
