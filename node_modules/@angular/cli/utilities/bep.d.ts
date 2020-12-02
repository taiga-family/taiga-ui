export interface BuildEventMessage {
    id: {};
    [key: string]: {};
}
export declare class BepGenerator {
    private constructor();
    static createBuildStarted(command: string, time?: number): BuildEventMessage;
    static createBuildFinished(code: number, time?: number): BuildEventMessage;
}
export declare class BepJsonWriter {
    readonly filename: string;
    private stream;
    constructor(filename: string);
    close(): void;
    writeEvent(event: BuildEventMessage): void;
    writeBuildStarted(command: string, time?: number): void;
    writeBuildFinished(code: number, time?: number): void;
}
