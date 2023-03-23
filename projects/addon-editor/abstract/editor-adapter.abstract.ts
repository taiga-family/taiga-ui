import {Directive} from '@angular/core';
import type {TuiEditableIframe} from '@taiga-ui/addon-editor/extensions/iframe-editor';
import type {TuiYoutubeOptions} from '@taiga-ui/addon-editor/extensions/youtube';
import type {TuiEditorAttachedFile} from '@taiga-ui/addon-editor/interfaces';
import type {Editor, Range} from '@tiptap/core';
import type {MarkType} from '@tiptap/pm/model';
import type {EditorState} from 'prosemirror-state';
import type {Observable} from 'rxjs';
import {Subject} from 'rxjs';

@Directive()
export abstract class AbstractTuiEditor {
    abstract readonly isFocused: boolean;
    abstract readonly html: string;
    abstract editable: boolean;

    readonly stateChange$ = new Subject<void>();
    readonly valueChange$ = new Subject<string>();

    abstract get state(): EditorState;

    abstract isActive$(name: Record<string, string> | string): Observable<boolean>;

    abstract isActive(name: Record<string, string> | string): boolean;
    abstract undoDisabled(): boolean;
    abstract redoDisabled(): boolean;
    abstract getFontColor(): string;
    abstract getBackgroundColor(): string;
    abstract getCellColor(): string;
    abstract getGroupColor(): string;
    abstract onAlign(align: string): void;
    abstract setImage(src: string): void;
    abstract undo(): void;
    abstract redo(): void;
    abstract setHorizontalRule(): void;
    abstract removeFormat(): void;
    abstract setFontColor(color: string): void;
    abstract setBackgroundColor(color: string): void;
    abstract toggleBold(): void;
    abstract toggleItalic(): void;
    abstract toggleUnderline(): void;
    abstract toggleBlockquote(): void;
    abstract toggleStrike(): void;
    abstract toggleOrderedList(): void;
    abstract toggleUnorderedList(): void;
    abstract toggleCode(): void;
    abstract togglePre(): void;
    abstract toggleSubscript(): void;
    abstract toggleSuperscript(): void;
    abstract toggleCodeBlock(): void;
    abstract liftListItem(): void;
    abstract sinkListItem(): void;
    abstract insertTable(rows: number, cols: number): void;
    abstract addColumnAfter(): void;
    abstract addColumnBefore(): void;
    abstract addRowAfter(): void;
    abstract addRowBefore(): void;
    abstract deleteColumn(): void;
    abstract deleteRow(): void;
    abstract mergeCells(): void;
    abstract canMergeCells(): boolean;
    abstract canSplitCells(): boolean;
    abstract splitCell(): void;
    abstract setHeading(level: number): void;
    abstract removeEmptyTextStyle(): void;
    abstract toggleMark(
        typeOrName: MarkType | string,
        attributes?: Record<string, any>,
        options?: {
            /**
             * Removes the mark even across the current selection. Defaults to `false`.
             */
            extendEmptyMarkRange?: boolean;
        },
    ): void;
    abstract setParagraph(options?: {fontSize: string}): void;
    abstract setHardBreak(): void;
    abstract setTextSelection(value: Range | number): void;
    abstract toggleLink(href: string): void;
    abstract setLink(href: string): void;
    abstract unsetLink(): void;
    abstract destroy(): void;
    abstract selectClosest(): void;
    abstract focus(): void;
    abstract setValue(value: string): void;
    abstract setCellColor(color: string): void;
    abstract getOriginTiptapEditor(): Editor;
    abstract enter(): void;
    abstract setDetails(): void;
    abstract removeDetails(): void;
    abstract setGroup(): void;
    abstract setGroupHilite(color: string): void;
    abstract removeGroup(): void;
    abstract setAnchor(id: string): void;
    abstract removeAnchor(): void;
    abstract setFileLink(preview: TuiEditorAttachedFile): void;
    abstract setYoutubeVideo(options: TuiYoutubeOptions): void;
    abstract setIframe(options: TuiEditableIframe): void;
}
