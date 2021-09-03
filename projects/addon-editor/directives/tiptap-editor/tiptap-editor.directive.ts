import {DOCUMENT} from '@angular/common';
import {Directive, Inject, Input, Output, Renderer2} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TUI_EDITOR_STYLES} from '../../tokens';
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

    @Input()
    set editable(editable: boolean) {
        this.editor.editable = editable;
    }

    @Output()
    valueChange = this.editor.valueChange$;

    @Output()
    stateChange = this.editor.stateChange$;

    constructor(
        @Inject(TuiTiptapEditorService) public editor: TuiEditor,
        @Inject(Renderer2) readonly renderer: Renderer2,
        @Inject(TUI_EDITOR_STYLES) styles: string,
        @Inject(DOCUMENT) {head}: Document,
    ) {
        if (head.querySelector('style[data-tui-editor-socket]')) {
            return;
        }

        const style = renderer.createElement('style');

        renderer.setProperty(style, 'textContent', styles);
        renderer.setAttribute(style, 'data-tui-editor-socket', '');

        head.appendChild(style);
    }
}
