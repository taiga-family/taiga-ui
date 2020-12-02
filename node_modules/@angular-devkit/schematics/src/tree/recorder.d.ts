/// <reference types="node" />
import { UpdateBuffer } from '../utility/update-buffer';
import { FileEntry, UpdateRecorder } from './interface';
export declare class UpdateRecorderBase implements UpdateRecorder {
    protected _path: string;
    protected _original: Buffer;
    protected _content: UpdateBuffer;
    constructor(entry: FileEntry);
    static createFromFileEntry(entry: FileEntry): UpdateRecorderBase;
    get path(): string;
    insertLeft(index: number, content: Buffer | string): UpdateRecorder;
    insertRight(index: number, content: Buffer | string): UpdateRecorder;
    remove(index: number, length: number): UpdateRecorder;
    apply(content: Buffer): Buffer;
}
export declare class UpdateRecorderBom extends UpdateRecorderBase {
    private _delta;
    constructor(entry: FileEntry, _delta?: number);
    insertLeft(index: number, content: Buffer | string): UpdateRecorder;
    insertRight(index: number, content: Buffer | string): UpdateRecorder;
    remove(index: number, length: number): UpdateRecorder;
}
