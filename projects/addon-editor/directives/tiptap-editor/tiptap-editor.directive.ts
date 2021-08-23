import {Directive, Inject, Input, Output} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TIPTAP_EDITOR_PROVIDERS} from './tiptap-editor.providers';
import {TuiTiptapEditorService} from './tiptap-editor.service';

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

    @Output()
    valueChange = this.editor.valueChange$;

    @Output()
    stateChange = this.editor.stateChange$;

    constructor(@Inject(TuiTiptapEditorService) public editor: TuiEditor) {}
}
