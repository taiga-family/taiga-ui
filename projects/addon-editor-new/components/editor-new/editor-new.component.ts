import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Editor} from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';

@Component({
    selector: 'tui-editor-new',
    templateUrl: './editor-new.component.html',
})
export class TuiEditorNewComponent implements OnInit {
    @ViewChild('editor', {static: true})
    elementRef?: ElementRef<HTMLElement>;

    editor?: Editor;

    constructor() {}

    ngOnInit(): void {
        this.editor = new Editor({
            element: this.elementRef?.nativeElement,
            extensions: [StarterKit],
            content: '<p>Hello World!</p>',
        });
    }

    onBold() {
        if (!this.editor) {
            return;
        }

        this.editor.chain().focus().toggleBold().run();
    }

    addTable() {}
}
