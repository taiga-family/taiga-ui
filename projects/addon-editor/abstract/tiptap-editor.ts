// @ts-ignore
import type {InjectionToken} from '@angular/core';
// @ts-ignore
import type {BackgroundColor} from '@taiga-ui/addon-editor/extensions';
// @ts-ignore
import type {FontColor} from '@taiga-ui/addon-editor/extensions';
import {Editor} from '@tiptap/core';
// @ts-ignore
import type Image from '@tiptap/extension-image';
// @ts-ignore
import type Link from '@tiptap/extension-link';
// @ts-ignore
import type Subscript from '@tiptap/extension-subscript';
// @ts-ignore
import type Superscript from '@tiptap/extension-superscript';
// @ts-ignore
import type Table from '@tiptap/extension-table';
// @ts-ignore
import type TableCell from '@tiptap/extension-table-cell';
// @ts-ignore
import type TableHeader from '@tiptap/extension-table-header';
// @ts-ignore
import type TableRow from '@tiptap/extension-table-row';
// @ts-ignore
import type TextAlign from '@tiptap/extension-text-align';
// @ts-ignore
import type TextStyle from '@tiptap/extension-text-style';
// @ts-ignore
import type Underline from '@tiptap/extension-underline';
// @ts-ignore
import type StarterKit from '@tiptap/starter-kit';
import {redoDepth, undoDepth} from 'prosemirror-history';
import {TuiEditor} from './editor-adapter.abstract';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

export class TuiTiptapEditor extends TuiEditor {
    editor: Editor;

    constructor(editor: Editor) {
        super();
        this.editor = editor;

        editor.on('transaction', () => {
            this.stateChange$.next();
        });
    }

    undoDisabled(): boolean {
        return undoDepth(this.editor.state) === 0;
    }

    redoDisabled(): boolean {
        return redoDepth(this.editor.state) === 0;
    }

    getFontColor(): string {
        return this.editor.getAttributes('textStyle').fontColor || 'rgb(51, 51, 51)';
    }

    getBackgroundColor(): string {
        return (
            this.editor?.getAttributes('textStyle').backgroundColor || 'rgb(51, 51, 51)'
        );
    }

    onAlign(align: string) {
        this.editor.chain().focus().setTextAlign(align).run();
    }

    setImage(src: string) {
        this.editor.chain().focus().setImage({src}).run();
    }

    undo() {
        this.editor.chain().undo().run();
    }

    redo() {
        this.editor.chain().redo().run();
    }

    setHorizontalRule() {
        this.editor.chain().focus().setHorizontalRule().run();
    }

    removeFormat() {
        this.editor.commands.unsetAllMarks();
        this.editor.commands.clearNodes();
    }

    setFontColor(color: string) {
        this.editor.chain().focus().setFontColor(color).run();
    }

    setBackgroundColor(color: string) {
        this.editor.chain().focus().setBackgroundColor(color).run();
    }

    toggleUnderline() {
        this.editor.chain().focus().toggleUnderline().run();
    }
    toggleStrike() {
        this.editor.chain().focus().toggleStrike().run();
    }

    toggleOrderedList() {
        this.editor.chain().focus().toggleOrderedList().run();
    }

    toggleUnorderedList() {
        this.editor.chain().focus().toggleBulletList().run();
    }

    togglePre() {
        this.editor.chain().focus().toggleCodeBlock().run();
    }

    isActive(name: string): boolean {
        return this.editor.isActive(name);
    }

    toggleBold() {
        this.editor.chain().focus().toggleBold().run();
    }

    toggleCode() {
        this.editor.chain().focus().toggleCode().run();
    }

    toggleItalic() {
        this.editor.chain().focus().toggleItalic().run();
    }

    toggleBlockquote() {
        this.editor.chain().focus().toggleBlockquote().run();
    }

    toggleSubscript() {
        this.editor.chain().focus().toggleSubscript().run();
    }

    toggleSuperscript() {
        this.editor.chain().focus().toggleSubscript().run();
    }

    toggleCodeBlock() {
        this.editor.chain().focus().toggleCodeBlock().run();
    }

    insertTable(cols: number, rows: number) {
        this.editor.chain().focus().insertTable({cols, rows}).run();
    }

    addColumnAfter() {
        this.editor.chain().focus().addColumnAfter().run();
    }

    addColumnBefore() {
        this.editor.chain().focus().addColumnBefore().run();
    }

    addRowAfter() {
        this.editor.chain().focus().addRowAfter().run();
    }

    addRowBefore() {
        this.editor.chain().focus().addRowBefore().run();
    }

    deleteColumn() {
        this.editor.chain().focus().deleteColumn().run();
    }

    deleteRow() {
        this.editor.chain().focus().deleteRow().run();
    }

    mergeCells() {
        this.editor.chain().focus().mergeCells().run();
    }

    splitCell() {
        this.editor.chain().focus().splitCell().run();
    }

    canMergeCells(): boolean {
        return this.editor.can().mergeCells();
    }

    setHeading(level: Level) {
        this.editor.chain().focus().setHeading({level}).run();
    }

    setParagraph() {
        this.editor.chain().focus().setParagraph().run();
    }

    toggleLink(href: string) {
        this.editor.chain().focus().toggleLink({href}).run();
    }
}
