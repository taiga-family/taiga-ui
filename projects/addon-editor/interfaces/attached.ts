export interface TuiEditorAttachedFile<T = Record<string, any>> {
    name: string;
    link: string;
    attrs?: T;
}

export interface TuiEditorAttachOptions {
    accept: string;
    multiple: boolean;
}
