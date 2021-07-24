import {Subject} from 'rxjs';

export abstract class EditorAdapter {
    readonly stateChange$ = new Subject();

    abstract isActive(name: string): boolean;
    abstract undoDisabled(): boolean;
    abstract redoDisabled(): boolean;
    abstract getFontColor(): boolean;
    abstract getBackgroundColor(): boolean;
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
    abstract toggleStrike(): void;
    abstract toggleOrderedList(): void;
    abstract toggleUnorderedList(): void;
    abstract toggleCode(): void;
    abstract togglePre(): void;
}
