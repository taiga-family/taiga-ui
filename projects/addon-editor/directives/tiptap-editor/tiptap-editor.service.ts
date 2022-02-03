import './tiptap-editor.types';

import {Inject, Injectable} from '@angular/core';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {TIPTAP_EDITOR} from '@taiga-ui/addon-editor/tokens';
import {getMarkRange} from '@taiga-ui/addon-editor/utils';
import type {Editor} from '@tiptap/core';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map, startWith} from 'rxjs/operators';

import {isEmptyParagraph} from './utils/is-empty-paragraph';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

// @dynamic
@Injectable()
export class TuiTiptapEditorService extends TuiEditor {
    get isFocused(): boolean {
        return this.editor.isFocused;
    }

    get html(): string {
        return this.editor.getHTML();
    }

    get editable(): boolean {
        return this.editor.isEditable;
    }

    set editable(editable: boolean) {
        this.editor.setEditable(editable);
    }

    editor!: Editor;

    constructor(@Inject(TIPTAP_EDITOR) private readonly editorRef: Observable<Editor>) {
        super();

        this.editorRef.subscribe(editor => {
            this.editor = editor;

            editor.on('transaction', () => {
                this.stateChange$.next();
            });

            editor.on('update', () => {
                const content = editor.getHTML();
                const json = editor.getJSON().content;
                const value: string = isEmptyParagraph(json) ? '' : content;

                this.valueChange$.next(value);
            });
        });
    }

    getOriginTiptapEditor(): Editor {
        return this.editor;
    }

    undoDisabled(): boolean {
        return !this.editor.can().undo();
    }

    redoDisabled(): boolean {
        return !this.editor.can().redo();
    }

    getFontColor(): string {
        return this.editor.getAttributes('textStyle').fontColor || 'rgb(51, 51, 51)';
    }

    getBackgroundColor(): string {
        return (
            this.editor?.getAttributes('textStyle').backgroundColor || 'rgb(51, 51, 51)'
        );
    }

    getCellColor(): string {
        return (
            this.editor.getAttributes('tableCell').background ||
            this.editor.getAttributes('tableHeader').background
        );
    }

    onAlign(align: string) {
        this.editor.chain().focus().setTextAlign(align).run();
    }

    setImage(src: string) {
        this.editor
            .chain()
            .focus()
            .first(({commands}) => [
                () => commands.setEditableImage?.({src}) || false,
                () => commands.setImage({src}),
            ])
            .run();
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

    isActive(nameOrAttributes: Record<string, string> | string): boolean {
        return this.editor.isActive(nameOrAttributes);
    }

    isActive$(nameOrAttributes: Record<string, string> | string): Observable<boolean> {
        return this.stateChange$.pipe(
            startWith(null),
            map(() => this.isActive(nameOrAttributes)),
            distinctUntilChanged(),
        );
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
        this.editor.chain().focus().toggleSuperscript().run();
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

    canSplitCells(): boolean {
        return this.editor.can().splitCell();
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

    setLink(href: string) {
        this.editor.chain().focus().setLink({href}).run();
    }

    unsetLink() {
        this.editor.chain().focus().unsetLink().run();
    }

    indent() {
        this.editor.commands.indent();
    }

    outdent() {
        this.editor.commands.outdent();
    }

    focus() {
        this.editor.chain().focus().run();
    }

    setValue(value: string): void {
        this.editor.commands.setContent(value);
    }

    destroy() {
        this.editor.destroy();
    }

    setCellColor(color: string) {
        this.editor.chain().focus().setCellBackground(color).run();
    }

    selectClosest() {
        const pos = this.editor.state.selection.anchor;
        const {schema, doc} = this.editor.state;
        const range = getMarkRange(doc.resolve(pos), schema.marks.link);

        if (range) {
            this.editor.chain().setTextSelection(range).run();
        }
    }
}
