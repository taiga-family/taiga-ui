import {Directive, Inject} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TIPTAP_EDITOR_PROVIDERS} from './tiptap-editor.providers';
import {TuiTiptapEditorService} from './tiptap-editor.service';

@Directive({
    selector: '[tuiTiptapEditor]',
    exportAs: 'tuiDesignMode',
    providers: [TIPTAP_EDITOR_PROVIDERS, TuiTiptapEditorService],
})
export class TuiTiptapEditorDirective {
    constructor(@Inject(TuiTiptapEditorService) public editor: TuiEditor) {}
}
