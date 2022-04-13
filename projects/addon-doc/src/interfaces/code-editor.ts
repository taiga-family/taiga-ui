export interface TuiCodeEditor {
    readonly name: string;
    edit(component: string, id: string, files: Record<string, string>): Promise<void>;

    /**
     * @deprecated
     * use `edit` method instead of `open`
     */
    open(component: string, sampleId: string, files: Record<string, string>): void;
}

/**
 * @deprecated use {@link TuiCodeEditor}
 */
export type CodeEditor = TuiCodeEditor;
