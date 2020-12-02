export interface Schema {
    error?: string;
    info?: {
        [key: string]: any;
    };
    success: boolean;
    target?: Target;
}
export interface Target {
    configuration?: string;
    project?: string;
    target?: string;
}
