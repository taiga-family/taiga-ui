export interface Schema {
    currentDirectory: string;
    id: number;
    info: {
        [key: string]: any;
    };
    options?: {
        [key: string]: any;
    };
    target?: Target;
    workspaceRoot: string;
}
export interface Target {
    configuration?: string;
    project: string;
    target: string;
}
