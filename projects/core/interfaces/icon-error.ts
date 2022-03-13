export interface TuiIconError {
    readonly message: string;
    readonly icon: string | keyof typeof import('@taiga-ui/icons');
}
