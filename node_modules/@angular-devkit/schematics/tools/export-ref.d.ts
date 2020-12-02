export declare class ExportStringRef<T> {
    private _ref?;
    private _module;
    private _path;
    constructor(ref: string, parentPath?: string, inner?: boolean);
    get ref(): T | undefined;
    get module(): string;
    get path(): string;
}
