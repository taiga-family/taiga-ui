export interface CodeEditor {
    readonly name: string;

    open(component: string, sampleId: string, files: Record<string, string>): void;
}
