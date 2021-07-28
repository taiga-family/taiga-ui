import {Directive, Inject} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TuiTiptapEditor} from '@taiga-ui/addon-editor/components/editor-new/tiptap-editor';
import {TIPTAP_EDITOR_PROVIDERS} from './tiptap-editor.providers';

@Directive({
    selector: '[tuiTiptapEditor]',
    exportAs: 'tuiDesignMode',
    providers: [TIPTAP_EDITOR_PROVIDERS, TuiTiptapEditor],
})
export class TuiTiptapEditorDirective {
    constructor(@Inject(TuiTiptapEditor) public editor: TuiEditor) {}
}
